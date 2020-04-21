import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/sginin
// Required fields in body: email, password
export default async function handle(req, res) {
    const { email, password } = req.body;
    
    console.log(email, password);

    const result = await prisma.user.findOne({ where: { email }});
    console.log(result);

    res.json(result)

    try{
        const user = await prisma.user.findOne({ where: { email }});
        if(!user){
            res.json({
                ok: false,
                error: "유저가 존재하지 않습니다.",
                token: null
            });
        }

        if( password === user.password ){
            const token = 'this is token';
            res.json({
                ok: true,
                error: null,
                token: token
            })
        }else {
            res.json({
                ok: false,
                error: "비밀번호가 틀렸습니다.",
                token: null
            });
        }


    }catch(error){

    }
}
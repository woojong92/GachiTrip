import { PrismaClient } from '@prisma/client'
import { BADQUERY } from 'dns';

const prisma = new PrismaClient()

// POST /api/signup
// Required fields in body: name, email
export default async function handle(req, res) {
    console.log('sign up');
    const { email, password, username } = req.body;

    try{
        const existingUser = await prisma.user.findOne({where: { email}});
        if(existingUser) {
            res.json({
                ok: false,
                error: "이미 존재하는 이메일입니다."
            });
        }else{
            await prisma.user.create({
                ...req.body
            });
            res.json({
                ok: true,
                error: null
            });
        }
    }catch(error){
        res.json({
            ok: false,
            error: error.message
        });
    }

    console.log( email, password, username );

    //res.json({result: "ok"})
}

// const result = await prisma.user.create({
//     data: {
//       ...req.body,
//     },
//   })
//   res.json(result)
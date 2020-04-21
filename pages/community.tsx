import React from "react";
import { GetServerSideProps } from "next";
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'



const Community : React.FC<any> = props => {
    return (
        <Layout>
            <div className="page">
                <h1>Community</h1>
                <main>
                    <div>Community</div>
                </main>
            </div>
        </Layout>
    )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch("http://localhost:3000/api");
//     const drafts = await res.json();
//     return {
//         props: { drafts },
//     }
// }

export default Community;
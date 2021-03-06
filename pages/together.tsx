import React from 'react'
// import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
// import fetch from 'isomorphic-unfetch'
// import Post, { PostProps } from '../components/Post'

// type Props = {
//   drafts: PostProps[]
// }

function Drafts () {
  return (
    <Layout>
      <div className="page">
        <h1>같이 여행 갈래?</h1>
        <main>
          {
        //       props.drafts.map(post => (
        //     <div key={post.id} className="post">
        //       <Post post={post} />
        //     </div>
        //   ))
        }
        with
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/drafts')
//   const drafts = await res.json()
//   return {
//     props: { drafts },
//   }
// }

export default Drafts

import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Layout from '../components/Layout'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');



  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = {username, email, password }
      console.log(body);
      const res = await fetch(`http://localhost:3000/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
  <Layout>
    <div className="page">
      <form
        onSubmit={submitData}>
        <h1>회원가입</h1>
        <input
          autoFocus
          onChange={e => setUsername(e.target.value)}
          placeholder="username 영문소문자,숫자 . _ 만 가능"
          type="text"
          value={username}
        />
        <input
          autoFocus
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          type="text"
          value={email}
        />
        <input
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          type="text"
          value={password}
        />
        <input
          onChange={e => setComfirmPassword(e.target.value)}
          placeholder="comfirm password"
          type="text"
          value={comfirmPassword}
        />
        <input
          disabled={!username || !email}
          type="submit"
          value="Signup"
        />
        <a className="back" href="#" onClick={() => Router.push('/')}>
          or Cancel
        </a>
      </form>
    </div>
    <style jsx>{`
      .page {
        background: white;
        padding: 3rem;
        display: flex;
        justify-content: center;
      }

      input[type='text'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
  </Layout>
  )
}

export default SignUp
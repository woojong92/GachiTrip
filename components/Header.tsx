import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean =
    pathname => router.pathname === pathname

  return(
    <nav>
      <div className="left">      
        <Link href="/">
          <a className="logo" data-active={isActive('/')}>
            GachiTrip
          </a>
        </Link>

        <div className="menu-group"></div>
          <Link href="/community">
            <a data-active={isActive('/community')}>Community</a>
          </Link>

          <Link href="/together">
            <a className="bold" data-active={isActive('/withs')}>Together</a>
          </Link>
        </div>

      <div className="right">
        <Link href="/signup">
          <a className= "signup-btn" data-active={isActive('/signup')}>Sign Up</a>
        </Link>
        <Link href="/signin">
          <a data-active={isActive('/signin')}>Sign In</a>
        </Link>

        {
          //   <Link href="/create">
          //   <a data-active={isActive('/create')}>+ Create draft</a>
          // </Link>
        }
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
          justify-content: center;
          background-color: #fff;
        }

        .logo {
          font-size: 20px;
          font-weight: bold;
          color: #000;
          margin-right: 20px;
        }

        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left {
          display: felx;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          margin-left: auto;
        }

        .right .signup-btn {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }

        // .right a {
        //   border: 1px solid black;
        //   padding: 0.5rem 1rem;
        //   border-radius: 3px;
        // }
      `}</style>
    </nav>
  )
}

export default Header

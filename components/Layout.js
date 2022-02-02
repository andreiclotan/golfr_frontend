import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUserId, getUsername } from '../lib/userAuth'

const Layout = ({ children }) => {
  const [ username, setUsername ] = useState('')
  const [ id, setId ] = useState('')
  useEffect(() => setUsername(getUsername()), [])
  useEffect(() => setId(getUserId()), [])

  return (
    <>
      <header className="flex flex-row w-full px-10 py-2 shadow">
        <span className="h-8 items-center space-x-6">
          <span className="text-2xl">Golfr 🏌️</span>
          <span className="text-xl">Home</span>
        </span>
        <Link href={`/golfers/${id}`}>
          <span className="h-8 items-center text-xl ml-auto">
            {username}
            <span className="text-sm">
              {' ('}
              <Link href={'/logout'}>
                <a className="underline text-blue-700">logout</a>
              </Link>
              {')'}
            </span>
          </span>
        </Link>
      </header>
      <div className="px-10 py-2">
        {children}
      </div>
    </>
  )
}

export default Layout
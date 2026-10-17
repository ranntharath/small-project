import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between bg-blue-500 px-40 py-7 text-xl'>
        <p>Logo</p>
        <ul className='flex gap-4'>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/reels"}>Reel</NavLink>
            </li>
            <li>
                <NavLink to={"/market"}>Market</NavLink>
            </li>
            <li>
                <NavLink to={"/profile"}>Profile</NavLink>
            </li>
        </ul>
        <div>
            <button>Login</button>
        </div>

    </div>
  )
}

export default Navbar
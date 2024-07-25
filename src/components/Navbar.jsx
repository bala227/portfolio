import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <ul className='navitems'>
                <h1 className='title'>Portfolio</h1>
                <div className='items'>
                  <a href='#Home'>Home</a>
                  <a href='#Skills'>Skills</a>
                  <a href='#third'>Education</a>
                  <a>Experience</a>
                </div>
            </ul>
        </nav>
    </div>
  )
}

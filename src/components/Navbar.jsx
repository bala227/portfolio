import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <ul className='navitems'>
                <h1 className='title'>Portfolio</h1>
                <div className='items'>
                  <a href='#Home' rel="noopener noreferrer">Home</a>
                  <a href='#Skills' rel="noopener noreferrer">Skills</a>
                  <a href='#third' rel="noopener noreferrer">Education</a>
                </div>
            </ul>
        </nav>
    </div>
  )
}

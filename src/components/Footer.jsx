import React from 'react'
import '../components/Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p>Designed & Built by <strong>Bala Subramanian S</strong></p>
      <p>© {new Date().getFullYear()} | All Rights Reserved | <span>Made with ❤️ dedication & a spark of creativity ✨</span></p>
    </footer>
  )
}

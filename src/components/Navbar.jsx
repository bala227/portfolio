import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Skills', 'third', 'fourth'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id) =>
    activeSection === id ? 'nav-link active' : 'nav-link';

  return (
    <div className='navbar'>
      <nav>
        <ul className='navitems'>
          <h1 className='title'>Portfolio</h1>
          <div className='items'>
            <a href='#Skills' className={linkClass('Skills')}>Skills</a>
            <a href='#third' className={linkClass('third')}>Education</a>
            <a href='#fourth' className={linkClass('fourth')}>Projects</a>
          </div>
        </ul>
      </nav>
    </div>
  );
}

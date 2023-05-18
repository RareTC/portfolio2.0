import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import './Sidebar.css';

export default function Sidebar({colors}) {

    const [c0, c1, c2, c3, c4] = colors;

  return (
    <div className="sidebar" style={{ backgroundColor: c0}}>
      <a href="https://github.com/RareTC" target="_blank" rel="noopener noreferrer" style={{color: c3}}>
        <FaGithub />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer" style={{color: c3}}>
        <FaLinkedin />
        LinkedIn
      </a>
      <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer" style={{color: c3}}>
      </a>
      <Link to="contact" smooth={true} duration={1000} className='navlink' style={{color: c3}}>
        <MdEmail />
          Contact
      </Link>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color: c3}}>
        <HiDocumentText />
        Resume
      </a>
    </div>
  );
};


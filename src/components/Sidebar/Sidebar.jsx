import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import './Sidebar.css';

export default function Sidebar() {


  return (
    <div className="sidebar" >
      <a href="https://github.com/RareTC" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        LinkedIn
      </a>
      <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
      </a>
      <Link to="contact" offset={-190} smooth={true} duration={1000} className='navlink'>
        <MdEmail />
          Contact
      </Link>
      <Link to='resume' offset={-84} smooth={true} duration={1000} className='navlink'>
        <HiDocumentText />
        Resume
      </Link>
    </div>
  );
};


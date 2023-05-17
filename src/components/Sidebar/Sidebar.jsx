import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <a href="https://github.com/RareTC" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        LinkedIn
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <MdEmail />
        Contact
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <HiDocumentText />
        Resume
      </a>
    </div>
  );
};


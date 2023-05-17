import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className='footerlinks'>
          <Link to="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </Link>
          <Link to="https://github.com/RareTC" target='_blank' rel='noopener noreferrer'>
            <GitHubIcon />
          </Link>
        </div>
        <p> &copy; 2023 Trevor's Portfolio</p>
    </div>
  )
}


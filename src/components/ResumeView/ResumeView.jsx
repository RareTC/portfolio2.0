import React from 'react';
import Resume from '../../assets/resume.jpg';
import './ResumeView.css';
import DownloadIcon from '@mui/icons-material/Download';
import Resumepdf from '../../assets/resume.pdf';


export default function ResumeView() {
  return (
    <>
      <div className='resume-container'>
        <img className="resume-image" src={Resume} alt='resume' />
        <button className='resume-download' onClick={() => window.open(Resumepdf)}>
          <DownloadIcon /> Download CV
        </button>
      </div>
    </>
  )
}

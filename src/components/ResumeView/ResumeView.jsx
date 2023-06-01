import React, {useState} from 'react';
import './ResumeView.css';
import Resume from '../../assets/resume.jpg';
import Resumepdf from '../../assets/resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';



export default function ResumeView() {
  

  return (
    <>
      <div id="resume" className='resume-container'>
        <img className="resume-image" src={Resume} alt='resume' />
        <button className='resume-download' onClick={() => window.open(Resumepdf)}>
          <DownloadIcon />
          Download
        </button>
      </div>
    </>
  )
}

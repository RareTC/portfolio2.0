import React, {useState} from 'react';
import './ResumeView.css';
import Resume from '../../assets/resume.jpg';
import Resumepdf from '../../assets/resume.pdf';
import { Dialog } from '@mui/material';


export default function ResumeView() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  

  return (
    <>
      <div id="resume" className='resume-container' onClick={openModal}>
        <img className="resume-image" src={Resume} alt='resume' />
        <button className='resume-download' onClick={() => window.open(Resumepdf)}>
          Download CV
        </button>
      </div>
    </>
  )
}

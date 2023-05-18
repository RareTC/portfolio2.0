import React, {useState} from 'react';
import './ResumeView.css';
import Resume from '../../assets/resume.jpg';
import Resumepdf from '../../assets/resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';



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
          <DownloadIcon />
          Download CV 
        </button>
      </div>
    </>
  )
}

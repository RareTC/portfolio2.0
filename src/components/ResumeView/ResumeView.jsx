import React, {useEffect} from 'react';
import './ResumeView.css';
import Resume from '../../assets/resume.jpg';
import Resumepdf from '../../assets/resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function ResumeView() {
  
  useEffect(()=> {
    AOS.init({duration: 2000});
  },[])

  return (
    <>
      <div id="resume" className='resume-container' data-aos="fade-left">
        <img className="resume-image" src={Resume} alt='resume' />
        <button className='resume-download' onClick={() => window.open(Resumepdf)}>
          <DownloadIcon />
          Download
        </button>
      </div>
    </>
  )
}

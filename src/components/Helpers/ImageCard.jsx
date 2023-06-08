import './ImageCard.css';
import {useEffect} from 'react';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ImageCard({ cards }) {
    useEffect(()=> {
        AOS.init({duration: 2000});
    },[])

    return (
        <>
            <div className='projectcontainer'>
                <h1 className='projects' data-aos="fade-in">Projects</h1>
                <div className="projectList">
                    {cards.map((card, index) => (
                        <div className="projectItem" key={index} data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false">
                            <h1 className="project-title">{card.name}</h1>
                            <img src={card.image} alt="" className='image' />
                            <p className="project-desc">{card.desc}</p>
                            <p className="project-skills">{card.skills}</p>
                            <div className="project-btn-wrap">
                                <button
                                    className="project-btn"
                                    onClick={() => window.open(card.git)}
                                >
                                    < FaGithub className='cardicon' />
                                </button>
                                <button
                                    className="project-btn"
                                    onClick={() => window.open(card.site)}
                                >
                                    Demo
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
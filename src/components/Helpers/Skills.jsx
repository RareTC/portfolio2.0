import { FaHtml5, FaCss3, FaPython, FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
// import { GrReactjs } from 'react-icons/gr';
import { SiPostgresql, SiExpress, SiHeroku, SiJavascript } from 'react-icons/si';
import { BsSlack, BsTrello } from 'react-icons/bs';
import { TbBrandZoom } from 'react-icons/tb';


export const Skills = [
    {
      languages: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Trello", icon: <BsTrello /> },
        { name: "Slack", icon: <BsSlack /> },
        { name: "Heroku", icon: <SiHeroku /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Zoom", icon: <TbBrandZoom /> },
      ]
    },
  ];
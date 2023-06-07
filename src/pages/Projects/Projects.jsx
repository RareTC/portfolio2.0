import React from 'react';
import ImageCard from '../../components/Helpers/ImageCard';
import Makeme from '../../assets/makeme.png';
import MockupMagic from '../../assets/mockupMagic.png';
import Marketsense from '../../assets/marketsense.png';
import Concentration from '../../assets/concentration.png';

  
const projects = [
    {
        name: 'MAKEME.md',
        image: Makeme,
        skills: 'ReactJS, NodeJS, MongoDB, Express, HTML, CSS',
        desc: `A side by side rendering of Markdown to Readme, with easy to add components and ready to use templates. Increased Markdown writing efficiency and accuracy.`,
        git: 'https://github.com/RareTC/makeme/tree/main#readme',
        site: 'https://makeme.herokuapp.com/',
    },
   {
       name: 'Mockup Magic',
       image: MockupMagic,
       skills: 'MongoDB, Express, ReactJS, NodeJS, HTML, CSS',
       desc: 'A website color palette generator, that applies the scheme to wireframes and components instantly. Significantly reducing planning stage of product development.',
       git: 'https://github.com/RareTC/mockup-magic#readme',
       site: 'https://mockup-magic.herokuapp.com/',
   },
   {
       name: 'Market Sense',
       image: Marketsense,
       skills: 'Javascript, Express, NodeJS, MongoDB, HTML, CSS',
       desc: 'Gain an outlook and sense of community with Market Sense, an application where you can look up the latest stock information/news from an API, and create user centric posts of your perspective. ',
       git: 'https://github.com/RareTC/Market-Sense/blob/main/README.md',
       site: 'https://market-sense.herokuapp.com/',
   },
   {
       name: 'Concentration - ATLA',
       image: Concentration,
       skills: 'Javascript, HTML, CSS',
       desc: 'A classic game of Concentration with fun sound bites and unique themed cards based off the universally acclaimed hit show, Avatar The Last Airbender!',
       git: 'https://github.com/RareTC/Concentration-Game-/blob/main/README.md',
       site: 'https://raretc.github.io/Concentration-Game-/',
   },

]

export default function Projects() {
 
  return (
        <ImageCard cards={projects} />
  );
}
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import game from'../public/assets/projects/game.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Story in Summer'
            backgroundImg={game}
            projectUrl='/game'
            tech='SFML'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

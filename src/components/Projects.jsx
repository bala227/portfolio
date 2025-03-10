import React, { useState } from 'react';
import './Projects.css';
import bp from '../images/bp.png';
import notes from '../images/notes.png';
import pet from '../images/pet.png'
import psghome from '../images/psghome.png'
import psgdash from '../images/psgdash.png'
import flappy from '../images/flappy.png'
import space from '../images/space.png'
import net1 from '../images/networx1.png'
import net2 from '../images/networx2.png'
import Carousel from './Carousel.jsx';

export default function Projects() {
  const projects = {
    "PHP": [
      { url: bp, caption: 'Budget Planner' },
      { url: notes, caption: 'Notes Manager' },
    ],
    "Django and React": [
      { url: pet, caption: 'Personal Expense Tracker' },
      { url: psghome, caption: 'PSG4U' },
      { url: psgdash, caption: 'PSG4U' },
    ],
    "Express and Neo4j": [
      { url: net1, caption: 'NetworX' },
      { url: net2, caption: 'NetworX' },
    ],
    "Unity 2D":[
        { url: space, caption: 'Space Shooter' },
        { url: flappy, caption: 'Flappy Bird' },
    ]
  };

  const [activeTab, setActiveTab] = useState('PHP'); 

  return (
    <div id="fourth">
      <p className="exp">Get to know my</p>
      <h1 className="education">Projects</h1>

      <div className="tab-container">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="pcont">
        <Carousel images={projects[activeTab]} />
      </div>
    </div>
  );
}

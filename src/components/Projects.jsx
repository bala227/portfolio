import React, { useState } from "react";
import "./Projects.css";
import bp from "../images/bp.png";
import notes from "../images/notes.png";
import pet from "../images/pet.png";
import psg1 from "../images/psg1.png";
import psg2 from "../images/psg2.png";
import psg3 from "../images/psg3.png";
import psg4 from "../images/psg4.png";
import flappy from "../images/flappy.png";
import space from "../images/space.png";
import net1 from "../images/networx1.png";
import net2 from "../images/networx2.png";
import Carousel from "./Carousel.jsx";
import aura1 from "../images/aura-1.png";
import aura2 from "../images/aura-2.png";
import aura3 from "../images/aura-3.png";
import aura4 from "../images/aura-4.png";
import aura5 from "../images/aura-5.png";
import chat1 from "../images/NetworXchat1.png"
import chat2 from "../images/NetworXchat2.png"

export default function Projects() {
  const projects = {
    PHP: [
      { url: bp, caption: "Budget Planner" },
      { url: notes, caption: "Notes Manager" },
    ],
    "Django and React": [
      { url: psg1, caption: "PSG4U" },
      { url: psg2, caption: "PSG4U" },
      { url: psg3, caption: "PSG4U" },
      { url: psg4, caption: "PSG4U" },
      { url: pet, caption: "Personal Expense Tracker" },
    ],
    "Express and Neo4j": [
      { url: net1, caption: "NetworX" },
      { url: net2, caption: "NetworX" },
      { url: chat1, caption: "NetworXchat" },
      { url: chat2, caption: "NetworXchat" },
    ],
    "React Native":[
    { url: [aura1, aura2, aura3], caption: <strong>Aura</strong> },
    { url: [aura4, aura5], caption: <><strong>Aura</strong> – Predicting diseases based on current AQI</> },
    ],
    "Unity 2D": [
      { url: space, caption: "Space Shooter" },
      { url: flappy, caption: "Flappy Bird" },
    ],
  };

  const [activeTab, setActiveTab] = useState("PHP");

  return (
    <div id="fourth">
      <p className="exp">Get to know my</p>
      <h1 className="education">Projects</h1>

      <div className="tab-container">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
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

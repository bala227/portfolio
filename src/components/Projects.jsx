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
import summarix1 from "../images/summarix-1.jpg"
import summarix2 from "../images/summarix-2.jpg"
import summarix4 from "../images/summarix-4.jpg"
import bp1 from "../images/BP1.jpg"
import bp2 from "../images/BP2.png"
import bp3 from "../images/BP3.jpg"
import bp4 from "../images/BP4.jpg"
import bp5 from "../images/BP5.jpg"

export default function Projects() {
  const projects = {
    PHP: [
      { url: bp, caption: <strong>Budget Planner</strong>, description: "Budget Planner is a PHP-based app that helps users manage their monthly finances efficiently." },
      { url: notes, caption: <strong>Notes Manager</strong>, description: "Notes Manager is a lightweight web app to create, update, and organize personal notes." },
    ],
    "Django and React": [
      { url: psg1, caption: <strong>PSG4U</strong>, description: "PSG4U is a full-stack educational platform. It helps students manage their semester progress, predict future grades using machine learning, and contribute by suggesting useful academic resources." },
      { url: psg2, caption: <strong>PSG4U</strong>,description: "Instantly calculate CGPA and GPA upto current semester." },
      { url: psg3, caption: <strong>PSG4U</strong>,description: "Predict their CA2 marks and semester grades using a ML model based on CA1, current and expected CGPA."},
      { url: psg4, caption: <strong>PSG4U</strong>,description:"Suggest educational resources, which are scored using a relevance checking ML model. Search resources by subject. ML models powered by scikit-learn. Suggested links are auto summarized using a Transformer based model" },
      { url: pet, caption: <strong>Personal Expense Tracker</strong>, description: "Personal Expense Tracker is a Django-React app designed to track income and spending efficiently with visual charts and category tagging." },
    ],
    "Express and Neo4j": [
      { url: net1, caption: <strong>NetworX</strong>, description: "NetworX is a graph-powered social networking app leveraging Neo4j and Express to manage connections and activities." },
      { url: net2, caption: <strong>NetworX</strong> },
      { url: chat1, caption: <strong>NetworXchat</strong>, description: "NetworXchat is a modern XML-driven chat backend system that integrates both MongoDB and Neo4j to deliver powerful user and social graph functionalities. This hybrid architecture allows seamless user management, messaging, and social networking features." },
      { url: chat2, caption: <strong>NetworXchat</strong> },
    ],
    "React Native": [
      {
        url: [aura1, aura2, aura3],
        caption: <strong>Aura</strong>,
        description: "Aura is a health monitoring app that uses local AQI to predict possible respiratory diseases using React Native and Python APIs.",
      },
      {
        url: [aura4, aura5],
        caption: <strong>Aura</strong>,
        description: "Aura – Predicting diseases based on current AQI using mobile sensors and open-air APIs.",
      },
      {
        url: [summarix1, summarix2, summarix4],
        caption: <strong>Summarix</strong>,
        description: "Summarix is a modern, intelligent news app built with React Native and Django REST Framework. It brings together a beautiful mobile experience with server-side NLP-powered article summarization, daily engagement tracking, and a personalized news feed.",
      },
    ],
    "React Native and Django":[
      {
        url: [bp1, bp2],
        caption: <strong>Budget Planner</strong>,
        description: "A modern budget tracking app built using React Native and Supabase. Users can create budget categories, add expenses, visualize spending through a pie chart, and track budget progress — all with a smooth, animated user interface.",
      },
      {
        url: [bp3,bp4,bp5],
        caption: <strong>Budget Planner</strong>,
        description: "Manage your budget effortlessly with categorized tracking. Add categories with icons and visualize spending through interactive pie charts and expense logs.",
      },
    ],
    "Unity 2D": [
      { url: space, caption: <strong>Space Shooter</strong>, description: "Space Shooter is a classic Unity 2D arcade-style game where players defeat waves of enemies and scoring mechanics." },
      { url: flappy, caption: <strong>Flappy Bird</strong>, description: "Flappy Bird is a Unity-based clone of the popular mobile game, rebuilt from scratch using 2D physics and sprite animations." },
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

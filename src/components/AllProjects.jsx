// AllProjects.jsx
import React, { useEffect, useState } from 'react';
import './AllProjects.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const AllProjects = () => {
  const [repos, setRepos] = useState([]);
  const username = 'bala227'; // 🔧 Replace this with your actual GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const data = await response.json();
  
        // Sort by last pushed date, descending
        const sorted = data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
  
        // Take the latest 10
        setRepos(sorted.slice(0, 9));
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };
  
    fetchRepos();
  }, []);
  

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-name">{repo.name.toUpperCase()}</h3>
            <p className='project-link'>
            <span className="hide-on-mobile">Check out {repo.name} on</span>
            <GitHubIcon style={{ fontSize: 30, color: "white" }} /> →
          </p>

          </a>
        ))}
      </div>

      <div className="see-more">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore more on <GitHubIcon style={{fontSize:30,color:"white"}}/> →
        </a>
      </div>
    </div>
  );
};

export default AllProjects;

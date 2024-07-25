import React from 'react'
import '../components/Education.css'
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
  return (
    <div id="third">
        <SchoolIcon style={{fontSize:50}}/>
        <h1 className='education'>Education</h1>
        <div id="edbox">
            <div id="edu">
                <h1 id="circle"></h1>
                <section id="b">
                    <h2>Bachelor of Engineering</h2>
                    <p>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</p>
                    <p>2022 - 2026</p>
                    <p>Grade : 8.44</p>
                </section>
            </div>
        </div>
    </div>
  )
}

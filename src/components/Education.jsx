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
                <p id="circle"></p>
                <section id="b">
                    <h2>Higher Secondary Education</h2>
                    <p>2020 - 2022</p>
                    <p>Rose Mary Matric Hr. Sec. School</p>
                    <p>Percentage : <span>96.1 / 100</span></p>
                </section>
            </div>
            <div id="edu">
                <p id="circle"></p>
                <section id="b">
                    <h2>Bachelor of Engineering</h2>
                    <p>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</p>
                    <p>2022 - 2026</p>
                    <p>PSG College of Technology</p>
                    <p>Grade : <span >8.41 / 10</span></p>
                </section>
            </div>
        </div>
    </div>
  )
}

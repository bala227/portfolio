// src/components/Certifications.js
import React from "react";
import Slider from "react-slick";
import VerifiedIcon from "@mui/icons-material/Verified";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/Certifications.css"; // CSS we'll add below
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function Certifications() {
  const certifications = [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      provider: "Coursera",
      level: "Johns Hopkins University",
      link: "https://www.coursera.org/account/accomplishments/verify/YLGFYNSLRKPT",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      provider: "Coursera",
      level: "Stanford Online",
      link: "https://www.coursera.org/account/accomplishments/verify/GB99LA7GCVZ9",
    },
    {
      title: "Foundational C# with Microsoft",
      provider: "freecodecamp",
      level: "Microsoft",
      link: "https://www.freecodecamp.org/certification/fcc4672dc21-1bc7-4958-83aa-8a7662e405df/foundational-c-sharp-with-microsoft",
    },
    {
      title: "Introduction to Generative AI for Data Analysis",
      provider: "Coursera",
      level: "Microsoft",
      link: "https://www.coursera.org/account/accomplishments/verify/6YCDBLGKVC3Y",
    },
    {
      title: "Data Processing and Optimization with Generative AI",
      provider: "Coursera",
      level: "Microsoft",
      link: "https://www.coursera.org/account/accomplishments/verify/UTTRNCPV5ELQ",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="second" id="Certifications">
      <WorkspacePremiumIcon style={{fontSize:50, marginBottom:10}}/>
      <h1 className="skills">Certifications</h1>
      <div className="cert-slider-container">
        <Slider {...settings}>
          {certifications.map((cert, index) => (
            <div key={index} className="cert-slide">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                <div className="skill cert-card">
                  <h2>{cert.title}</h2>
                  <div id="cert-box">
                    <article>
                      <VerifiedIcon sx={{ color: "#1DA1F2" }}/>
                      <h3>{cert.provider}</h3>
                      <span>{cert.level}</span>
                    </article>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

import React from "react";
import image from '../images/back.jpeg';

const imageAltText = "purple and blue abstract background";

const description =
  "I am a MERN stack developer studying at PBR Visvodaya Engineering College. Throughout my graduation, I honed my skills in data structures and algorithms using JavaScript and Python, and I have also gained expertise in MERN stack development.";

const skillsList = [
  "React.js",
  "Express.js",
  "MongoDB",
  "SQL",
  
  "Data structures and algorithms",
  "Python",
  
  "Java",
  "JavaScript",
  "HTML5, CSS",
  "React-bootstrap",
  "React-native",
  "GIT",
  "REST API",
];

const detailOrQuote =
  "I am passionate about solving problems in creative and innovative ways. With my expertise in the MERN stack and a strong foundation in data structures and algorithms, I continually seek new approaches to build efficient and scalable solutions. By leveraging my knowledge of JavaScript, Python, and full-stack development, I strive to make technology more accessible and user-friendly for everyone.";

const About = () => {
  const sectionStyle = {
   
    textAlign: "center",
  };

  const containerStyle = {
    backgroundColor: "white",
    maxWidth: "900px", 
    padding: "2rem",
    margin: "2rem auto",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const ulStyle = {
    textAlign: "left",
    columns: 2,
    fontSize: "1.2rem",
    margin: "2rem 3rem",
    gap: "1.5rem",
  };

  const responsiveUlStyle = {
    textAlign: "left",
    columns: 1, 
    fontSize: "1.2rem",
    margin: "2rem 3rem",
    gap: "1.5rem",
  };

 
  return (
    <section style={sectionStyle} id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div style={containerStyle}>
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
      
        <ul
          style={
            window.innerWidth > 768 ? ulStyle : responsiveUlStyle
          } 
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
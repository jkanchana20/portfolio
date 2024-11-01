import React from "react";
import image from "../images/project.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "TechDosth - Educational Platform",
    description:
      "Developed an education-based platform using the MERN stack for TechDosth, providing online learning resources, course management, and interactive tools for students and educators.",
    url: "https://techdosth98.vercel.app/", 
  },
  {
    title: "VisPay - Payment Gateway System",
    description:
      "Built a secure and efficient payment gateway system, VisPay, using the MERN stack. Integrated with multiple payment providers and ensured a smooth transaction process for users.",
    url: "https://vis-pay-front.vercel.app/", 
  },
  
  {
    title: "College Official Website",
    description:
      "Designed and developed the official website for PBR Visvodaya Engineering College, implementing a responsive UI and an intuitive UX to provide students and faculty with easy access to college resources.",
    url: "https://visvodaya.netlify.app/", 
  },
  {
    title:"Ecommerce Platform",
    description:
    "Designed and Developed an Ecommerce PlatForm which is having all products. The user friendly interfce to select the products based on their requirements and based on the user recommendations.",
    url:"https://appscript-task-kanchana.netlify.app/",
  }
  
];

const Portfolio = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingTop: "3rem",
  };

  const imageContainerStyle = {
    flex: "1 1 45%", 
    minWidth: "300px",
    maxWidth: "500px",
    marginRight: "2rem",
    marginTop:"-4rem"
  };

  const projectContainerStyle = {
    display: "grid", 
    gridTemplateColumns: "repeat(2, 1fr)", 
    gridGap: "1.5rem", 
    flex: "1 1 45%",
    minWidth: "300px",
    paddingRight:"40px"
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const projectBoxStyle = {
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={containerStyle}>
      
        <div style={imageContainerStyle}>
          <img
            src={image}
            style={imageStyle}
            alt={imageAltText}
          />
        </div>

        {/* Projects on the right */}
        <div style={projectContainerStyle}>
          {projectList.map((project) => (
            <div className="box" key={project.title} style={projectBoxStyle}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
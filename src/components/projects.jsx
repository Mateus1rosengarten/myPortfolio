import ProjectCard from "./card";
import "../components/projects.css";
import { useContext } from "react";
import { contextBgColor } from "../contextBgColor";

function Projects() {

  const {itsDark} = useContext(contextBgColor);
  return (
    <div className={`div-projects-page ${itsDark && "bg-dark"}`}>
      <div className="div-projects">
        {/* <ProjectCard
          cardTitle={"SustenTools E-commerce"}
          cardImage={require("../images/sus1.png")}
          cardImage2={require("../images/sus2.png")}
          cardImage3={require("../images/sus3.png")}
          cardText={
            "Created and being developed independently, our e-commerce marketplace will features only sustainable and eco-friendly products. Collaborated with the team on design ideas through meetings."
          }
          tec1={"REACT"}
          tec2={"NODE.JS"}
          tec3={"EXPRESS"}
          tec4={"MONGODB"}
          projectName={"E-commerce"}
        /> */}

        <ProjectCard
        cardTitle={"Guto Therapist Page"}
        cardImage={require("../images/guto1.png")}
        cardImage2={require("../images/guto2.png")}
        cardImage3={require("../images/guto3.png")}
        cardText={
          "Developed a landing page for a client specializing in therapy services, supporting individuals with complex neurodivergencies and their families with accessible resources and personalized care."
        }
        tec1={"NextJS"}
        tec2={"TYPESCRIPT"}
        tec3={"STYLED-COMPONENTS"}
        gitLink={
          "https://github.com/Mateus1rosengarten/gutoMaia"
        }
        siteLink={
          "https://www.gutomaia.org"
        }
        imgLoading={"eager"}

        
        
        />

        <ProjectCard
          cardTitle={"Suppliers List"}
          cardImage={require("../images/sup1.png")}
          cardImage2={require("../images/sup2.png")}
          cardImage3={require("../images/sup3.png")}
          cardText={
            "Introducing the Supplier Management System, a CRUD project designed for Gesplan, a prominent company based in Joinville,users can store and manage personal information about suppliers,with the option to mark favorites."
          }
          tec1={"REACT"}
          tec2={"SQL"}
          tec3={"EXPRESS"}
          tec4={"NODE.JS"}
          gitLink={
            "https://github.com/Mateus1rosengarten/GesplanListaFornecedores/tree/master"
          }
          imgLoading={"eager"}
        />
        <ProjectCard
          cardTitle={"ThankFul Way"}
          cardImage={require("../images/thankful-1.png")}
          cardImage2={require("../images/thankful-2.png")}
          cardImage3={require("../images/thankful-3.png")}
          cardText={
            "A microblogging platform using Firebase where users create accounts to post three daily gratitudes, fostering a positive community focused on well-being in contrast to the toxic internet culture."
          }
          tec1={"REACT"}
          tec2={"FIREBASE"}
          tec3={"HTML"}
          tec4={"CSS"}
          projectName={"microblog"}
          gitLink="https://github.com/Mateus1rosengarten/MicroBloggingAPP"
          siteLink="https://microblogging-app-3f743.firebaseapp.com/"
          imgLoading={"lazy"}
        />
        <ProjectCard
          cardTitle={"Stock Searcher"}
          cardImage={require("../images/s1.png")}
          cardImage2={require("../images/s2.png")}
          cardImage3={require("../images/s3.png")}
          cardText={
            "The App allows the user to search and find information about companys stock exchange numbers also see descrpition of the company and the history of price showed in graphics."
          }
          tec1={"HTML"}
          tec2={"CSS"}
          tec3={"JAVASCRIPT"}
          tec4={"OOP"}
          gitLink={"https://github.com/Mateus1rosengarten/StockExchangeAPI"}
          imgLoading={"lazy"}
        />

        <ProjectCard
          cardTitle={"AdoCão"}
          cardImage={require("../images/adocao1.png")}
          cardImage2={require("../images/adocao2.png")}
          cardImage3={require("../images/adocao3.png")}
          cardText={
            "A Fullstack pet adoption site in final development, aimed at partnering with a nonprofit to help rescue and rehome dogs in need."
          }
          tec1={"REACT"}
          tec2={"NODE.JS"}
          tec3={"EXPRESS"}
          tec4={"MONGODB"}
          tec5={"HTML"}
          tec6={"CSS"}
          projectName={"AdoCão"}
          gitLink={"https://github.com/Mateus1rosengarten/petAddoptionAPP"}
          imgLoading={"lazy"}
        />

        <ProjectCard
          cardTitle={"Movie Searcher"}
          cardImage={require("../images/movie1.png")}
          cardImage2={require("../images/movie2.png")}
          cardImage3={require("../images/movie3.png")}
          cardText={
            "Welcome to the Movie Searcher, a simple and user-friendly web application that allows users to search for movie titles and retrieve information about the movies,This was one of my first projects."
          }
          tec1={"HTML"}
          tec2={"CSS"}
          tec3={"JAVASCRIPT"}
          tec4={"API"}
          tec5={"OOP"}
          projectName={"movieAPI"}
          gitLink={"https://github.com/Mateus1rosengarten/movieAPI/tree/master"}
          imgLoading={"lazy"}
        />
      </div>
    </div>
  );
}

export default Projects;

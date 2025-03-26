import { useContext, useEffect } from "react";
import "../components/projects.css";
import { contextBgColor } from "../contextBgColor";
import ProjectCard from "./card";

function Projects() {

  const {itsDark,setCreateAnimation} = useContext(contextBgColor);

  useEffect(() => {
    setCreateAnimation(false);
  }, [setCreateAnimation])

  return (
    <div className={`div-projects-page ${itsDark && "bg-dark"}`}>
      <div className="div-projects">

      <ProjectCard
      cardTitle={"SmarkBasket"}
      cardImage={require("../images/smart1.png")}
      cardImage2={require("../images/smart2.png")}
      cardImage3={require("../images/smart3.png")}
      cardImage4={require("../images/smart4.png")}
       cardText={
    "SmartBasket is a grocery shopping app currently in development for an Israeli company. It searches for the cheapest products across different supermarkets before selling to the customer." }
      tec1={"REACT"}
      tec2={"TYPESCRIPT"}
      tec3={"TAILWIND"}
      tec4={"NODE.JS"}
      tec5={"EXPRESS"}
      tec6={"MONGODB"}
      imgLoading={"eager"}

      >
 


      </ProjectCard>

        <ProjectCard
        cardTitle={"MKT Embalagem website"} 
        cardImage={require("../images/mkt1.png")}
        cardImage2={require("../images/mkt2.png")}
        cardImage3={require("../images/mkt3.png")}
        cardImage4={require("../images/mkt4.png")}
        cardText={"MKT Embalagem specializes in high-quality can printing for major brands like Ambev, Pepsico, and Johnson & Johnson in Brazil. The website, currently in the final stages of development and just awaiting real images from the company. The site highlights its services, expertise, and commitment to quality and innovation."}
        tec1={"NextJS"}
        tec2={"TYPESCRIPT"}
        tec3={"TAILWIND"}
        
        gitLink={"https://github.com/Mateus1rosengarten/MktEmbalagem"}
        imgLoading={"eager"}

        />


        <ProjectCard
        cardTitle={"Payment Simulation CRUD"}
        cardImage={require("../images/payment3.png")}
        cardImage2={require("../images/payment2.png")}
        cardImage3={require("../images/payment1.png")}
        cardText={"Payout Simulation App is a full-stack web application that allows users to simulate payment transactions. Created for a Polish company to simulate payments before real application. It provides a simple and intuitive interface to create, edit, and view payments while incorporating a fail/success simulation to mimic real-world payout scenarios."}
        tec1={"NextJS"}
        tec2={"TYPESCRIPT"}
        tec3={"MUI"}
        tec4={"PostgreSQL"}
        gitLink={"https://github.com/Mateus1rosengarten/PayoutStructure"}
        imgLoading={"lazy"}
        />

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
        // siteLink={
        //   "https://www.gutomaia.org"
        // }
        imgLoading={"lazy"}

        
        
        />
       
        
        <ProjectCard
          cardTitle={"Green E-commerce"}
          cardImage={require("../images/sus1.png")}
          cardImage2={require("../images/sus2.png")}
          cardImage3={require("../images/sus3.png")}
          cardText={
"The e-commerce marketplace was originally developed through collaboration with a group of partners, focusing exclusively on sustainable and eco-friendly products. The project saw active involvement from the team in design discussions and idea sharing during its initial stages. However,the project is currently on hold and not active."}          
          tec1={"REACT"}
          tec2={"NODE.JS"}
          tec3={"EXPRESS"}
          tec4={"MONGODB"}
          projectName={"E-commerce"}
          imgLoading={"lazy"}
        />

<ProjectCard
        cardTitle={"Menu Restaurant Optimizer"}
        cardImage={require("../images/pizza1.png")}
        cardImage2={require("../images/pizza2.png")}
        cardImage3={require("../images/pizza3.png")}
        cardText={"My project is an in-development mobile and tablet app for all-you-can-eat restaurants, optimizing pizza and food service. Customers can select favorite flavors, give feedback, order drinks, and request the waiter/bill easily. My goal is to sell as a service for Pizza Restaurantes in Brazil"}
        tec1={"REACT"}
        tec2={"TYPESCRIPT"}
        tec3={"NODE.JS"}
        tec4={"EXPRESS"}
        tec5={"PostgreSQL"}
        tec6={"MUI"}
        gitLink={"https://github.com/Mateus1rosengarten/AllYouCanEat-Manager"}
        imgLoading={"lazy"}


        
        />

<ProjectCard
          cardTitle={"ThankFul Way"}
          cardImage={require("../images/thank1.png")}
          cardImage2={require("../images/thank2.png")}
          cardImage3={require("../images/thank3.png")}
          cardText={
            "A microblogging platform using Firebase where users create accounts to post three daily gratitudes, fostering a positive community focused on well-being in contrast to the toxic internet culture."
          }
          tec1={"REACT"}
          tec2={"FIREBASE"}
          tec3={"HTML"}
          tec4={"CSS"}
          projectName={"microblog"}
          gitLink="https://github.com/Mateus1rosengarten/MicroBloggingAPP"
          // siteLink="https://microblogging-app-3f743.firebaseapp.com/"
          imgLoading={"lazy"}
        />

        

        <ProjectCard
          cardTitle={"Suppliers Management System"}
          cardImage={require("../images/sup1.png")}
          cardImage2={require("../images/sup2.png")}
          cardImage3={require("../images/sup3.png")}
          cardText={
            "Introducing the Supplier Management System, a CRUD software designed for Gesplan, a prominent company based in Joinville,users can store and manage personal information about suppliers,with the option to mark favorites."
          }
          tec1={"REACT"}
          tec2={"SQL"}
          tec3={"EXPRESS"}
          tec4={"NODE.JS"}
          gitLink={
            "https://github.com/Mateus1rosengarten/GesplanListaFornecedores/tree/master"
          }
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
          cardTitle={"Pets Adoption Plataform"}
          cardImage={require("../images/pet1.png")}
          cardImage2={require("../images/pet2.png")}
          cardImage3={require("../images/adocao1.png")}
          cardText={
            "A Fullstack pet adoption app, created during my Fullstack development course. The site is aimed at partnering with a nonprofit to help rescue and rehome dogs in need."}
          
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

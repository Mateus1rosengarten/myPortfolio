// import { useContext } from "react";
// import { Card } from "react-bootstrap";
// import "../components/card.css";
// import { contextDarkMode } from "../context/contextDarkMode";
// import CardContent from "./cardContent";

// function ProjectCard({
//   title,
//   img,
//   text,
//   techs = [],
//   gitLink,
//   imgLoading,
//   openModal,
// }) {
//   const { itsDark } = useContext(contextDarkMode);
//   return (
//     <Card
//       className={`${!itsDark ? "card" : "card-black-mode"}`}
//       onClick={openModal}
//       key={title}
//     >
//       <img
//         className={`img-custom w-100 rounded`}
//         src={img}
//         alt="Project ScreenShot"
//       ></img>

//       <CardContent title={title} text={text} techs={techs} gitLink={gitLink} />
//     </Card>
//   );
// }

// export default ProjectCard;

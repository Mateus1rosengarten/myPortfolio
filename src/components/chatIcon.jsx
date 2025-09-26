// import { useContext, useState } from "react";
// import me from "../images/me.jpg";
// import "./chatIcon.css";
// import { Button } from "react-bootstrap";
// import { contextDarkMode } from "../context/contextDarkMode";

// const ChatIcon = () => {
//   const { itsDark } = useContext(contextDarkMode);

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <div className="chat-button-container">
//         <Button
//           className={`chat-button ${itsDark ? "btn-light" : "btn-dark"}`}
//           variant="none"
//         >
//           CHAT with me!
//         </Button>
//         <img src={me} alt="Minha foto" className="chat-icon" />
//       </div>
//       {isOpen && "chatModal Componet"}
//     </>
//   );
// };

// export default ChatIcon;

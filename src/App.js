
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import MyInfo from "./components/myinfo";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyInfo />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

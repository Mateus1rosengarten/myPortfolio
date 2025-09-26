import NavBar from "./components/navbar";
import Footer from "./components/footer";
import MyInfo from "./components/myinfo";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects";
import "./App.css";
import { useContext } from "react";
import { contextSideBar } from "./context/contextSideBar";
import SideBar from "./components/sidebar";

function App() {
  const { isSideBar } = useContext(contextSideBar);

  return (
    <>
      {isSideBar ? (
        <SideBar />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MyInfo />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;

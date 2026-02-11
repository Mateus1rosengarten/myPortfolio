import NavBar from "./components/navbar";
import Footer from "./components/footer";
import MyInfo from "./views/myinfo";
import { Route, Routes } from "react-router-dom";
import Projects from "./views/projects";
import { useContext } from "react";
import { contextSideBar } from "./context/contextSideBar";
import SideBar from "./components/sidebar";
import "./App.css";

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

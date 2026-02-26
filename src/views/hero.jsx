import { useContext } from "react";
import { contextDarkMode } from "../context/contextDarkMode";
import myPicture from "../images/mypic-dark.webp";
import sunglass from "../images/sunglass.png";
import AppButton from "../components/button";

function Hero() {
  const { itsDark, createAnimation, setCreateAnimation } =
    useContext(contextDarkMode);

  const handleOpeningCV = () => {
    const googleDriveLink =
      "https://drive.google.com/drive/u/0/folders/1VY7VFaGHs6ZdmrGvfAEkpOVt1HvDpMWK";
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section className="py-5 text-center bg-main text-main">
      <div className="container mb-5 pt-3">
        <div className="position-relative d-inline-block">
          <img
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            className="profile-img rounded-circle img-fluid"
            loading="eager"
            src={myPicture}
            alt="Foto de perfil de Mateus Rosengarten Mauricio"
          />
          <img
            src={sunglass}
            alt="Óculos"
            onAnimationEnd={() => setCreateAnimation(false)}
            className={`
    sunglasses
    ${itsDark ? "dark-position" : ""}
    ${createAnimation ? (itsDark ? "animate-drop" : "animate-rise") : ""}
  `}
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="font-primary mt-2 fs-2 text-main"
        >
          I'm Mateus Rosengarten
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h2
          className={`font-primary fs-1 text-bold fw-bold ${
            itsDark && "text-white"
          }`}
        >
          Front End Developer
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="d-flex gap-4 justify-content-center pb-3"
        >
          <AppButton children={"MY CV"} onClick={handleOpeningCV} />

          <AppButton
            children={"WRITE ME"}
            href={"mailto:matrosen.developer@gmail.com"}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

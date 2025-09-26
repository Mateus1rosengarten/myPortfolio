import { useEffect, useState } from "react";
import { createContext } from "react";

export const contextDarkMode = createContext();

function ContextDarkMode({ children }) {
  const storageValue = localStorage.getItem("DARK");
  const [itsDark, setItsDark] = useState(
    storageValue ? JSON.parse(storageValue) : false
  );
  const [createAnimation, setCreateAnimation] = useState(true);

  useEffect(() => {
    localStorage.setItem("DARK", JSON.stringify(itsDark));
  }, [itsDark]);

  useEffect(() => {
    setCreateAnimation(false);
  }, []);

  return (
    <contextDarkMode.Provider
      value={{ itsDark, setItsDark, createAnimation, setCreateAnimation }}
    >
      {children}
    </contextDarkMode.Provider>
  );
}

export default ContextDarkMode;

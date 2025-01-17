import { useEffect, useState } from "react";
import { createContext } from "react";

export const contextBgColor = createContext();

function ContextBgColor({ children }) {
  const storageValue = localStorage.getItem('DARK');
  const [itsDark, setItsDark] = useState(
    storageValue ? JSON.parse(storageValue) : false 
  );
  const [createAnimation,setCreateAnimation] = useState(true);


  useEffect(() => {
    localStorage.setItem('DARK',JSON.stringify(itsDark));
  }, [itsDark]);

  useEffect(() => {
    setCreateAnimation(false);
  }, []);


  return (
    <contextBgColor.Provider value={{ itsDark, setItsDark,createAnimation,setCreateAnimation}}>
      {children}
    </contextBgColor.Provider>
  );
}

export default ContextBgColor;

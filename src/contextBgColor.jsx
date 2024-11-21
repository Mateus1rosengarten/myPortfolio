import { useState } from "react";
import { createContext } from "react";

export const contextBgColor = createContext();

function ContextBgColor({ children }) {
  const [itsDark, setItsDark] = useState(false);

  return (
    <contextBgColor.Provider value={{ itsDark, setItsDark }}>
      {children}
    </contextBgColor.Provider>
  );
}

export default ContextBgColor;

import { createContext, useState } from "react";

export const contextSideBar = createContext(null);

const ContextSideBar = ({children}) => {

const [isSideBar,setIsSideBar] = useState(false);

    return (
 <contextSideBar.Provider value={{isSideBar,setIsSideBar}}>
   {children}
</contextSideBar.Provider>

    )
}

export default ContextSideBar;
import { createContext, useContext, useState } from "react"
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
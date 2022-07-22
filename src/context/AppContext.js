import React, { useState, useContext } from "react";
import { serviceData } from "../data";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  // navbar
  const [active, setActive] = useState("#home");
  const [service] = useState(serviceData);

  const setActiveNav = (active_link) => {
    setActive(active_link);

    // navbar
  };
  return (
    <AppContext.Provider value={{ active, setActiveNav, service }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobleContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;

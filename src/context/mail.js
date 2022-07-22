import React, { useContext } from "react";

const MailContext = React.createContext();

const MailContextProvider = ({ children }) => {
  return (
    <MailContext.Provider value={"Something"}>{children}</MailContext.Provider>
  );
};

export const useMailContext = () => {
  return useContext(MailContext);
};

export default MailContextProvider;

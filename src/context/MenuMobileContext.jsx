import { createContext, useContext } from "react";
import { useState } from "react";

const MobileMenuContext = createContext();

const MobileMenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <MobileMenuContext.Provider value={{ open, setOpen, handleOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

const useMenu = () => {
  return useContext(MobileMenuContext);
};

export { useMenu, MobileMenuContextProvider };

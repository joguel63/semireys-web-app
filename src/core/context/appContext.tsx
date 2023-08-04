import { createContext, useState, ReactNode } from "react";
type AppContextType = {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AppContext = createContext<AppContextType>(Object({}));

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  return (
    <AppContext.Provider value={{ openDrawer, setOpenDrawer }}>{children}</AppContext.Provider>
  );
};

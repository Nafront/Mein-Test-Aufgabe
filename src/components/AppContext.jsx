import  { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [geburtsdatum, setGeburtsdatum] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [sliderValue, setSliderValue] = useState(100);

  const value = {
    geburtsdatum,
    setGeburtsdatum,
    sliderValue,
    setSliderValue,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

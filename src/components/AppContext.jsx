import  { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [geburtsdatum, setGeburtsdatum] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [sliderValue, setSliderValue] = useState(4000);
  const [tarif, setTarif] = useState(null);
  const [apiResponse, setApiResponse] = useState({}); // Zustand für die API-Antwort
   const [monatlicherBeitrag, setMonatlicherBeitrag] = useState("");
    const [formData, setFormData] = useState({
      day: "",
      month: "",
      year: "",
    });
     const [error, setError] = useState("");
     const [isLoading, setIsLoading] = useState(false);

     


  const value = {
    geburtsdatum,
    setGeburtsdatum,
    formData,
    setFormData,
    error,
    setError,
    sliderValue,
    setSliderValue,
    tarif,
    setTarif,
    apiResponse,
    setApiResponse,
    monatlicherBeitrag,
    setMonatlicherBeitrag,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

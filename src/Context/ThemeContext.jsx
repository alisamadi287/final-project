import { createContext, useState, useEffect } from "react";
import App from "../App";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    console.log(localStorage.getItem("Theme") ? true : false);
    const theme = localStorage.getItem("Theme");
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    } 
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("Theme", theme);
  }
  return (
    <ThemeContext.Provider value={{theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
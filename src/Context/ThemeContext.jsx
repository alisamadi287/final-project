import { createContext, useState, useEffect } from "react";
import App from "../App";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  
  useEffect(() => {
    let theme;
    if(localStorage.getItem("Theme")) {
      theme = localStorage.getItem("Theme")
    } else {
      theme = themeMode;
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    } 
  }, [themeMode]);

  const switchTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
    localStorage.setItem("Theme", themeMode);
  }
  return (
    <ThemeContext.Provider value={{themeMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
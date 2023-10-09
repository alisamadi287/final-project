import { createContext, useState, useEffect } from "react";
import App from "../App";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const darkQuery = window.matchMedia("prefers-color-scheme: dark");
  
  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [themeMode]);

  function onWindowMatch() {
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  onWindowMatch();

  const switchTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider value={{themeMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
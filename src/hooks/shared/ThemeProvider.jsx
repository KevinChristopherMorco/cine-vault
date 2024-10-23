import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || { theme: "dark" },
  );

  const { theme } = currentTheme;
  console.log(theme);

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme({ theme: "dark" });
    }

    if (theme === "dark") {
      setTheme({ theme: "light" });
    }
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify({ theme: "dark" }));
    }

    if (theme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", JSON.stringify({ theme: "light" }));
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
export { useThemeContext };

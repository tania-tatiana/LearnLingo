import { useEffect, useState } from "react";
import { ThemeContext } from "../ThemesContext/ThemesContext";

export default function ThemesProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

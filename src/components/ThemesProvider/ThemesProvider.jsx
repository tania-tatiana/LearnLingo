import { useEffect, useState } from "react";
import { ThemeContext } from "../ThemesContext/ThemesContext";

export default function ThemesProvider({ children }) {
  const [theme, setTheme] = useState("yellow");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

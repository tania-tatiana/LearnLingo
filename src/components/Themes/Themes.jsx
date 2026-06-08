import { useContext } from "react";
// import css from "./Themes.modle.css";
import { ThemeContext } from "../ThemesContext/ThemesContext";

export default function Themes() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    changeTheme(event.target.value);
  };

  return (
    <select value={theme} onChange={handleChange}>
      <option value="yellow">Yellow theme</option>
      <option value="green">Green theme</option>
      <option value="blue">Blue theme</option>
      <option value="red">Red theme</option>
      <option value="orange">Orange theme</option>
    </select>
  );
}

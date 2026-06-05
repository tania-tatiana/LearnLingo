import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.logoWrapper}>
        <NavLink to="/" className={css.logo}>
          LearnLingo
        </NavLink>
      </div>
      <Navigation />
      <div className={css.authWrapper}>
        <NavLink className={css.login}>Log in</NavLink>
        <NavLink className={css.registration}>Registration</NavLink>
      </div>
    </header>
  );
}

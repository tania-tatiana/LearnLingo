import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isActiveLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.wrapper}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={isActiveLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teachers" className={isActiveLink}>
            Teachers
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={isActiveLink}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

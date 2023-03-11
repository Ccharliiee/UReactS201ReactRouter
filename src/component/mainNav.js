import { NavLink } from "react-router-dom";

import classes from "./mainNav.module.css";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive, isPending }) =>
                isActive ? classes.active : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              end
              className={({ isActive, isPending }) =>
                isActive ? classes.active : isPending ? classes.pending : ""
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;

import { Outlet } from "react-router-dom";

import MainNav from "../component/mainNav";
import classes from "./rootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

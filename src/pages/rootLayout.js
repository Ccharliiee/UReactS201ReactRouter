import { Outlet } from "react-router-dom";

import MainNav from "../component/mainNav";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

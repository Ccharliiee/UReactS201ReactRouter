import { Outlet } from "react-router-dom";

const ProductRootLayout = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <Outlet />
    </>
  );
};

export default ProductRootLayout;

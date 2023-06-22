import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { Login } from "./features/auth/components/Login";
// import Productlist from './features/counter copy/Productlist';
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Cart } from "./features/cart/Cart";
import Cartpage from "./pages/Cartpage";
import Productdetails from "./features/product/components/Productdetails";
import Productdetailpage from "./pages/Productdetailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/signup",
    element: <Signuppage />,
  },
  {
    path: "/cart",
    element: <Cartpage />,
  },
  {
    path: "/product-details/:id",
    element: <Productdetailpage></Productdetailpage>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Productlist/> */}
      {/* <Home></Home> */}
      {/* <Loginpage/> */}
      {/* <Signuppage/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

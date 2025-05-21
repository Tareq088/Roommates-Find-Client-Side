import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayOut/HomeLayout";
import Login from "../Pages/LogIn/Login";
import AuthLayout from "../Layout/AuthLayOut/AuthLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Components/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
          path:"/home",
          Component:Home
        }
    ]
  },
  {
    path:"/auth",
    Component:AuthLayout,
    children:[
        {
            path:"/auth/login",
            Component: Login
        },
        {
            path:"/auth/signup",
            Component:SignUp
        }
    ]
  }
]);
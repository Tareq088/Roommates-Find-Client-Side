import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayOut/HomeLayout";
import Login from "../Pages/LogIn/Login";
import AuthLayout from "../Layout/AuthLayOut/AuthLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Components/Home/Home";
import Error from "../Pages/Error/Error";
import Find_Rommate from "../Pages/Find_RoomMate/Find_Rommate";
import Browse_Listing from './../Pages/Browse_Listing/Browse_Listing';
import My_Listing from "../Pages/My_Listing/My_Listing";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
          path:"/home",
          Component:Home
        },
        {
          path:"/find_roommate",
          Component:Find_Rommate
        },
      {
        path:'/browse_listing',
        Component:Browse_Listing
      },
      {
        path:'/my_listing',
        Component:My_Listing
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
  },
  {
    path:"/*",
    Component:Error
  }
]);
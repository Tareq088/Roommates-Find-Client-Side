import { createBrowserRouter } from "react-router";
import Login from "../Pages/LogIn/Login";
import AuthLayout from "../Layout/AuthLayOut/AuthLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import Find_Roommate from "../Pages/Find_RoomMate/Find_Rommate";
import Browse_Listing from './../Pages/Browse_Listing/Browse_Listing';
import My_Listing from "../Pages/My_Listing/My_Listing";
import PrivateRoute from './../Contexts/PrivateRoute';
import HomeLayout from './../Layout/HomeLayOut/HomeLayout';
import Home from './../Components/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
          index:true,
          path:"/home",
          Component:Home,
        }
    ]
  },
  {
    path:"/find_roommate",
    element:<PrivateRoute><Find_Roommate></Find_Roommate></PrivateRoute>
  },
  {
    path:'/browse_listing',
    Component:Browse_Listing
  },
  {
    path:'/my_listing',
    Component:My_Listing
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
    path:"*",
    Component:Error
  }
]);
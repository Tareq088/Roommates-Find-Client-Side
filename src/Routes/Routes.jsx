import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayOut/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout
  },
]);
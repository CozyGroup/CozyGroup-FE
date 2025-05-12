import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Login from "../pages/Login"; 

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

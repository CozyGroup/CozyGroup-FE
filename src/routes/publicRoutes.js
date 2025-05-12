import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Login from "../pages/Login"; 
import History from "../pages/History"; 

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
  {
    path: "/history",
    element: <History />,
  },
];

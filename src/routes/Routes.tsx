import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { AdminRoutes } from "./Admin.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/admin",
    element: <App />,
    children: AdminRoutes,
  },
  {
    path: "/faculty",
    element: <App />,
    children: AdminRoutes,
  },
  {
    path: "/student",
    element: <App />,
    children: AdminRoutes,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default router;

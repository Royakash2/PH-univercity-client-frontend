import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import { routesGenerator } from "../utils/routesGenerator";
import { AdminPaths } from "./Admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(AdminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(AdminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(AdminPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default router;

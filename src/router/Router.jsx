import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import ErrorPage from "../components/error/ErrorPage";
import Register from "../components/auth/Register";
import Login from "./../components/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true, 
        element: <Register />, 
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login", 
        element: <Login />,
      },
    ],
  },
]);

export default router;

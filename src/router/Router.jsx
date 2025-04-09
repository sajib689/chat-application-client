import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import ErrorPage from "../components/error/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            
            
        ]
    }
])

export default router;
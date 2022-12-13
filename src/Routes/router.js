import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home";
import Weather from "../Pages/Weather";
import TodoApp from "../Pages/TodoApp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/weather",
                element: <Weather />,
            },
            {
                path: "/todo",
                element: <TodoApp />,
            },
        ],
    },
]);

export default router;

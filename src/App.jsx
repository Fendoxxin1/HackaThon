import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import Transaction from "./pages/transaction/Transaction";

const App = () => {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <PageLayout />,
            children: [
                { index: true, element: <Dashboard /> },
                { path: "usermanagement", element: <User /> },
                { path: "transactions", element: <Transaction /> },
            ],
            errorElement: <div>Page not found 404</div>,
        },
    ]);
    return <RouterProvider router={route} />;
};

export default App;

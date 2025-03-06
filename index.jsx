import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
    ]
  },
  
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>
);

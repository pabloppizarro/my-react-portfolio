import { useState } from "react";
import "./App.css";
import StackList from "../components/StackList";
import { AiFillCustomerService } from "react-icons/ai";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import LandingPage from "../pages/LandingPage";
import SplitScreen from "../Layout/SplitScreen";
import Sider from "./Sider";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/more",
                element: <h1>moreee yet? mm kinky</h1>,
            },
            {
                path: "/contact-me",
                element: <h1>so.. do you wanna some "contact"</h1>,
            },
        ],
    },
]);

function App() {
    const [count, setCount] = useState(0);
    //SIEMPRE SE DEVUELVE 1 ELEMENTO CON HIJOS, nunca un array de elementos.
    return (
        <main className="App">
            <RouterProvider router={routes}></RouterProvider>
        </main>
    );
}

//una funcion en react que devuelve html es un componente

export default App;

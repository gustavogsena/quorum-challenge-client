import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import React from "react";
import { Home } from "@/views";
import { homeLoader } from "@/api/loaders/loader";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home />} loader={homeLoader} />
        </Route>
    )
);

const Router: React.FC = () => {
    return <RouterProvider router={router} />
}

export default Router;
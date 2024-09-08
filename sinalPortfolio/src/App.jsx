import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import Projects from "./Components/Projects/Projects";
import SoftwareCategories from "./Components/SoftwareCategories/SoftwareCategories";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/softwareCategories" element={<SoftwareCategories />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

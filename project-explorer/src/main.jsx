import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="me" element={<h1>Sono io!</h1>} />
        <Route path="her" element={<h1>È lei!</h1>} />
        <Route path=":id" element={<h1>Tutti gli altri percorsi</h1>} />
      </Route>
      <Route path="something/:id" element={<h1>something</h1>} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import React from "react";
import ReactDOM from "react-dom/client";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import StudentProvider from "./context/StudentContext";

import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(

    <BrowserRouter>

        <StudentProvider>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<StudentList />}
                />

                <Route
                    path="/favourites"
                    element={<FavouriteStudents />}
                />

            </Routes>

        </StudentProvider>

    </BrowserRouter>

);

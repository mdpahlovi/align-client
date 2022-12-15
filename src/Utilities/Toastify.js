import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadData } from "../Contexts/DataContext";

const Toastify = () => {
    const { theme } = useContext(LoadData);
    return <ToastContainer position="top-right" autoClose={1500} theme={theme} />;
};

export default Toastify;

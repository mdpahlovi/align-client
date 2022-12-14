import React, { useContext, useEffect } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { LoadData } from "../Contexts/DataContext";

function ThemeToggle() {
    const { theme, setTheme } = useContext(LoadData);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, [theme]);

    return (
        <label className="swap swap-rotate icon-button text-xl">
            <input onClick={() => setTimeout(() => setTheme(theme === "light" ? "dark" : "light"), 150)} type="checkbox" />
            <RiSunFill className="swap-on" />
            <RiMoonFill className="swap-off" />
        </label>
    );
}

export default ThemeToggle;

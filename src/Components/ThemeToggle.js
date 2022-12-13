import React, { useEffect, useState } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

function ThemeToggle() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

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

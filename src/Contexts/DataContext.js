import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LoadData = createContext();

const DataContext = ({ children }) => {
    const [allCountries, setAllCountries] = useState([]);
    const [matchCountries, setMatchCountries] = useState([]);
    const [searchValue, setSearchValue] = useState(null);

    const getMatchCountries = (value, allCountries) => {
        setSearchValue(value);
        if (value) {
            setMatchCountries(
                allCountries.filter((country) => {
                    return country.name.common.toLowerCase().includes(value.toLowerCase());
                })
            );
        } else setMatchCountries([]);
    };

    const getWeatherData = (value, allCountries) => {
        if (value.latlng && !allCountries) {
            console.log(value);
        } else {
            const searchCountry = allCountries.find((country) => country.name.common === value);
            setMatchCountries([]);
            console.log(searchCountry);
        }
    };

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => setAllCountries(response.data))
            .catch((error) => console.log(error));
    }, []);

    // Get Theme Value
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);
    const data = { allCountries, searchValue, setSearchValue, matchCountries, setMatchCountries, getMatchCountries, getWeatherData, theme, setTheme };

    return <LoadData.Provider value={data}>{children}</LoadData.Provider>;
};

export default DataContext;

import React, { Fragment, useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { FaSearchLocation } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosArrowDropdownCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import { Menu, Transition } from "@headlessui/react";
import Logo from "../Assets/logo.png";
import { LoadData } from "../Contexts/DataContext";

const Dashboard = () => {
    const { searchValue, setSearchValue, allCountries, matchCountries, setMatchCountries, getMatchCountries, getWeatherData } = useContext(LoadData);
    const [open, setOpen] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(true);
    const navLink = ({ isActive }) => (isActive ? "button active-button" : "group button");

    return (
        <>
            <aside
                className={`fixed h-screen flex flex-col justify-between px-6 pb-3 transition duration-300 ${
                    open ? "-translate-x-full" : "translate-x-0"
                } lg:translate-x-0 w-64 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-neutral`}
            >
                <div>
                    <div className="-mx-6 px-6 py-4 flex justify-center">
                        <Link to="/">
                            <img src={Logo} className="w-32" alt="" />
                        </Link>
                    </div>
                    <div className="mt-8 text-center">
                        <img src="https://i.ibb.co/7pGv73K/Pahlovi.png" alt="" className="mx-auto rounded-full h-28 w-28" />
                        <h5 className="mt-4 text-xl font-semibold">MD Pahlovi</h5>
                        <span className="opacity-70">Admin</span>
                    </div>
                    <div className="mt-8 space-y-2">
                        <NavLink to="/" className={navLink} end>
                            <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                    className="dark:fill-slate-600 fill-current text-cyan-400"
                                />
                                <path
                                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                    className="fill-current text-primary group-hover:text-primary"
                                />
                                <path
                                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                    className="fill-current group-hover:text-primary"
                                />
                            </svg>
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink to="/weather" className={navLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path className="fill-current text-gray-600 group-hover:text-primary" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path className="fill-current text-gray-300 group-hover:text-primary" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <span>Weather</span>
                        </NavLink>
                        <NavLink to="/todo" className={navLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    className="fill-current text-gray-600 group-hover:text-primary"
                                    fillRule="evenodd"
                                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                    clipRule="evenodd"
                                />
                                <path className="fill-current text-gray-300 group-hover:text-primary" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                            <span>Todo App</span>
                        </NavLink>
                    </div>
                </div>
                <div className="-mx-6 flex items-center justify-between border-t-2 border-accent px-6 pt-4">
                    <button className="group button opacity-70 ">
                        <HiOutlineLogout className="text-2xl" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky z-20 top-0 h-16 flex items-center justify-end space-x-4 px-6 2xl:container bg-neutral">
                    <Link to="/" className="fixed left-4 lg:hidden">
                        <img src={Logo} className="w-24" alt="" />
                    </Link>
                    {/*Get Countries */}
                    <div
                        className={`fixed lg:static flex flex-wrap justify-end gap-4 transition duration-300 ${
                            showSearchBar ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-24 xs:translate-y-16"
                        } lg:translate-y-0 lg:opacity-100`}
                    >
                        {/*search bar */}
                        <div className="relative flex items-center text-xl">
                            <FaSearchLocation
                                onClick={() => {
                                    getWeatherData(searchValue, allCountries);
                                }}
                                className="absolute w-max h-max left-4 flex items-center border-r border-accent pr-3 cursor-pointer"
                            />
                            <input
                                type="search"
                                value={searchValue ? searchValue : ""}
                                onChange={(e) => getMatchCountries(e.target.value, allCountries)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        getWeatherData(searchValue, allCountries);
                                    }
                                }}
                                placeholder="Search Countries"
                                className="outline-none input-field bg-secondary pl-14 pr-4 focus:border-primary"
                            />
                            {matchCountries.length === 0 ? (
                                ""
                            ) : (
                                <div className="absolute top-[3.35rem] min-w-full max-h-[11.8rem] overflow-auto bg-secondary p-1 rounded-xl text-sm">
                                    {matchCountries.map((country, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                getWeatherData({ name: country.name.common, latlng: country.latlng }, 0);
                                                setSearchValue("");
                                                setMatchCountries([]);
                                            }}
                                            className="button py-2 hover:active-button"
                                        >
                                            {country.name.common}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/*Drop Down*/}
                        <div className="text-right">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex justify-center items-center gap-2 input-field bg-secondary text-accent hover:border-primary px-4">
                                        Select Countries
                                        <IoMdArrowDropdownCircle />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute max-h-52 overflow-auto right-0 mt-3 origin-top-right rounded-xl bg-secondary">
                                        <div className="p-1">
                                            {allCountries.map((country, index) => (
                                                <Menu.Item key={index}>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                getWeatherData({ name: country.name.common, latlng: country.latlng }, 0);
                                                            }}
                                                            className={`${active ? "active-button" : ""} w-full button py-2`}
                                                        >
                                                            {country.name.common}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                    {/* Search Icon */}
                    <label className="swap swap-rotate icon-button text-xl lg:hidden">
                        <input type="checkbox" onClick={() => setShowSearchBar(!showSearchBar)} />
                        <FaSearchLocation className="swap-off" />
                        <IoIosArrowDropdownCircle className="swap-on" />
                    </label>
                    {/* {Toggle Sidebar} */}
                    <label className="swap swap-rotate icon-button text-xl lg:hidden">
                        <input type="checkbox" onClick={() => setOpen(!open)} />
                        <CgMenuRight className="swap-off" />
                        <CgClose className="swap-on" />
                    </label>
                    <ThemeToggle />
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;

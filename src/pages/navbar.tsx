import {Avatar} from "@mui/material";
import React, {FC, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Auth} from "./index.tsx";
import {profile} from "../../redux/users.ts";

const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [inputHover, setInputHover] = useState<boolean>(false);
    const [dropMenu, setDropMenu] = useState<boolean>(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
    const [auth, setAuth] = useState<boolean>(false)
    const location = useLocation();

    const links = [
        {name: "Home", link: "/home"},
        {name: "Movies", link: "/movie"},
        {name: "My List", link: "/mylist"},
    ];
    React.useEffect(() => {
        if (profile.user.name) {
            console.log(true)
        }
    }, [profile.user]);


    useEffect(() => {
        setIsNavbarVisible(location.pathname !== '' && location.pathname !== '/');
        setAuth(location.pathname === '')
    }, [location.pathname]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <>
            <div
                className={`bg-opacity-90 w-full fixed z-10 transition-colors duration-300 ${
                    isScrolled ? "bg-black" : "bg-transparent"
                }`}
            >
                <nav className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center justify-center text-red-700 font-bold text-3xl pb-2 ">
                            <Link to='/home'>Twour</Link>

                        </div>

                        {isNavbarVisible && <ul className="flex gap-8 text-white">
                            {links.map(({name, link}) => {
                                return (
                                    <li key={name}>
                                        <div>

                                        </div>
                                        <Link
                                            to={link}
                                            className="text-white text-opacity-80 hover:text-opacity-100"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>}
                    </div>
                    {isNavbarVisible ?
                        <div className="flex items-center gap-4">
                            <div
                                className={`relative ${
                                    showSearch
                                        ? "w-56 border-white border-opacity-100 "
                                        : "w-8 border-transparent"
                                } text-white flex transition-widthBorder rounded-full border  duration-300 overflow-x-hidden `}
                            >
                                <button
                                    onFocus={() => setShowSearch(true)}
                                    onBlur={() => {
                                        if (!inputHover) {
                                            setShowSearch(false);
                                        }
                                    }}
                                    className="pr-1.5 pl-[5px] text-current"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-current fill-current"
                                        viewBox="0 0 50 50"
                                    >
                                        <path
                                            d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className={`${
                                        showSearch ? "opacity-100 visible" : "opacity-0 invisible"
                                    }  bg-transparent  px-2 py-1 focus:outline-none text-[rgb(218,212,212)] transition-opacity placeholder:text-white`}
                                    onMouseEnter={() => setInputHover(true)}
                                    onMouseLeave={() => setInputHover(false)}
                                    onBlur={() => {
                                        setShowSearch(false);
                                        setInputHover(false);
                                    }}
                                />
                            </div>
                            <div className=' relative' onClick={() => setDropMenu(e => !e)}>
                                <Avatar sx={{width: 44, height: 44}}>{profile.user.name.charAt(0)}</Avatar>
                                <div
                                    className={`absolute rounded-lg top-12 p-4 right-0 bg-black flex gap-2 flex-col ${dropMenu ? 'opacity-100' : 'opacity-0'}`}>
                                    <Link to={'/profile'} className="">Посмотреть профиль</Link>
                                    <div>Выйти</div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <button
                                className='py-2 px-4 rounded bg-[rgb(229,9,20)] opacity-80 duration-200 hover:opacity-100'
                                onClick={() => setAuth(true)}>
                                Войти
                            </button>

                        </div>
                    }
                </nav>
            </div>
            <Auth auth={auth} setAuth={setAuth}/>
        </>
    );
};

export default Navbar;

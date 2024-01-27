import React from 'react';
import {Routes, Route, Outlet, useNavigate} from 'react-router-dom';
import {CommonMovie, Footer, Home, Movie, Navbar, Profile} from './pages';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {profile} from "../redux/users.ts";

export default function App() {
    const navigate = useNavigate();


    // If authenticatedUser is found, redirect to /home
    React.useEffect(() => {
        if (profile.user.name && window.location.pathname === '') {
            navigate('/home');
        }
    }, [profile.user, navigate]);

    return (
        <>
            <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
                <Navbar/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="w-full ">
                                    <div className="w-full h-screen z-[0] bg-[url('/login/landing.jpg')] bg-no-repeat">
                                        <div className='h-full flex items-center justify-center flex-col gap-5'>


                                            <h1 className='text-5xl font-bold'>Фильмы, сериалы и многое другое без
                                                ограничений</h1>
                                            <h3 className='text-3xl'>Смотрите где угодно. Отменить подписку можно в
                                                любое время.</h3>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/movie" element={<Outlet/>}>
                        <Route index element={<CommonMovie/>}/>
                        <Route path=":id" element={<Movie/>}/>
                    </Route>
                    <Route path="/profile" element={<Profile user={profile.user}/>}/>
                </Routes>
                <Footer/>
            </main>
        </>
    );
}

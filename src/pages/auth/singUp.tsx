import InputAuth from "./input.tsx";
import React from "react";
import {useDispatch} from "react-redux";
import {authUser} from "../../../redux/users.ts";

interface ISignUp {
    setEmail: (e: string) => void;
    setPassword: (e: string) => void;
    email: string;
    password: string;
    setSignUp: (e: boolean) => void;
    setAuth: (e: boolean) => void;
}

const SignUp: React.FC<ISignUp> = ({setAuth, setEmail, setPassword, password, email, setSignUp}) => {
    const dispatch = useDispatch();


    return (
        <>
            <div className=' flex justify-between text-2xl font-bold pb-6'>
                <h2>Войти</h2>
                <div onClick={() => setAuth(false)}>X</div>
            </div>

            <div className='w-full'>
                <div className='w-full'>
                    <InputAuth type='text' setText={setEmail} text={email}/>
                </div>
                <div>
                    <InputAuth type='password' text={password} setText={setPassword}/>
                </div>
                <div className='flex flex-col text-center gap-2'>
                    <div
                        className='py-2 bg-[rgb(229,9,20)] w-full rounded duration-200 hover:brightness-[90%]'>
                        Войти
                    </div>
                    <div className='py-2 rounded hover:underline hover:text-gray-500'
                         onClick={() => dispatch(authUser({email, password}))}>
                        Забыли пароль?
                    </div>
                </div>
            </div>
            <div className='py-2 w-full'>
                <span className='text-gray-500 pr-1'>
                               Впервые на Netflix?
                </span>
                <button onClick={() => setSignUp(false)} className='duration-200 hover:underline'>Зарегистрируйтесь
                    сейчас
                </button>
            </div>
        </>
    )
}
export default SignUp;
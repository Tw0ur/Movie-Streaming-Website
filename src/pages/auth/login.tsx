import InputAuth from "./input.tsx";
import React from "react";
import {useDispatch} from "react-redux";
import {addUsers} from "../../../redux/users.ts";

interface ILogin {
    setName: (e: string) => void;
    setEmail: (e: string) => void;
    setPassword: (e: string) => void;
    password: string;
    email: string;
    name: string;
    setSignUp: (e: boolean) => void;
    setAuth: (e: boolean) => void;
}

const Login: React.FC<ILogin> = ({setAuth, setName, setPassword, setEmail, password, name, email, setSignUp}) => {
    const dispatch = useDispatch()
    const addUs = () => {
        dispatch(addUsers({name, password, email}))
    }

    return (
        <>
            <div className=' flex justify-between text-2xl font-bold pb-6'>
                <h2>Зарегестрироваться</h2>
                <div onClick={() => setAuth(false)}>X</div>
            </div>
            <div className='w-full'>

                <div className='w-full'>
                    <InputAuth type='text' placeholder='Имя пользователя' setText={setName} text={name}/>
                </div>

                <div className='w-full'>
                    <InputAuth type='text' placeholder={'Адрес электронной почты'} setText={setEmail} text={email}/>
                </div>
                <div>
                    <InputAuth type='password' text={password} setText={setPassword}/>
                </div>
                <div className='flex flex-col text-center gap-2'>
                    <div onClick={addUs}
                         className='py-2 bg-[rgb(229,9,20)] w-full rounded duration-200 hover:brightness-[90%]'>
                        Зарегестрироваться
                    </div>
                </div>
            </div>
            <div className='py-3'>
                            <span className='text-gray-500 pr-1'>
                               У вас есть аккаунт?
                            </span>
                <div onClick={() => setSignUp(true)} className='duration-200 hover:underline'>Войдите
                </div>
            </div>
        </>
    )
}
export default Login;
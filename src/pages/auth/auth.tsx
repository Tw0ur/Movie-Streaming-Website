import {useState} from "react";
import Login from "./login.tsx";
import SignUp from "./singUp.tsx";


const Auth = ({auth, setAuth}: { auth: boolean, setAuth: (e: boolean) => void, }) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [signUp, setSignUp] = useState<boolean>(true)

    const setSign = (e: boolean) => {
        setSignUp(e)
        setName('')
        setPassword('')
        setEmail('')
    }
    return (
        <div className={`absolute w-full h-full left-0 top-0`}>
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] min-h-[700px] bg-black bg-opacity-60' ${auth ? 'visible' : 'hidden'}`}>
                <div className='flex flex-col py-12 px-[68px]'>
                    {!signUp ? <Login setAuth={setAuth} setSignUp={setSign} name={name} setName={setName} email={email}
                                      password={password} setPassword={setPassword} setEmail={setEmail}/> :
                        <SignUp setAuth={setAuth} setSignUp={setSign} email={email} password={password}
                                setPassword={setPassword} setEmail={setEmail}/>}
                </div>
            </div>

        </div>
    )
}

export default Auth
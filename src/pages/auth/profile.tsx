import React from 'react'
import {Avatar} from "@mui/material";

interface IProfile {
    user: {
        id?: number;
        name: string;
        email: string;
        password: string;
        favorite?: number[]
        watching?: number[]
        auth?: boolean
    }

}

const Profile: React.FC<IProfile> = (props) => {
    console.log(props)
    return (
        <>
            <div className='h-screen flex items-center gap-10 w-full py-10 px-12'>
                <div>
                    <Avatar sx={{width: 300, height: 300}}>
                        <div className='text-6xl'>{props.user.name.charAt(0)}

                        </div>
                    </Avatar>
                </div>
                <div className='flex gap-4 flex-col'>
                    <div className=''>
                        Информация об аккаунте
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            Имя:
                        </div>
                        <div>
                            {props.user.name}
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            Email:
                        </div>
                        <div>
                            {props.user.email}
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            Password:
                        </div>
                        <div>
                            {props.user.password}
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Profile
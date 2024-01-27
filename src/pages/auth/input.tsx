import {FC, useState} from "react";
import './input.css'

interface IInput {
    setText: (email: string) => void;
    text: string;
    type: string;
    placeholder?: string;
}

const InputAuth: FC<IInput> = ({setText, type, text, placeholder}) => {
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const onChangeType = (e: any) => {
        setText(e.target.value);
    };
    return (
        <div className="relative rounded borderInput my-4">
            <div className="absolute  w-full h-full flex ">
                <div
                    className={` ${
                        inputFocus || text ? "inputFocus" : "noInputFocus"
                    } labelInput text-gray-500`}
                >
                    {placeholder ? placeholder : type !== 'text' ? 'Введите пароль' : 'Адрес электронной почты или имя пользователя'}
                </div>
            </div>
            <div className="text-white w-full mt-4 pt-3 pb-2 px-2 z-[1]">
                <input
                    required
                    type={type !== 'text' ? 'password' : 'text'}
                    onClick={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    className="inputLogin "
                    value={text}
                    onChange={onChangeType}
                    // onKeyDown={(event) => {
                    //     if (type === 'password' && event.keyCode === 13) {
                    //         btnLogin(event)
                    //     }
                    // }}
                />
            </div>
        </div>
    )
}
export default InputAuth;
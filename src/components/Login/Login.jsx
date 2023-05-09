import axios from 'axios'
import React, { useContext, useState } from 'react'
import { StateContext } from '../../context'

function Login() {
    const { handleClose } = useContext(StateContext)
    const [loginTel, setLoginTel] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const loginHandler = (e) => {
        e.preventDefault()
        const loginData = {
            method: "login",
            params: {
                mobile: loginTel,
                password: loginPassword,
            },
        }
        axios.post("https://askona.herokuapp.com/api/v1/auth/", loginData)
            .then(res => {
                if (res.data?.Error) {
                    alert(res.data?.Error)
                    return
                }
                localStorage.setItem("askonaUser", JSON.stringify(res.data.result))
                handleClose();
            })
    }
    return (
        <div>
            <form onSubmit={loginHandler} action="" className=' flex flex-col items-center gap-5'>
                <input onChange={(e) => setLoginTel(e.target.value)} className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="tel" placeholder='Тел' />
                <input onChange={(e) => setLoginPassword(e.target.value)} className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="password" placeholder='Пароль' autoComplete='current password' />
                <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>ВОЙТИ</button>
            </form>
        </div>
    )
}

export default Login
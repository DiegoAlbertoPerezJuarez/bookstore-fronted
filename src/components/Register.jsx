import React from 'react'
import {useState} from "react"
import Label from './Label'
import '../css/Register.css'

const baseUrl = "localhost:8080/order/register"

function Register() {

    const [password, setPassword] = useState("");

    function handleChangePassword(e){
        const value = e.target.value 
        setPassword(value)
    }

    return (
        <div className="registerContainer">
            <div className="registerForm">
                <h2 className='title'>Register</h2>
                <form action='' id='form'>
                    <Label type={"text"} id={"name"} placeholder={"Write your name"} text={"Name"}/>
                    <Label type={"email"} id={"email"} placeholder={"Write your E-mail"} text={"E-mail"}/>
                    <Label type={"text"} id={"username"} placeholder={"Write a username"} text={"Username"}/>
                    <Label type={"password"} id={"password"} placeholder={"Write your password"} onChange={handleChangePassword} text={"Password"}/>
                    <Label type={"date"} id={"date"} placeholder={"Write your birthday"} text={"B-day"}/>
                    <Label type={"number"} id={"phone"} placeholder={"Write your phone number"} text={"Phone number"}/>
                    <Label type={"text"} id={"adress"} placeholder={"Write your adress"} text={"Adress"}/>

                </form>
            </div>
        </div>
      );
}

export default Register;
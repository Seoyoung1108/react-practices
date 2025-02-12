import React from 'react';
import './assets/Form.css';

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e)=>{
        setEmail(e.target.value);
    }

    const changePassword = (e)=>{
        setPassword(e.target.value);
    }

    const onSubmitLoginForm = (e)=>{
        e.preventDefault();
    }

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={onSubmitLoginForm}>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" autoComplete="off" value={email} onChange={changeEmail} />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" autoComplete="off" value={password} onChange={changePassword}/>

            <input type="submit" value="로그인" />
        </form>
    );
}
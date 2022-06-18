/* Login.js */

/* ↓新たに5つimportしています */
import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {authExample} from "./firebaseConfig";
import firebase from "firebase/compat";
import {Navigate} from "react-router-dom";
import {SignUpInput} from "./SignUpInput";



const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(
                authExample,
                loginEmail,
                loginPassword
            );
        } catch(error) {
            alert("メールアドレスまたはパスワードが間違っています");
        }
    };



    return (
        <>

            <form onSubmit={handleSubmit}>
                <SignUpInput showType={"email"} contentTitle={"メールアドレス"} registerContent={loginEmail} setRegisterContent={setLoginEmail}/>
                <SignUpInput showType={"password"} contentTitle={"パスワード"} registerContent={loginPassword} setRegisterContent={setLoginPassword}/>
                <button>ログイン</button>

            </form>
        </>
    );
};

export default SignIn;

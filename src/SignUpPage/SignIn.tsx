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
        console.log(loginEmail,loginPassword)
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

    /* ↓ログインを判定する設定 */
    const [user, setUser] = React.useState<firebase.User|null>(null)

    useEffect(() => {
        onAuthStateChanged(authExample, (currentUser ) => {
            setUser(currentUser as firebase.User|null);
        });
    }, []);

    return (
        <>
            <h1>ログインページ</h1>
            <form onSubmit={handleSubmit}>
                <SignUpInput showType={"email"} contentTitle={"メールアドレス"} registerContent={loginEmail} setRegisterContent={setLoginEmail}/>
                <SignUpInput showType={"password"} contentTitle={"パスワード"} registerContent={loginPassword} setRegisterContent={setLoginPassword}/>
                <button>ログイン</button>

            </form>
        </>
    );
};

export default SignIn;

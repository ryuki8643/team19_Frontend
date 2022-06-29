/* Login.js */

/* ↓新たに5つimportしています */
import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {authExample} from "../firebaseConfig";
import firebase from "firebase/compat";
import {Navigate} from "react-router-dom";
import {SignUpInput} from "../SignUpInput";

import {Button, FormControl} from "@mui/material";


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
                <Button sx={[{



                    color:"white",
                    backgroundColor:'#FF6600',
                    borderBottom:"5px solid orangered",
                    borderRight:"5px solid orangered",
                    borderRadius:"10px",



                    marginTop:1,
                    flexGrow:1,
                    width:"100%",
                    textTransform: 'none'


                },{'&:hover': {
                        backgroundColor:'#FF6600',
                        borderBottom:"2px solid orangered",
                        borderRight:"2px solid orangered",
                    }}]} onClick={handleSubmit}>ログイン</Button>

            </form>
        </>
    );
};

export default SignIn;

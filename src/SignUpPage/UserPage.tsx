/* Mypage.js（完成版） */

import React, { useState, useEffect } from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {authExample} from "./firebaseConfig";
import {
    useNavigate,
    Navigate
} from "react-router-dom";
import firebase from "firebase/compat";
import {DialogContent,Box} from "@mui/material";
import SignIn from "./SignIn";
import Register from "./SignUp";

type MyPagePropsType={
    signUpBool:boolean
    user:firebase.User|null
}

const MyPage = (MyPageProps:MyPagePropsType )=> {
    const [loading, setLoading] = useState(true);


    const navigate = useNavigate();
    const logout = async () => {
        await signOut(authExample);

    }
    return (
        <Box>


                    {!MyPageProps.user ? (
                        <>
                        {MyPageProps.signUpBool ? <SignIn/>:
                            <Register/>}
                        </>
                    ) : (
                        <>

                            <p>{MyPageProps.user?.email}</p>
                            <button onClick={logout}>ログアウト</button>
                        </>
                    )}


        </Box>
    );
};

export default MyPage;

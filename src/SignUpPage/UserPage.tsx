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

const MyPage = () => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = React.useState<firebase.User|null>(null)

    useEffect(() => {
        onAuthStateChanged(authExample, (currentUser ) => {
            setUser(currentUser as firebase.User|null);
        });
    }, []);
    const navigate = useNavigate();
    const logout = async () => {
        await signOut(authExample);
        
    }
    return (
        <Box>


                    {!user ? (
                        <>
                        <SignIn/>
                        <Register/>
                        </>
                    ) : (
                        <>
                            <h1>マイページ</h1>
                            <p>{user?.email}</p>
                            <button onClick={logout}>ログアウト</button>
                        </>
                    )}


        </Box>
    );
};

export default MyPage;

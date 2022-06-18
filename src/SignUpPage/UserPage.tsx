/* Mypage.js（完成版） */

import React, { useState, useEffect } from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {authExample} from "./firebaseConfig";
import {
    useNavigate,
    Navigate
} from "react-router-dom";
import firebase from "firebase/compat";

const Mypage = () => {


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
        navigate("/login/");
    }

    return (
        <>
            {!loading && (
                <>
                    {!user ? (
                        <Navigate to={`/login/`} />
                    ) : (
                        <>
                            <h1>マイページ</h1>
                            <p>{user?.email}</p>
                            <button onClick={logout}>ログアウト</button>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Mypage;

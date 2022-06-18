import React, {useEffect, useState} from "react";
/* ↓「createUserWithEmailAndPassword」と「auth」をimport */
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {authExample} from "./firebaseConfig";
import firebase from "firebase/compat";


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(
                authExample,
                registerEmail,
                registerPassword
            );
        } catch(error) {
            alert("正しく入力してください");
        }
    };

    /* ↓state変数「user」を定義 */
    const [user, setUser] = React.useState<firebase.User|null>(null);


    /* ↓ログインしているかどうかを判定する */
    useEffect(() => {
        onAuthStateChanged(authExample, (currentUser ) => {
            setUser(currentUser as firebase.User|null);
        });
    }, []);
    return (
        <>
            <h1>新規登録</h1>
            {/* ↓「onSubmit」を追加 */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        name="email"
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        name="password"
                        type="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                </div>
                <button>登録する</button>
            </form>
        </>
    );
};

export default Register;

import React, {useEffect, useState} from "react";
/* ↓「createUserWithEmailAndPassword」と「auth」をimport */
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {authExample} from "../firebaseConfig";
import firebase from "firebase/compat";
import {SignUpInput} from "../SignUpInput";


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRole,setRegisterRole]=useState("")
    const [registerCompany,setRegisterCompany]=useState("")
    const [registerAge,setRegisterAge]=useState("")

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(registerAge && registerCompany && registerEmail && registerPassword && registerRole){
            if(registerPassword.length>5){
                try {
                    await createUserWithEmailAndPassword(
                        authExample,
                        registerEmail,
                        registerPassword
                    );
                } catch (error) {
                    alert("すでに登録されたメールアドレスです");

                }
            } else{
                alert("パスワードが５文字以下です。")
            }
        } else{
            alert("新規登録時はすべての項目を登録してください");
        }
    };





    return (
        <>

            {/* ↓「onSubmit」を追加 */}
            <form onSubmit={handleSubmit}>
                <SignUpInput showType={"email"} registerContent={registerEmail} setRegisterContent={setRegisterEmail} contentTitle={"メールアドレス"}/>
                <SignUpInput showType={"password"} registerContent={registerPassword} setRegisterContent={setRegisterPassword}　contentTitle={"パスワード"}/>
                <SignUpInput showType={"text"} registerContent={registerRole} setRegisterContent={setRegisterRole} contentTitle={"役職"}/>

                <SignUpInput showType={"text"} registerContent={registerCompany} setRegisterContent={setRegisterCompany} contentTitle={"会社"}/>
                <SignUpInput showType={"text"} contentTitle={"年齢"} registerContent={registerAge} setRegisterContent={setRegisterAge}/>
                <button>登録する</button>
            </form>
        </>
    );
};



export default Register;

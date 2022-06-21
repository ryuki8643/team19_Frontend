import React, {useEffect, useState} from "react";
/* ↓「createUserWithEmailAndPassword」と「auth」をimport */
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {authExample} from "../firebaseConfig";
import firebase from "firebase/compat";
import {SignUpInput} from "../SignUpInput";
import {Button,Box} from "@mui/material";


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerRole,setRegisterRole]=useState("")
    const [registerCompany,setRegisterCompany]=useState("")
    const [registerAge,setRegisterAge]=useState("")

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(e)
        if(registerAge && registerCompany && registerEmail && registerPassword && registerRole) {
            if (registerEmail.match(/.+@.+\..+/)) {

                if (registerPassword.length > 5) {
                    try {
                        await createUserWithEmailAndPassword(
                            authExample,
                            registerEmail,
                            registerPassword
                        );
                    } catch (error) {
                        alert("すでに登録されたメールアドレスです");

                    }
                } else {
                    alert("パスワードが５文字以下です。")
                }

            }else {
                alert("メールアドレスが不正です。")
            }
        } else{
            alert("新規登録時はすべての項目を登録してください");
        }
    };





    return (
        <>

            {/* ↓「onSubmit」を追加 */}
            <Box >
                <SignUpInput showType={"email"} registerContent={registerEmail} setRegisterContent={setRegisterEmail} contentTitle={"メールアドレス"}/>
                <SignUpInput showType={"password"} registerContent={registerPassword} setRegisterContent={setRegisterPassword}　contentTitle={"パスワード(６文字以上)"}/>
                <SignUpInput showType={"text"} registerContent={registerRole} setRegisterContent={setRegisterRole} contentTitle={"役職"}/>

                <SignUpInput showType={"text"} registerContent={registerCompany} setRegisterContent={setRegisterCompany} contentTitle={"会社"}/>
                <SignUpInput showType={"text"} contentTitle={"年齢"} registerContent={registerAge} setRegisterContent={setRegisterAge}/>
                <Button sx={{textAlign:"left",display:"block"}} onClick={handleSubmit}>登録する</Button>
            </Box>
        </>
    );
};



export default Register;

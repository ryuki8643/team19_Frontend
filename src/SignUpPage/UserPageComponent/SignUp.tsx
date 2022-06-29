import React, {useEffect, useState} from "react";
/* ↓「createUserWithEmailAndPassword」と「auth」をimport */
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {authExample} from "../firebaseConfig";
import firebase from "firebase/compat";
import {SignUpInput} from "../SignUpInput";
import {Button, Box, TextField} from "@mui/material";
import {exampleSearchDataType, exampleUserDataType} from "../../ExampleData/ExampleDataType";

type RegisterPropsType={
    setUserPostObject(userObject:null|exampleUserDataType):void
}
const Register = (RegisterProps:RegisterPropsType) => {
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
                    if (Number(registerAge)>0){
                        try {
                            await createUserWithEmailAndPassword(
                                authExample,
                                registerEmail,
                                registerPassword
                            );
                            RegisterProps.setUserPostObject({
                                firebaseUid:"",
                                email:registerEmail,
                                age:Number(registerAge),
                                role:registerRole,
                                company:registerCompany,
                            })
                        } catch (error) {
                            alert("すでに登録されたメールアドレスです");

                        }
                    } else {
                        alert("年齢が０以下です")
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
                <SignUpInput showType={"number"} contentTitle={"年齢"} registerContent={registerAge} setRegisterContent={setRegisterAge}/>

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
                    }}]} onClick={handleSubmit}>登録する</Button>
            </Box>
        </>
    );
};



export default Register;

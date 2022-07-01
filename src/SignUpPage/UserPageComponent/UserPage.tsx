/* Mypage.js（完成版） */

import React, { useState, useEffect } from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {authExample} from "../firebaseConfig";
import {
    useNavigate,
    Navigate
} from "react-router-dom";
import firebase from "firebase/compat";
import {DialogContent, Box, Button, Paper} from "@mui/material";
import SignIn from "./SignIn";
import Register from "./SignUp";
import {DataExchangeExample} from "../../DataExchange/DataExchangeExample";
import {exampleCurrentIdData, exampleSearchData} from "../../ExampleData/ExampleData";
import {exampleUserDataType, getUserDataType} from "../../ExampleData/ExampleDataType";
import {userIdAPI} from "../../DataExchange/APIaxios";
type MyPagePropsType={
    signUpBool:boolean
    user:firebase.User|null
    setUserPostObject(userObject:null|exampleUserDataType):void
    handleClose():void
    setOnceSignUp(OnceSignUp:boolean):void
}

const MyPage = (MyPageProps:MyPagePropsType )=> {
    const [loading, setLoading] = useState(true);
    const [userData,setUserData]=useState({
        id:0,
        firebaseUid: "",
        email: "",
        age: 0,
        role: "",
        company: "",
    } as getUserDataType)


    const navigate = useNavigate();
    const logout = async () => {
        await signOut(authExample);

    }
    useEffect(()=>{
        if(MyPageProps.user){
            userIdAPI(setUserData, MyPageProps.user.uid).then(()=>{})


        }
    },[MyPageProps.user])
    return (
        <Box>


                    {!MyPageProps.user ? (
                        <>
                        {MyPageProps.signUpBool ? <SignIn/>:
                            <Register setUserPostObject={MyPageProps.setUserPostObject} handleClose={MyPageProps.handleClose} setOnceSignUp={MyPageProps.setOnceSignUp}/>}
                        </>
                    ) : (
                        <Paper elevation={5} sx={{marginX:-2,marginTop:-2,marginBottom:-3}}>
                            <Box sx={{margin:1}}>
                                <pre></pre>


                                <>
                                    <Box>年齢:{userData.age}</Box>
                                    <Box>企業:{userData.company}</Box>
                                    <Box>役職:{userData.role}</Box>
                                    <Box>メール:{userData.email}</Box>
                                    <pre></pre>
                                </>


                            </Box>

                        </Paper>
                    )}


        </Box>
    );
};

export default MyPage;

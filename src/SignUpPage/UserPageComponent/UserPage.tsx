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
import {exampleUserDataType} from "../../ExampleData/ExampleDataType";

type MyPagePropsType={
    signUpBool:boolean
    user:firebase.User|null
    setUserPostObject(userObject:null|exampleUserDataType):void
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
                            <Register setUserPostObject={MyPageProps.setUserPostObject}/>}
                        </>
                    ) : (
                        <Paper elevation={5} sx={{marginX:-2,marginTop:-2,marginBottom:-3}}>
                            <Box sx={{margin:1}}>
                                <pre></pre>

                            {MyPageProps.user.uid ? exampleCurrentIdData[MyPageProps.user.uid] ?
                                <>
                                    <Box>年齢:{exampleCurrentIdData[MyPageProps.user.uid].age}</Box>
                                    <Box>企業:{exampleCurrentIdData[MyPageProps.user.uid].company}</Box>
                                    <Box>役職:{exampleCurrentIdData[MyPageProps.user.uid].role}</Box>
                                </>
                                :"":""}
                            <Box>メール:{MyPageProps.user?.email}</Box>
                                <pre></pre>
                            </Box>

                        </Paper>
                    )}


        </Box>
    );
};

export default MyPage;

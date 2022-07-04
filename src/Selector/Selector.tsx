import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Style/Selector.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import firebase from "firebase/compat";
import {onAuthStateChanged} from "firebase/auth";
import {authExample} from "../SignUpPage/firebaseConfig";
import {ButtonStyle, UserDialog} from "./LoginAndUserPageDailog";
import {exampleSearchDataType, exampleUserDataType} from "../ExampleData/ExampleDataType";
import {SearchButton} from "../SearchPage/SearchButton";
import {SelectorDrawer} from "./SelectorDrawer";
import EditIcon from '@mui/icons-material/Edit';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import {ButtonGroup} from "@mui/material";
import {useWindowSize} from "../SearchPage/windowSize";
import {SignUpPostAPI} from "../DataExchange/APIaxios";
import {useDelayedEffect} from "./UseDelayedEffect";


type SelectorPropsType={
    SearchData:exampleSearchDataType

}

export const Selector = (SelectorProps:SelectorPropsType) => {

    const [loginUser, setLoginUser] = React.useState<firebase.User|null>(null)

    const [modalOpen,setModalOpen] =useState(false)

    const [signUpBool,setSignUpBool]=useState(false)
    const [drawerOpen,setDrawerOpen]=useState(false)
    const [loginButton,setLoginButton]=useState(<LockOpenIcon/>)
    const [fontSize,setFontSize]=useState("130%")
    const [userPostObject,setUserPostObject]=useState<null|exampleUserDataType>(null)
    const [onceSignUp,setOnceSignUp]=useState(false)

    const width=useWindowSize()

    const navigate=useNavigate()
    useEffect(() => {
        onAuthStateChanged(authExample, (currentUser ) => {
            setLoginUser(currentUser as firebase.User|null);
        });
    }, []);
    const toggleDrawer =
        ( open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setDrawerOpen(open)
            };
    useEffect(()=>{
        if (loginUser){
            setLoginButton(<AccountCircleIcon/>)
        } else {
            setLoginButton(<LockOpenIcon/>)
        }
    },[loginUser])

    useEffect(()=>{
        if (width==0){

        }else if(width<400){
            setFontSize("70%")

        }else if (width<600){
            setFontSize("80%")

        }else if (width<800){
            setFontSize("100%")
        }else if (width<1000){
            setFontSize("130%")

        }


    },[width])
    useEffect(()=>{
        if(loginUser){
            setLoginButton(<AccountCircleIcon/>)
        }
        if(loginUser && userPostObject){

            const postData={
                firebaseUid:loginUser.uid,
                email:userPostObject.email,
                age:userPostObject.age,
                role:userPostObject.role,
                company:userPostObject.company,
            }
            SignUpPostAPI(postData).then(()=>{})
            setSignUpBool(false)
            setUserPostObject(null)
        }

    },[userPostObject])
    useDelayedEffect(()=>{
        if(onceSignUp ){
            setModalOpen(true)
            setOnceSignUp(false)
        }

    },[onceSignUp],2000)

    return (

            <Box sx={{ flexGrow: 1 ,marginTop:1}}>
                <AppBar position="static" >
                    <Box sx={{display:"flex"}}>



                        <Button   sx={[{


                            fontSize:fontSize,
                            color:"white",
                            backgroundColor:'#FF6600',
                            borderBottom:"5px solid orangered",
                            borderRight:"5px solid orangered",
                            borderRadius:"10px",

                            width:"20%",

                            margin:"1%",
                            textTransform: 'none'


                        },{'&:hover': {
                                backgroundColor:'#FF6600',
                                borderBottom:"2px solid orangered",
                                borderRight:"2px solid orangered",
                            }}]}
                                  onClick={()=>navigate("/")}


                        >
                            <HomeIcon/>IT LIFE
                        </Button>

                        <SearchButton
                            navigate={navigate}
                            SearchData={SelectorProps.SearchData}
                            fontSize={fontSize}
                            width={width}

                        />
                        <Button   sx={[{


                            fontSize:fontSize,
                            color:"white",
                            backgroundColor:'#FF6600',
                            borderBottom:"5px solid orangered",
                            borderRight:"5px solid orangered",
                            borderRadius:"10px",

                            width:"20%",

                            margin:"1%",
                            textTransform: 'none'


                        },{'&:hover': {
                                backgroundColor:'#FF6600',
                                borderBottom:"2px solid orangered",
                                borderRight:"2px solid orangered",
                            }}]}
                                  size="large"
                                  onClick={()=>{navigate("/Edit")}}

                                  variant={"contained"}
                        ><EditIcon />{width>400 && "Edit"}

                        </Button>

                        <Button   sx={[{


                            fontSize:fontSize,
                            color:"white",
                            backgroundColor:'#FF6600',
                            borderBottom:"5px solid orangered",
                            borderRight:"5px solid orangered",
                            borderRadius:"10px",

                            width:"20%",

                            margin:"1%",
                            textTransform: 'none'


                        },{'&:hover': {
                                backgroundColor:'#FF6600',
                                borderBottom:"2px solid orangered",
                                borderRight:"2px solid orangered",
                            }}]}
                                  size="large"
                                  onClick={()=>navigate("/Individual")}

                                  variant={"contained"}
                        >
                            <CalendarMonthIcon />{width>400 && "Datas"}

                        </Button>
                        <Button variant='contained' sx={[{


                            fontSize:fontSize,
                            color:"white",
                            backgroundColor:'#FF6600',
                            borderBottom:"5px solid orangered",
                            borderRight:"5px solid orangered",
                            borderRadius:"10px",

                            width:"20%",

                            margin:"1%",
                            textTransform: 'none'


                        },{'&:hover': {
                                backgroundColor:'#FF6600',
                                borderBottom:"2px solid orangered",
                                borderRight:"2px solid orangered",
                            }}]} onClick={()=>setModalOpen(true) }  size="large">
                            {loginButton}{400<width ? loginUser ? "user":"login":""}
                        </Button>
                        <UserDialog setUserPostObject={setUserPostObject} modalOpen={modalOpen} setModalOpen={setModalOpen} user={loginUser} setOnceSignUp={setOnceSignUp}/>
                        <UserDialog setUserPostObject={setUserPostObject} modalOpen={signUpBool} setModalOpen={setSignUpBool} user={loginUser} setOnceSignUp={setOnceSignUp}/>

                    </Box>
                </AppBar>
            </Box>


    )
}



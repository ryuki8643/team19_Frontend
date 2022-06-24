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
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import {SearchButton} from "../SearchPage/SearchButton";
import {SelectorDrawer} from "./SelectorDrawer";
import EditIcon from '@mui/icons-material/Edit';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

type SelectorPropsType={
    SearchData:exampleSearchDataType

}

export const Selector = (SelectorProps:SelectorPropsType) => {

    const [loginUser, setLoginUser] = React.useState<firebase.User|null>(null)

    const [modalOpen,setModalOpen] =useState(false)

    const [signUpBool,setSignUpBool]=useState(false)
    const [drawerOpen,setDrawerOpen]=useState(false)
    const [loginButton,setLoginButton]=useState(<LockOpenIcon/>)


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

    return (

            <Box sx={{ flexGrow: 1 ,marginTop:1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={()=>setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SelectorDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} navigate={navigate} SearchData={SelectorProps.SearchData} setModalOpen={setModalOpen} loginUser={loginUser}/>
                        <Button   sx={[ {
                            color:'#FFFFFF',
                            height: '70%',
                            fontSize:'160%'},   {
                            '&:hover': {
                                color: '#EEEEEE',
                                backgroundColor: '#3085D2',
                            }}]}
                              onClick={()=>navigate("/")}>
                            IT Life App
                        </Button>

                        <SearchButton
                            navigate={navigate}
                            SearchData={SelectorProps.SearchData}

                        />
                        <Button   sx={ButtonStyle}
                                  size="large"
                                  onClick={()=>navigate("/Edit")}
                                  startIcon={<EditIcon />}
                                  variant={"contained"}
                        >

                        </Button>
                        <Button   sx={ButtonStyle}
                                  size="large"
                                  onClick={()=>navigate("/Compare")}
                                  startIcon={<CompareArrowsIcon />}
                                  variant={"contained"}
                        >

                        </Button>
                        <Button variant='contained' sx={ButtonStyle} onClick={()=>setModalOpen(true) } startIcon={loginButton} size="large"> </Button>
                        <UserDialog modalOpen={modalOpen} setModalOpen={setModalOpen} user={loginUser}/>
                        <UserDialog modalOpen={signUpBool} setModalOpen={setSignUpBool} user={loginUser}/>
                    </Toolbar>
                </AppBar>
            </Box>


    )
}



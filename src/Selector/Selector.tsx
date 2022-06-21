import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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

const Selector: React.FC = () => {

    const [loginUser, setLoginUser] = React.useState<firebase.User|null>(null)

    const [modalOpen,setModalOpen] =useState(false)

    const [signUpBool,setSignUpBool]=useState(false)


    useEffect(() => {
        onAuthStateChanged(authExample, (currentUser ) => {
            setLoginUser(currentUser as firebase.User|null);
        });
    }, []);
    return (

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            IT Life App
                        </Typography>
                        <Link to="/" className="selectorLink">Home</Link>
                        <Link to="/Edit" className="selectorLink"  >Edit</Link>
                        <Button variant='contained' sx={ButtonStyle} onClick={()=>setModalOpen(true)}>{loginUser ? "User Info":"Login"}</Button>
                        <UserDialog modalOpen={modalOpen} setModalOpen={setModalOpen} user={loginUser}/>
                        <UserDialog modalOpen={signUpBool} setModalOpen={setSignUpBool} user={loginUser}/>
                    </Toolbar>
                </AppBar>
            </Box>


    )
}

export default Selector

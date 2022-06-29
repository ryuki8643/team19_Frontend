import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import UserPage from "../SignUpPage/UserPageComponent/UserPage";
import firebase from "firebase/compat";
import {signOut} from "firebase/auth";
import {authExample} from "../SignUpPage/firebaseConfig";
import LoginIcon from '@mui/icons-material/Login';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {exampleUserDataType} from "../ExampleData/ExampleDataType";





export const ButtonStyle=[{


    fontSize:'80%',
    color:"white",
    backgroundColor:'#FF6600',
    borderBottom:"5px solid orangered",
    borderRight:"5px solid orangered",

    width:"20%",

    margin:"1%",
    textTransform: 'none'


},{'&:hover': {
        borderBottom:"2px solid orangered",
        borderRight:"2px solid orangered",
}}]

type UserDialogPropsType={
    modalOpen:boolean
    setModalOpen(open:boolean):void
    user:firebase.User|null
    setUserPostObject(userObject:null|exampleUserDataType):void
}

export function UserDialog(UserDialogProps:UserDialogPropsType) {

    const [scroll, setScroll] = React.useState("paper" as "paper" | "body" | undefined);
    const [signUpBool,setSignUpBool]=React.useState(true)
    const logout = async () => {
        await signOut(authExample);

    }

    const handleClickOpen = (scrollType:"paper" | "body" | undefined) => () => {
        UserDialogProps.setModalOpen(true);
        setScroll(scrollType );
    };

    const handleClose = () => {
        UserDialogProps.setModalOpen(false);
    };
    const componentRef = React.createRef<HTMLElement>();
    const returnTop = () => {
        if (componentRef!==null){componentRef.current?.scrollTo(0,0)};
    };
    const returnBottom = () => {
        if (componentRef!==null){componentRef.current?.scrollTo(0,100000)};
    };
    const returnMiddle = () => {
        if (componentRef!==null){componentRef.current?.scrollTo(0,7000)};
    };




    return (
        <div>

            <Dialog

                open={UserDialogProps.modalOpen}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{borderRadius:"10px"}}
            >

                <Box sx={{marginX:3,marginY:2,fontSize:"200%"}} >{!UserDialogProps.user ? signUpBool ? <><LockOpenIcon />ログイン</>: <><FiberNewIcon/>新規登録</>:<><AccountCircleIcon/>ユーザーページ</>}</Box>


                <DialogContent dividers={scroll === 'paper'} ref={componentRef}>
                    <UserPage signUpBool={signUpBool} user={UserDialogProps.user} setUserPostObject={UserDialogProps.setUserPostObject}/>
                </DialogContent>

                <DialogActions>
                    {UserDialogProps.user ? <Button  sx={[{


                        marginLeft:2,flexGrow:1,
                        color:"white",
                        backgroundColor:'#1976d2',
                        borderBottom:"5px solid #039be5",
                        borderRight:"5px solid #039be5",
                        borderRadius:"10px",




                        textTransform: 'none'


                    },{'&:hover': {
                            backgroundColor:'#1976d2',
                            borderBottom:"2px solid #039be5",
                            borderRight:"2px solid #039be5",
                        }}]} onClick={logout}>ログアウト</Button>:!signUpBool ?
                        <Button sx={[{


                            marginLeft:2,flexGrow:1,
                            color:"white",
                            backgroundColor:'#1976d2',
                            borderBottom:"5px solid #039be5",
                            borderRight:"5px solid #039be5",
                            borderRadius:"10px",




                            textTransform: 'none'


                        },{'&:hover': {
                                backgroundColor:'#1976d2',
                                borderBottom:"2px solid #039be5",
                                borderRight:"2px solid #039be5",
                            }}]} onClick={() => setSignUpBool(true)}>ログイン</Button>
                        :<Button sx={[{


                            marginLeft:2,flexGrow:1,
                            color:"white",
                            backgroundColor:'#1976d2',
                            borderBottom:"5px solid #039be5",
                            borderRight:"5px solid #039be5",
                            borderRadius:"10px",




                            textTransform: 'none'


                        },{'&:hover': {
                                backgroundColor:'#1976d2',
                                borderBottom:"2px solid #039be5",
                                borderRight:"2px solid #039be5",
                            }}]} onClick={() => setSignUpBool(false)}>新規登録</Button>
                    }

                    <Button onClick={handleClose} sx={[{


                        marginRight:2,
                        color:"white",
                        backgroundColor:'#1976d2',
                        borderBottom:"5px solid #039be5",
                        borderRight:"5px solid #039be5",
                        borderRadius:"10px",




                        textTransform: 'none'


                    },{'&:hover': {
                            backgroundColor:'#1976d2',
                            borderBottom:"2px solid #039be5",
                            borderRight:"2px solid #039be5",
                        }}]}>閉じる</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

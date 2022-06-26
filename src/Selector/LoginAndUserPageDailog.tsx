import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import UserPage from "../SignUpPage/UserPageComponent/UserPage";
import firebase from "firebase/compat";








export const ButtonStyle={


    fontSize:'160%',
    color:"white",
    backgroundColor:'#FF6600',



    margin:1


}

type UserDialogPropsType={
    modalOpen:boolean
    setModalOpen(open:boolean):void
    user:firebase.User|null
}

export function UserDialog(UserDialogProps:UserDialogPropsType) {

    const [scroll, setScroll] = React.useState("paper" as "paper" | "body" | undefined);
    const [signUpBool,setSignUpBool]=React.useState(true)


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
            >

                <Typography variant='h4'>&nbsp;{!UserDialogProps.user ? signUpBool ? "ログイン": "新規登録":"ユーザー情報"}</Typography>


                <DialogContent dividers={scroll === 'paper'} ref={componentRef}>
                    <UserPage signUpBool={signUpBool} user={UserDialogProps.user}/>
                </DialogContent>

                <DialogActions>
                    {UserDialogProps.user ? "":!signUpBool ?
                        <Button onClick={() => setSignUpBool(true)}>サインイン</Button>
                        :<Button onClick={() => setSignUpBool(false)}>サインアップ</Button>
                    }

                    <Button onClick={handleClose}>閉じる</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}

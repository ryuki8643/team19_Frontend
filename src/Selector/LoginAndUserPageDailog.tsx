import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';







export const ButtonStyle={

    height: '70%',
    color:"white",
    backgroundColor:'#FF6600',
    fontSize:'160%',
    fontWeight:'bolder'


}

type UserDialogPropsType={
    modalOpen:boolean
    setModalOpen(open:boolean):void
}

export function UserDialog(UserDialogProps:UserDialogPropsType) {

    const [scroll, setScroll] = React.useState("paper" as "paper" | "body" | undefined);

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
                <Typography variant='h4'>&nbsp;SDGs Map Options</Typography>
                <Typography variant='h6' sx={{marginLeft:2.5}}>Current Data</Typography>




                <DialogContent dividers={scroll === 'paper'} ref={componentRef}>
                    <Typography variant='h6' >Target</Typography>

                    <Typography variant='h6' >Unit</Typography>

                    <Typography variant='h6' >Select Years</Typography>


                    <Typography variant='h6' >Select Map Region</Typography>

                    <Typography id="modal-modal-description"  variant="h6">
                        Click SDGs target!
                    </Typography>
                    <Typography id="modal-modal-description"  variant="h6">
                        Map Change
                    </Typography>

                    <Typography variant='h6' >Source of data</Typography>
                    <Typography id="modal-modal-description" >

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={returnTop}>Top</Button>
                    <Button onClick={returnMiddle}>Middle</Button>
                    <Button onClick={returnBottom}>Bottom</Button>

                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

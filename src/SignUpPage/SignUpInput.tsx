import React from "react";
import {Input, TextField, Typography} from '@mui/material';

type SignUpInputType={
    contentTitle:string
    registerContent:string
    setRegisterContent(registerContent:string):void
    showType:string
}

export const SignUpInput=(SignUpInputProps:SignUpInputType)=>{
    return (
        <div>

            <TextField
                sx={{marginTop:1}}
                label={SignUpInputProps.contentTitle}

                type={SignUpInputProps.showType}
                value={SignUpInputProps.registerContent}
                onChange={(e) => SignUpInputProps.setRegisterContent(e.target.value)}
            />
        </div>
    )
}

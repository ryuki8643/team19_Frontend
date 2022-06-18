import React from "react";
import {Input, Typography} from '@mui/material';

type SignUpInputType={
    contentTitle:string
    registerContent:string
    setRegisterContent(registerContent:string):void
    showType:string
}

export const SignUpInput=(SignUpInputProps:SignUpInputType)=>{
    return (
        <div>
            <Typography>{SignUpInputProps.contentTitle}</Typography>
            <Input
                name="email"
                type={SignUpInputProps.showType}
                value={SignUpInputProps.registerContent}
                onChange={(e) => SignUpInputProps.setRegisterContent(e.target.value)}
            />
        </div>
    )
}

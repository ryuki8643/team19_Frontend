import {NavigateFunction, NavigateOptions} from "react-router-dom";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";


type SelectorDrawerListItemPropsType={
    content:string
    navigate:NavigateFunction
    navigateTo:string
    navigateState:NavigateOptions
    icon:ReactJSXElement
}
export const SelectorDrawerListItem=(SelectorDrawerListItemProps:SelectorDrawerListItemPropsType)=>{
    return(
        <>
            <ListItem>
                <ListItemButton onClick={()=>SelectorDrawerListItemProps.navigate(SelectorDrawerListItemProps.navigateTo,SelectorDrawerListItemProps.navigateState)}>
                    <ListItemIcon>
                        {SelectorDrawerListItemProps.icon}
                    </ListItemIcon>
                    <ListItemText primary={SelectorDrawerListItemProps.content}/>
                </ListItemButton>
            </ListItem>
            <Divider/>
        </>
    )
}

import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import {NavigateFunction, NavigateOptions} from "react-router-dom";
import {SelectorDrawerListItem} from "./SelectorDrawerListItem";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import firebase from "firebase/compat";


type SelectorDrawerPropsType={
    drawerOpen:boolean
    toggleDrawer(open: boolean): (event: (React.KeyboardEvent | React.MouseEvent)) => void
    navigate:NavigateFunction
    SearchData:exampleSearchDataType
    setModalOpen(modalOpen:boolean):void
    loginUser:firebase.User|null
}
export const SelectorDrawer=(SelectorDrawerProps:SelectorDrawerPropsType)=>{
    return (
        <Drawer
            anchor={"left"}
            open={SelectorDrawerProps.drawerOpen}
            onClose={SelectorDrawerProps.toggleDrawer(false)}
        >
            <Box

                role="presentation"
                onClick={SelectorDrawerProps.toggleDrawer( false)}
                onKeyDown={SelectorDrawerProps.toggleDrawer( false)}
            >
                <List>
                    <SelectorDrawerListItem content={"ホーム"} navigate={SelectorDrawerProps.navigate} navigateTo={"/"} icon={<></>} navigateState={{}}/>
                    <SelectorDrawerListItem content={"検索"} navigate={SelectorDrawerProps.navigate} navigateTo={"/Search"} icon={<></>} navigateState={{state:{searchInput:"",SearchData:SelectorDrawerProps.SearchData}} as NavigateOptions}/>
                    <SelectorDrawerListItem content={"編集"} navigate={SelectorDrawerProps.navigate} navigateTo={"/Edit"} icon={<></>} navigateState={{}}/>
                    <SelectorDrawerListItem content={"比較"} navigate={SelectorDrawerProps.navigate} navigateTo={"/Compare"} icon={<></>} navigateState={{}}/>
                    <ListItem>
                        <ListItemButton onClick={()=>SelectorDrawerProps.setModalOpen(true)}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary={SelectorDrawerProps.loginUser ? "ログアウト":"ログイン"}/>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                </List>

            </Box>

        </Drawer>
    )
}

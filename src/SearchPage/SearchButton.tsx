import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {TextField,Box} from "@mui/material";
import {NavigateFunction} from "react-router-dom";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import SearchIcon from '@mui/icons-material/Search';
import {ButtonStyle} from "../Selector/LoginAndUserPageDailog";


type SearchButtonPropsType={
    navigate:NavigateFunction
    SearchData:exampleSearchDataType

}

export const SearchButton=(SearchButtonProps:SearchButtonPropsType)=> {

    const [searchInput,setSearchInput]=useState("" as string)
    const [EnterKey,setEnterKey]=useState(false)

    useEffect(()=>{
        if (EnterKey){
            SearchButtonProps.navigate("/Search",
                {
                    state:
                        {
                            searchInput:searchInput,
                            SearchData:SearchButtonProps.SearchData,


                        }})
            setEnterKey(false)
        }
    },[EnterKey])
    return (
        <Box >
        {/*<TextField sx={{*/}

        {/*    backgroundColor:"white"*/}
        {/*}}*/}
        {/*           onChange={(event)=>setSearchInput(event.target?.value)}*/}
        {/*           onKeyPress={event => {*/}
        {/*               if (event.key==="Enter"){*/}
        {/*                   setEnterKey(true)*/}
        {/*               }*/}

        {/*           }}*/}
        {/*></TextField>*/}

        <Button variant="contained" size="large" sx={ButtonStyle}
                onClick={()=>SearchButtonProps.navigate("/Search",
                    {
                        state:
                            {
                                searchInput:searchInput,
                                SearchData:SearchButtonProps.SearchData,


                            }})} startIcon={<SearchIcon/>}></Button>

    </Box>)
}

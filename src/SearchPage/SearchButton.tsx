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


        <Button variant="contained" size="large" sx={ButtonStyle}
                onClick={()=>SearchButtonProps.navigate("/Search",
                    {
                        state:
                            {
                                searchInput:searchInput,
                                SearchData:SearchButtonProps.SearchData,


                            }})}><SearchIcon/>Search</Button>

    )
}

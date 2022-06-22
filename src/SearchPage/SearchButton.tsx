import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {NavigateFunction} from "react-router-dom";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";


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
        <>
        <TextField sx={{
            flexGrow:1,
            backgroundColor:"white"
        }}
                   onChange={(event)=>setSearchInput(event.target?.value)}
                   onKeyPress={event => {
                       if (event.key==="Enter"){
                           setEnterKey(true)
                       }

                   }}
        ></TextField>

        <Button variant="contained" size="large"
                onClick={()=>SearchButtonProps.navigate("/Search",
                    {
                        state:
                            {
                                searchInput:searchInput,
                                SearchData:SearchButtonProps.SearchData,


                            }})}>検索</Button>

    </>)
}

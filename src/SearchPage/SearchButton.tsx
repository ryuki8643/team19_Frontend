import Button from "@mui/material/Button";
import React, {useState} from "react";
import {TextField} from "@mui/material";
import {NavigateFunction} from "react-router-dom";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";


type SearchButtonPropsType={
    navigate:NavigateFunction
    SearchData:exampleSearchDataType

}

export const SearchButton=(SearchButtonProps:SearchButtonPropsType)=> {

    const [searchInput,setSearchInput]=useState("" as string)
    return (
        <>
        <TextField sx={{
            flexGrow:1,
            backgroundColor:"white"
        }} onChange={(event)=>setSearchInput(event.target?.value)}></TextField>

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

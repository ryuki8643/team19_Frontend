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
    fontSize:string
    width:number

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


        <Button variant="contained" size="large" sx={[{


            fontSize:SearchButtonProps.fontSize,
            color:"white",
            backgroundColor:'#FF6600',
            borderBottom:"5px solid orangered",
            borderRight:"5px solid orangered",
            borderRadius:"10px",

            width:"20%",

            margin:"1%",
            textTransform: 'none'


        },{'&:hover': {
                backgroundColor:'#FF6600',
                borderBottom:"2px solid orangered",
                borderRight:"2px solid orangered",
            }}]}
                onClick={()=>SearchButtonProps.navigate("/Search",
                    {
                        state:
                            {
                                searchInput:searchInput,
                                SearchData:SearchButtonProps.SearchData,


                            }})}><SearchIcon sx={{margin:-0.5}}/>{SearchButtonProps.width>400 && "Search"}</Button>

    )
}

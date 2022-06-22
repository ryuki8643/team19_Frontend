import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {Box, CardContent, Container, Grid, Paper, TextField} from "@mui/material";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import {useEffect, useState} from "react";


export const SearchPage=()=>{
    const locationState=useLocation().state as {searchInput:string,SearchData:exampleSearchDataType}
    const autoCompleteObject={} as {[key:string]:{user:string,text:string}}
    Object.keys(locationState.SearchData).forEach((value)=>{
        autoCompleteObject[value]={user:value,text:locationState.SearchData[value].company+" "+locationState.SearchData[value].age+"歳 "+locationState.SearchData[value].role}

    })

    const [searchInputCustom,setSearchInputCustom]=useState(locationState.searchInput)


    const navigate=useNavigate()
    const filteredData=Object.values(autoCompleteObject).filter((value)=>{
        return value.text.toLowerCase().indexOf(searchInputCustom.toLowerCase()) > -1


    })
    const goToHomeWithUser=(user:string)=>{

        navigate("/",{
            state:{
                user:user,
                getFromSearch:true
            }

        })

    }
    useEffect(()=>{
        setSearchInputCustom(locationState.searchInput)
    },[locationState.searchInput])

    console.log(filteredData,autoCompleteObject)
    return (
        <Container maxWidth="xl" sx={{marginTop:2}}>


            <Grid container spacing={2}>
                <Grid item xs={12} key={"a"}>
                    <TextField>企業</TextField>
                    <TextField></TextField>
                    <TextField　>企業</TextField>

                </Grid>
            {Object.values(filteredData).map((value)=>{
                return (
                    <Grid item xs={4} key={locationState.SearchData[value.user].company+locationState.SearchData[value.user].role+locationState.SearchData[value.user].age}>
                        <Paper elevation={4} onClick={()=>goToHomeWithUser(value.user)}>
                            <Box>企業：{locationState.SearchData[value.user].company}</Box>
                            <Box>役職：{locationState.SearchData[value.user].role}</Box>
                            <Box>年齢；{locationState.SearchData[value.user].age}</Box>
                            {Object.values(locationState.SearchData[value.user].weekList).map((value)=>{
                                return (

                                        <Box key={value.day}>
                                            {value.day}の週:{value.dayCount}日分のデータ
                                        </Box>
                                    )
                            })}
                        </Paper>
                    </Grid>
                )
            })}
            </Grid>
        </Container>)
}

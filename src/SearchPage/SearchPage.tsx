import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import {Box, CardContent, Container, Grid, Paper, TextField} from "@mui/material";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import {useEffect, useState} from "react";


export const SearchPage=()=>{
    const locationState=useLocation().state as {searchInput:string,SearchData:exampleSearchDataType}
    const autoCompleteObject={} as {[key:number]:{user:string,text:string,company:string,age:number,role:string}}
    locationState.SearchData["UserData"].forEach((value,index)=>{
        console.log(value)
        if (value) {
            autoCompleteObject[index] = {
                    user: value.UserId,
                    text: value.company + " " + value.age + "歳 " + value.role,
                    company: value.company,
                    age: value.age,
                    role: value.role

            }
        }
    })
    const [companyInput,setCompanyInput]=useState("")
    const [roleInput,setRoleInput]=useState("")
    const [ageDownInput,setAgeInput]=useState("")
    const [ageUpInput,setUpAgeInput]=useState("")

    const [searchInputCustom,setSearchInputCustom]=useState(locationState.searchInput)


    const navigate=useNavigate()
    const filteredData=Object.values(autoCompleteObject).filter((value,index)=>{
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
                        <Paper>

                            <TextField sx={{width:"25%",margin:"2%"}} label={"企業"}>企業</TextField>
                            <TextField sx={{width:"25%",margin:"2%"}}　label={"役職"}>役職</TextField>
                            <TextField　type={"number"} sx={{width:"17%",margin:"2%"}}　label={"年齢下限"}>年齢</TextField>
                            <TextField　type={"number"} sx={{width:"17%",margin:"2%"}}label={"年齢上限"}>年齢</TextField>
                    </Paper>
                    </Grid>

            {(filteredData).map((value,index)=>{
                console.log(value,index);
                return (
                    <Grid item xs={4} key={value.company+locationState.SearchData["UserData"][index].role+value.age}>
                        <Paper elevation={4} onClick={()=>goToHomeWithUser(value.user)}>
                            <Box>企業：{value.company}</Box>
                            <Box>役職：{value.role}</Box>
                            <Box>年齢；{value.age}</Box>
                            {Object.values(locationState.SearchData["UserData"][index].weekList).map((value)=>{
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

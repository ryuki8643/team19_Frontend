import { useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Container, Grid, Paper, TextField} from "@mui/material";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import {useEffect, useState} from "react";


export const SearchPage=()=>{
    const locationState=useLocation().state as {searchInput:string,SearchData:exampleSearchDataType}
    const autoCompleteObject={} as {[key:number]:{user:string,text:string,company:string,age:number,role:string}}
    locationState.SearchData["userData"].forEach((value,index)=>{

        if (value) {
            autoCompleteObject[index] = {
                    user: value.userId,
                    text: value.company + " " + value.age + "歳 " + value.role,
                    company: value.company,
                    age: value.age,
                    role: value.role

            }
        }
    })
    const [companyInput,setCompanyInput]=useState("")
    const [roleInput,setRoleInput]=useState("")
    const [ageDownInput,setDownAgeInput]=useState(0)
    const [ageUpInput,setUpAgeInput]=useState(10000)
    const [customSearch,setCustomSearch]=useState(false)
    const [EnterKey,setEnterKey]=useState(false)
    const [searchInputCustom,setSearchInputCustom]=useState(locationState.searchInput)


    const navigate=useNavigate()
    const [filteredData,setFilteredData]=useState(Object.values(autoCompleteObject).filter((value,index)=>{
        return value.text.toLowerCase().indexOf(searchInputCustom.toLowerCase()) > -1


    }) )
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

    useEffect(()=>{
        if(customSearch){
            setFilteredData(Object.values(autoCompleteObject).filter((value,index)=>{

                return ((value.company.toLowerCase().indexOf(companyInput) > -1) &&
                    (value.role.toLowerCase().indexOf(roleInput)> -1) &&
                    (value.age > ageDownInput) && (value.age < ageUpInput)

                )


            }) )
        }
        setCustomSearch(false)
    },[customSearch])
    useEffect(()=>{
        if (EnterKey){
            setCustomSearch(true)
            setEnterKey(false)
        }
    },[EnterKey])
    useEffect(()=>{
        if(ageUpInput===0){
            setUpAgeInput(10000)
        }
    },[ageUpInput])


    return (
        <Container maxWidth="xl" sx={{marginTop:2}}>


            <Grid container spacing={2}>

                    <Grid item xs={12} key={"a"}>
                        <Paper>

                            <Box>

                                <TextField sx={{width:"25%",margin:"2%"}} label={"企業"} onChange={(event)=>setCompanyInput(event.target.value)} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>企業</TextField>
                                <TextField sx={{width:"25%",margin:"2%"}}　label={"役職"} onChange={(event)=>setRoleInput(event.target.value)} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>役職</TextField>
                                <TextField　type={"number"} sx={{width:"17%",margin:"2%"}}　label={"年齢下限"} onChange={(event)=>setDownAgeInput(Number(event.target.value))} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>年齢</TextField>
                                <TextField　type={"number"} sx={{width:"17%",margin:"2%"}}label={"年齢上限"} onChange={(event)=>setUpAgeInput(Number(event.target.value))} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>年齢</TextField>
                            </Box>
                            <Box　sx={{display:"flex"}}>
                                <Button sx={{width:"25%",margin:"2%",flexGrow:1}} variant={"contained"} onClick={()=>setCustomSearch(true)}>詳細検索</Button>

                            </Box>
                        </Paper>
                    </Grid>

            {(filteredData).map((value,index)=>{

                return (
                    <Grid item xs={4} key={value.company+locationState.SearchData["userData"][index].role+value.age}>
                        <Paper elevation={4} onClick={()=>goToHomeWithUser(value.user)}>
                            <Box>企業：{value.company}</Box>
                            <Box>役職：{value.role}</Box>
                            <Box>年齢；{value.age}</Box>
                            {Object.values(locationState.SearchData["userData"][index].weekList).map((value)=>{
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

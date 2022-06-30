import { useLocation, useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Select,
    MenuItem,
    makeStyles,
    Theme,
    createStyles
} from "@mui/material";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import {useEffect, useState} from "react";
import {useWindowSize} from "./windowSize";
import {DrawPaint} from "./Canvas";


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
    const [xs,setXs]=useState(4)
    const [fontSize,setFontSize]=useState("80%")
    const [draw,setDraw]=useState(false)
    const navigate=useNavigate()
    const [filteredData,setFilteredData]=useState(Object.values(autoCompleteObject).filter((value,index)=>{
        return value.text.toLowerCase().indexOf(searchInputCustom.toLowerCase()) > -1


    }) )
    const goToHomeWithUser=(user:string,role:string)=>{
        const studentBool=role==="学生" ? true : false
        navigate("/",{
            state:{
                user:user,
                getFromSearch:true,
                student:studentBool,


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
    const width=useWindowSize()
    useEffect(()=>{
        if(width>700){
            setFontSize("120%")
            setXs(4)
        } else {
            setFontSize("80%")
            setXs(6)
        }

    },[width])

    useEffect(()=>{
        if(companyInput==="おえかき"){
            setDraw(true)
        } else {
            setDraw(false)
        }
    },[companyInput])



    return (
        <Container maxWidth="xl" sx={{marginTop:2}}>


            <Grid container spacing={2}>

                    <Grid item xs={12} key={"a"} sx={{}}>
                        <Paper elevation={5} sx={{borderRadius:"10px"}}>

                            <Box>

                                <TextField sx={{width:"25%",margin:"2%",borderRadius:"10px"}} label={"企業"} InputProps={{ style: { fontSize: fontSize } }}
                                           InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(event)=>setCompanyInput(event.target.value)} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>企業</TextField>
                                <TextField sx={{width:"25%",margin:"2%",borderRadius:"10px"}}　label={"役職"} InputProps={{ style: { fontSize: fontSize } }}
                                           InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(event)=>setRoleInput(event.target.value)} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>役職</TextField>
                                <TextField　type={"number"} sx={{width:"17%",margin:"2%",borderRadius:"10px"}} InputProps={{ style: { fontSize: fontSize } }}
                                           InputLabelProps={{ style: { fontSize: fontSize } }} label={"年齢下限"} onChange={(event)=>setDownAgeInput(Number(event.target.value))} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>年齢</TextField>
                                <TextField　type={"number"} sx={{width:"17%",margin:"2%",borderRadius:"10px"}} InputProps={{ style: { fontSize: fontSize } }}
                                           InputLabelProps={{ style: { fontSize: fontSize } }} label={"年齢上限"} onChange={(event)=>setUpAgeInput(Number(event.target.value))} onKeyPress={event => {
                                    if (event.key==="Enter"){
                                        setEnterKey(true)
                                    }

                                }}>年齢</TextField>
                            </Box>
                            <Box　sx={{display:"flex",flexGrow:1}}>
                                <Button sx={[{


                                    fontSize:fontSize,
                                    color:"white",
                                    backgroundColor:'#FF6600',
                                    borderBottom:"5px solid orangered",
                                    borderRight:"5px solid orangered",
                                    borderRadius:"10px",
                                    flexGrow:1,


                                    margin:"2%",



                                },{'&:hover': {
                                        backgroundColor:'#FF6600',
                                        borderBottom:"2px solid orangered",
                                        borderRight:"2px solid orangered",
                                    }}]} variant={"contained"} onClick={()=>setCustomSearch(true)}>詳細検索</Button>

                            </Box>
                        </Paper>
                    </Grid>

                {draw ? <Grid item xs={12}><DrawPaint width={800} height={300}/></Grid> :(filteredData).map((value,index)=>{

                return (
                    <Grid item xs={xs} key={value.company+locationState.SearchData["userData"][index].role+value.age}>
                        <Paper elevation={5} onClick={()=>goToHomeWithUser(value.user,value.role)}
                               sx={{borderRadius:"10px", }} >
                            <Box sx={[{borderRadius:"10px",borderBottom:"5px solid orangered",borderRight:"5px solid orangered",height:"300px"},{"&:hover":{backgroundColor:"#EEEEEE",borderBottom:"2px solid orangered",borderRight:"2px solid orangered"}}]}>
                                <pre></pre>
                                <Box sx={{margin:1.3}}>企業：{value.company}</Box>
                                <Box sx={{margin:1.3}}>役職：{value.role}</Box>
                                <Box sx={{margin:1.3}}>年齢；{value.age}</Box>
                                <pre></pre>
                            <Select
                                multiple
                                native
                                sx={{flexGrow:1,width:"100%",height:"50%",borderRadius:"10px",backgroundColor:"rgba(0,0,0,0)",marginBottom:-4,display: "inline-block"}}
                                >
                            {Object.values(locationState.SearchData["userData"][index].weekData).map((value)=>{
                                return (

                                        <option value={value.date} key={value.date}>
                                            {value.date}の週:{value.dateCount}日分
                                        </option>
                                    )
                            })}
                            </Select>
                                <pre ></pre>
                            </Box>
                        </Paper>
                    </Grid>
                )
            })}
            </Grid>
        </Container>)
}

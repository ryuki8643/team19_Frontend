import React, {useEffect, useState} from 'react';
import FullCalendarApp from "./fullCarendar/fullCalendar";

import SelectWeekDataBox from "./selectWeekDataBox/SelectWeekDataBox";
import SelectWeekDataBox2 from "./selectWeekDataBox/SelectWeekDataBox2";

import {axiosDataExchangeType, DataExchangeExample} from "../DataExchange/DataExchangeExample";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import Grid from '@mui/material/Grid';
import {Box, Container, Fab, Paper, Typography} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {useLocation} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import {exampleSearchData} from "../ExampleData/ExampleData";


export type WeekPageFrontPageType={
    axiosSearchData:exampleSearchDataType
    axiosWeekDataExchange:axiosDataExchangeType

}

const WeekPageFrontPage = (WeekPageFrontPageProps:WeekPageFrontPageType) => {

    const [UserId,SetUserId]=useState({"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.role!=="学生"
        })}.userData[0].userId)
    const [weekShowStart,SetWeekShowStart]=useState({"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.role!=="学生"
        })}.userData[0].weekList[0].day)
    const [compareButtonDisabled,setCompareButtonDisabled]=useState(false)
    const [compareBool,setCompareBool]=useState(true)
    const [compareUserId,SetCompareUserId]=useState({"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.role==="学生"
        })}.userData[0].userId)
    const [compareWeekShowStart,SetCompareWeekShowStart]=useState({"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.role==="学生"
        })}.userData[0].weekList[0].day)

    const [weekShowData,setWeekShowData]=useState(DataExchangeExample[UserId][weekShowStart])
    const [compareWeekShowData,setCompareWeekShowData]=useState(DataExchangeExample[compareUserId][compareWeekShowStart])
    const [resultValue,setResultValue]=useState(0)

    useEffect(()=>{
        WeekPageFrontPageProps.axiosWeekDataExchange(setWeekShowData,UserId,weekShowStart,)
    },[UserId,weekShowStart])
    useEffect(()=>{
        WeekPageFrontPageProps.axiosWeekDataExchange(setCompareWeekShowData,compareUserId,compareWeekShowStart)
    },[compareWeekShowData,compareWeekShowStart])

    const location=useLocation()

    useEffect(()=>{
        if(location.state){

            const getSearchState=location.state as {user:string,getFromSearch:boolean,student:boolean}

            if (getSearchState.getFromSearch) {
                SetUserId(getSearchState.user)
                setCompareButtonDisabled(false)
                setCompareBool(false)

            }
        }
    },[location])


    const searchTreeExampleArray={} as {[key:string]:string[]}

    WeekPageFrontPageProps.axiosSearchData["userData"].forEach(
        function(item){

            (item["weekList"]).forEach(
                function(itemChild){
                    if (searchTreeExampleArray[item.userId]){
                        searchTreeExampleArray[item.userId].push(itemChild.day)
                    } else{
                        searchTreeExampleArray[item.userId]=[itemChild.day]
                    }
                }
            )
        }
    )




    return (
        <Container maxWidth="xl" sx={{marginTop:4}}>

            <Paper elevation={5} sx={{borderRadius:"10px"}}>
                <pre></pre>
                <Typography variant={"h6"} sx={{marginLeft:2,display:"flex"}}><Box sx={{borderRadius:"50%",height:"20px",width:"20px",backgroundColor:"#1960d2",marginTop:"auto",marginBottom:"auto",marginRight:1}}></Box>社会ペンギン</Typography>


                <Grid container spacing={2} >
                <Grid item xs={6}>
                    <SelectWeekDataBox
                        UserId={UserId}
                        SetUserId={SetUserId}
                        SearchData={WeekPageFrontPageProps.axiosSearchData}

                    />
                </Grid>
                <Grid item xs={6}>
                    <SelectWeekDataBox2 UserId={UserId} SetWeekShowStart={SetWeekShowStart} weekShowStart={weekShowStart} searchTree={searchTreeExampleArray}/>
                </Grid>
            </Grid>
            </Paper>




            <FullCalendarApp
                setResultValue={setResultValue}
                compareButtonDisabled={compareButtonDisabled}
                setCompareButtonDisabled={setCompareButtonDisabled}
                weekShowData={weekShowData}
                compareBool={compareBool}
                compareWeekShowData={compareWeekShowData}
                weekShowStart={weekShowStart}
                SetWeekShowStart={SetWeekShowStart}
                userId={UserId}
                weekDataExchange={WeekPageFrontPageProps.axiosWeekDataExchange}
            />

        </Container>
    );
}

export default WeekPageFrontPage;

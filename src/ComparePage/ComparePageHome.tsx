import {Box, Button, Container, Fab, Paper, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Grid from "@mui/material/Grid";
import SelectWeekDataBox from "../weekDataShowPage/selectWeekDataBox/SelectWeekDataBox";
import SelectWeekDataBox2 from "../weekDataShowPage/selectWeekDataBox/SelectWeekDataBox2";
import AddIcon from "@mui/icons-material/Add";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import FullCalendarApp from "../weekDataShowPage/fullCarendar/fullCalendar";
import {WeekPageFrontPageType} from "../weekDataShowPage/WeekPageFront";
import CloseIcon from '@mui/icons-material/Close';
import { SearchDataAPI} from "../DataExchange/APIaxios";
import {DataExchangeExample} from "../DataExchange/DataExchangeExample";
import {useWindowSize} from "../SearchPage/windowSize";
import ConstructionTwoToneIcon from '@mui/icons-material/ConstructionTwoTone';

export const ComparePageHome=(WeekPageFrontPageProps:WeekPageFrontPageType)=>{
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
            return value.role!=="学生"
        })}.userData[0].weekList[0].day)
    const [weekShowData,setWeekShowData]=useState(DataExchangeExample[UserId][weekShowStart])
    const [compareWeekShowData,setCompareWeekShowData]=useState(DataExchangeExample[compareUserId][compareWeekShowStart])
    const [resultValue,setResultValue]=useState(0)
    const [fontSize,setFontSize]=useState("100%")
    const [fontSize1,setFontSize1]=useState("100%")
    const [fontSize2,setFontSize2]=useState("100%")
    const [margin,setMargin]=useState("22px")

    const width=useWindowSize()

    useEffect(()=>{
        WeekPageFrontPageProps.axiosWeekDataExchange(setWeekShowData,UserId,weekShowStart)
    },[UserId,weekShowStart])
    useEffect(()=>{
        WeekPageFrontPageProps.axiosWeekDataExchange(setCompareWeekShowData,compareUserId,compareWeekShowStart)
    },[compareWeekShowData,compareWeekShowStart])

    const location=useLocation()

    useEffect(()=>{
        if(location.state){

            const getSearchState=location.state as {user:string,getFromSearch:boolean,student:boolean}

            if (getSearchState.getFromSearch) {

                if(getSearchState.student){
                    SetCompareUserId(getSearchState.user)
                } else{
                SetUserId(getSearchState.user)}


            }
        }
    },[location])

    useEffect(()=>{
        if(width<600){setFontSize("120%")
            setFontSize1("100%")
            setFontSize2("50%")
            setMargin("36px")
        } else if (width<800){
            setFontSize("150%")
            setFontSize1("150%")
            setFontSize2("100%")
            setMargin("22px")
        } else {
            setFontSize2("150%")
            setFontSize("200%")
        }

    },[width])


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
        <Container maxWidth="xl" sx={{marginTop:2}} >


            <Grid container spacing={2}  >



                <Grid item xs={5}>

                    <Paper elevation={5} sx={{borderRadius:"10px",height:"220px"}}>
                        <pre></pre>
                        <Typography variant={"h6"} sx={{marginLeft:2,display:"flex",fontSize:"100%"}}><Box sx={{borderRadius:"50%",height:"20px",width:"20px",backgroundColor:"#1960d2",marginTop:"auto",marginBottom:"auto",marginRight:1}}></Box>社会ペンギン</Typography>
                    <SelectWeekDataBox
                        UserId={UserId}
                        SetUserId={SetUserId}
                        SearchData={{"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
                                return value.role!=="学生"
                            })}}

                    />

                    <SelectWeekDataBox2 UserId={UserId} SetWeekShowStart={SetWeekShowStart} weekShowStart={weekShowStart} searchTree={searchTreeExampleArray}/>
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper elevation={5} sx={{borderRadius:"10px",height:"220px"}}>

                        <Box sx={{fontSize:fontSize,fontWeight:1000,textAlign:"center"}}>比較</Box>
                        <Box sx={{textAlign:"center",marginY:margin,fontSize:fontSize1}}><ConstructionTwoToneIcon sx={{fontSize:"300%",textAlign:"center"}}/></Box>
                        <Paper elevation={5} sx={{margin:1,fontSize:fontSize,textAlign:"center",fontWeight:1000,}}>{resultValue}%</Paper>
                        <pre></pre>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                        <Paper elevation={5} sx={{borderRadius:"10px",height:"220px"}}>
                            <pre></pre>
                            <Typography variant={"h6"} sx={{marginLeft:2,display:"flex",fontSize:"100%"}}><Box sx={{borderRadius:"50%",height:"20px",width:"20px",backgroundColor:"#FF6600",marginTop:"auto",marginBottom:"auto",marginRight:1}}></Box>学生ワニ</Typography>
                        <SelectWeekDataBox
                            UserId={compareUserId}
                            SetUserId={SetCompareUserId}
                            SearchData={{"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
                                return value.role==="学生"
                            })}}

                        />



                        <SelectWeekDataBox2
                            UserId={compareUserId}
                            SetWeekShowStart={SetCompareWeekShowStart}
                            weekShowStart={compareWeekShowStart}
                            searchTree={searchTreeExampleArray}/>
                    </Paper>
                    </Grid>

                </Grid>





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


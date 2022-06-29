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
    const [UserId,SetUserId]=useState("1234")
    const [weekShowStart,SetWeekShowStart]=useState("2022/06/13")
    const [compareButtonDisabled,setCompareButtonDisabled]=useState(false)
    const [compareBool,setCompareBool]=useState(true)
    const [compareUserId,SetCompareUserId]=useState("4444")
    const [compareWeekShowStart,SetCompareWeekShowStart]=useState("2022/06/06")
    const [weekShowData,setWeekShowData]=useState(DataExchangeExample["1234"]["2022/06/13"])
    const [compareWeekShowData,setCompareWeekShowData]=useState(DataExchangeExample["4444"]["2022/06/06"])
    const [resultValue,setResultValue]=useState(0)
    const [fontSize,setFontSize]=useState("100%")
    const [fontSize1,setFontSize1]=useState("100%")
    const [fontSize2,setFontSize2]=useState("100%")
    const [margin,setMargin]=useState("22px")
    const [margin2,setMargin2]=useState("60px")
    const [margin3,setMargin3]=useState("20px")

    const width=useWindowSize()

    useEffect(()=>{
        const weekList=WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.userId===UserId
        })[0].weekData
        const weekBool=weekList.filter((value)=>{return value.date===weekShowStart})
        if(weekBool.length>0){
            WeekPageFrontPageProps.axiosWeekDataExchange(setWeekShowData,UserId,weekShowStart,)
        }
    },[UserId,weekShowStart])
    useEffect(()=>{
        const weekList=WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.userId===compareUserId
        })[0].weekData
        const weekBool=weekList.filter((value)=>{return value.date===compareWeekShowStart})
        if(weekBool.length>0){
            WeekPageFrontPageProps.axiosWeekDataExchange(setCompareWeekShowData,compareUserId,compareWeekShowStart)
        }
    },[compareUserId,compareWeekShowStart])

    useEffect(()=>{
        const getUser=WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.role.indexOf("学生")<0
        })[0].userId
        SetUserId(getUser)
        const getCompareUser=WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
            return value.role.indexOf("学生")>-1
        })[0].userId
        SetCompareUserId(getCompareUser)


    },[WeekPageFrontPageProps.axiosSearchData])

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
        if (width===0){

        }else if (width<445){
            setFontSize1("80%")
            setFontSize2("60%")
            setMargin("45px")
            setMargin2("-80px")
            setMargin3("80px")
        }else if(width<600){setFontSize("120%")
            setFontSize1("100%")
            setFontSize2("75%")
            setMargin("36px")
            setMargin2("-60px")
            setMargin3("50px")
        } else if (width<800){
            setFontSize("150%")
            setFontSize1("150%")
            setFontSize2("100%")
            setMargin("22px")
            setMargin2("-70px")
            setMargin3("20px")
        } else {
            setMargin("22px")
            setFontSize1("150%")
            setFontSize2("150%")
            setFontSize("200%")
            setMargin2("-90px")
            setMargin3("20px")
        }

    },[width])


    const searchTreeExampleArray={} as {[key:string]:string[]}

    WeekPageFrontPageProps.axiosSearchData["userData"].forEach(
        function(item){

            (item["weekData"]).forEach(
                function(itemChild){
                    if (searchTreeExampleArray[item.userId]){
                        searchTreeExampleArray[item.userId].push(itemChild.date)
                    } else{
                        searchTreeExampleArray[item.userId]=[itemChild.date]
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
                        <Typography variant={"h6"} sx={{marginLeft:2,display:"flex",fontSize:"100%"}}><Box sx={{borderRadius:"50%",height:"20px",width:"20px",backgroundColor:"#1960d2",marginTop:"auto",marginBottom:"auto",marginRight:1}}></Box>社会パンダ</Typography>
                    <SelectWeekDataBox
                        UserId={UserId}
                        SetUserId={SetUserId}
                        SearchData={{"userData":WeekPageFrontPageProps.axiosSearchData.userData.filter((value)=>{
                                return value.role.indexOf("学生")<0
                            })}}

                    />

                    <SelectWeekDataBox2 UserId={UserId} SetWeekShowStart={SetWeekShowStart} weekShowStart={weekShowStart} searchTree={searchTreeExampleArray}/>
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper elevation={5} sx={{borderRadius:"10px",height:"220px"}}>

                        <Box sx={{fontSize:fontSize,fontWeight:1000,textAlign:"center"}}>比較</Box>
                        <Box sx={{textAlign:"center",marginY:margin,fontSize:fontSize1}}><ConstructionTwoToneIcon sx={{fontSize:"300%",textAlign:"center"}}/></Box>
                        <Box sx={{position:"relative",marginTop:margin3,verticalAlign:"bottom"}}>
                        <Paper elevation={5} sx={{marginTop:margin3,zIndex:1,margin:1,fontSize:fontSize,textAlign:"center",fontWeight:1000,}}>{resultValue}%</Paper>
                        <Paper elevation={5} sx={{margin:1,position:"relative",top:margin2,fontSize:fontSize2,textAlign:"center",fontWeight:1000,}}> 一致率</Paper>
                    </Box><pre></pre>
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
                                return value.role.indexOf("学生")>-1
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

                userId={UserId}

            />

        </Container>
    );
}


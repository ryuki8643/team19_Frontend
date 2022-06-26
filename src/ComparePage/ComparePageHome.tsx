import {Box, Container, Fab, Paper, Typography} from "@mui/material";
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

    const location=useLocation()

    useEffect(()=>{
        if(location.state){

            const getSearchState=location.state as {user:string,getFromSearch:boolean}

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
        <Container maxWidth="xl" sx={{marginTop:2}} >


            <Grid container spacing={2}  >


                <Grid item xs={5}>

                    <Paper elevation={5} sx={{borderRadius:"10px"}}>
                        <Typography variant={"h6"} sx={{marginLeft:2}}>社会ペンギン</Typography>
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
                    <Paper elevation={5} sx={{borderRadius:"10px"}}>

                        <Box sx={{fontSize:"69px",fontWeight:900,textAlign:"center"}}>V</Box>
                        <Box sx={{fontSize:"69px",fontWeight:900,textAlign:"center"}}>S</Box>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                        <Paper elevation={5} sx={{borderRadius:"10px"}}>
                            <Typography variant={"h6"} sx={{marginLeft:2}}>学生ワニ</Typography>
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
                compareButtonDisabled={compareButtonDisabled}
                setCompareButtonDisabled={setCompareButtonDisabled}
                weekShowData={WeekPageFrontPageProps.axiosWeekDataExchange[UserId][weekShowStart]}
                compareBool={compareBool}
                compareWeekShowData={WeekPageFrontPageProps.axiosWeekDataExchange[compareUserId][compareWeekShowStart]}
                weekShowStart={weekShowStart}
                SetWeekShowStart={SetWeekShowStart}
                userId={UserId}
                weekDataExchange={WeekPageFrontPageProps.axiosWeekDataExchange}
            />

        </Container>
    );
}


import {Box, Container, Fab, Paper} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Grid from "@mui/material/Grid";
import SelectWeekDataBox from "../weekDataShowPage/selectWeekDataBox/SelectWeekDataBox";
import SelectWeekDataBox2 from "../weekDataShowPage/selectWeekDataBox/SelectWeekDataBox2";
import AddIcon from "@mui/icons-material/Add";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import FullCalendarApp from "../weekDataShowPage/fullCarendar/fullCalendar";
import {WeekPageFrontPageType} from "../weekDataShowPage/WeekPageFront";

export const ComparePageHome=(WeekPageFrontPageProps:WeekPageFrontPageType)=>{
    const [UserId,SetUserId]=useState("1234")
    const [weekShowStart,SetWeekShowStart]=useState("2022/06/13")
    const [compareButtonDisabled,setCompareButtonDisabled]=useState(false)
    const [compareBool,setCompareBool]=useState(true)
    const [compareUserId,SetCompareUserId]=useState("1234")
    const [compareWeekShowStart,SetCompareWeekShowStart]=useState("2022/06/13")

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

                <Grid item xs={6}>
                    <Paper elevation={5} sx={{borderRadius:"10px"}}>

                    <SelectWeekDataBox
                        UserId={UserId}
                        SetUserId={SetUserId}
                        SearchData={WeekPageFrontPageProps.axiosSearchData}

                    />

                    <SelectWeekDataBox2 UserId={UserId} SetWeekShowStart={SetWeekShowStart} weekShowStart={weekShowStart} searchTree={searchTreeExampleArray}/>
                    </Paper>
                </Grid>








                    <Grid item xs={6}>
                        <Paper elevation={5} sx={{borderRadius:"10px"}}>
                        <SelectWeekDataBox
                            UserId={compareUserId}
                            SetUserId={SetCompareUserId}
                            SearchData={WeekPageFrontPageProps.axiosSearchData}

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


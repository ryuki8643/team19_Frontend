import React, {useEffect, useState} from 'react';
import FullCalendarApp from "./fullCarendar/fullCalendar";

import SelectWeekDataBox from "./selectWeekDataBox/SelectWeekDataBox";
import SelectWeekDataBox2 from "./selectWeekDataBox/SelectWeekDataBox2";

import {axiosDataExchangeType} from "../DataExchange/DataExchangeExample";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import Grid from '@mui/material/Grid';
import {Container, Fab} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {useLocation} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';


type WeekPageFrontPageType={
    axiosSearchData:exampleSearchDataType
    axiosWeekDataExchange:axiosDataExchangeType

}

const WeekPageFrontPage = (WeekPageFrontPageProps:WeekPageFrontPageType) => {

    const [UserId,SetUserId]=useState("1234")
    const [weekShowStart,SetWeekShowStart]=useState("2022/06/13")
    const [compareButtonDisabled,setCompareButtonDisabled]=useState(false)
    const [compareBool,setCompareBool]=useState(false)
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
        <Container maxWidth="xl" sx={{marginTop:2}}>


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

            {!compareBool &&
                <Fab onClick={()=>{setCompareBool(true);setCompareButtonDisabled(true)}}
                            color={"primary"}>
                    <AddIcon/>

                </Fab>}
            {compareBool &&
                <IndeterminateCheckBoxIcon
                    onClick={()=>{setCompareBool(false);setCompareButtonDisabled(false)}}
                    color={"primary"}
                    sx={{zIndex:100,marginBottom:2}}
                >

                </IndeterminateCheckBoxIcon>}


            {compareBool &&
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <SelectWeekDataBox
                            UserId={compareUserId}
                            SetUserId={SetCompareUserId}
                            SearchData={WeekPageFrontPageProps.axiosSearchData}

                        />


                    </Grid>
                    <Grid item xs={6}>
                        <SelectWeekDataBox2
                            UserId={compareUserId}
                            SetWeekShowStart={SetCompareWeekShowStart}
                            weekShowStart={compareWeekShowStart}
                            searchTree={searchTreeExampleArray}/>
                    </Grid>
                </Grid>


            }


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

export default WeekPageFrontPage;

import React, {useState} from 'react';
import FullCalendarApp from "./fullCarendar/fullCalendar";

import SelectWeekDataBox from "./selectWeekDataBox/SelectWeekDataBox";
import SelectWeekDataBox2 from "./selectWeekDataBox/SelectWeekDataBox2";

import {axiosDataExchangeType} from "../DataExchange/DataExchangeExample";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';


type WeekPageFrontPageType={
    axiosSearchData:exampleSearchDataType
    axiosWeekDataExchange:axiosDataExchangeType
}

const WeekPageFrontPage = (WeekPageFrontPageProps:WeekPageFrontPageType) => {

    const [UserId,SetUserId]=useState("1234")
    const [weekShowStart,SetWeekShowStart]=useState("2022/06/13")

    const [compareBool,setCompareBool]=useState(false)
    const [compareUserId,SetCompareUserId]=useState("1234")
    const [compareWeekShowStart,SetCompareWeekShowStart]=useState("2022/06/13")

    const searchTreeExampleArray={} as {[key:string]:string[]}

    Object.entries(WeekPageFrontPageProps.axiosSearchData).forEach(
        function(item){

            Object.entries(item[1]["weekList"]).forEach(
                function(itemChild){
                    if (searchTreeExampleArray[item[0]]){
                        searchTreeExampleArray[item[0]].push(itemChild[1].day)
                    } else{
                        searchTreeExampleArray[item[0]]=[itemChild[1].day]
                    }
                }
            )
        }
    )


    return (
        <Container maxWidth="xl" sx={{marginTop:2}}>


            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <SelectWeekDataBox UserId={UserId} SetUserId={SetUserId} SearchData={WeekPageFrontPageProps.axiosSearchData}/>
                </Grid>
                <Grid item xs={6}>
                    <SelectWeekDataBox2 UserId={UserId} SetWeekShowStart={SetWeekShowStart} weekShowStart={weekShowStart} searchTree={searchTreeExampleArray}/>
                </Grid>
            </Grid>

            {!compareBool && <AddBoxIcon onClick={()=>setCompareBool(true)} color={"primary"}></AddBoxIcon>}
            {compareBool && <RemoveIcon onClick={()=>setCompareBool(false)} color={"primary"}></RemoveIcon>}


            {compareBool &&
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <SelectWeekDataBox UserId={compareUserId} SetUserId={SetCompareUserId} SearchData={WeekPageFrontPageProps.axiosSearchData}/>
                    </Grid>
                    <Grid item xs={6}>
                        <SelectWeekDataBox2 UserId={compareUserId} SetWeekShowStart={SetCompareWeekShowStart} weekShowStart={compareWeekShowStart} searchTree={searchTreeExampleArray}/>
                    </Grid>
                </Grid>


            }


            <FullCalendarApp
                weekShowData={WeekPageFrontPageProps.axiosWeekDataExchange[UserId][weekShowStart]}
                compareBool={compareBool}
                compareWeekShowData={WeekPageFrontPageProps.axiosWeekDataExchange[compareUserId][compareWeekShowStart]}
            />

        </Container>
    );
}

export default WeekPageFrontPage;

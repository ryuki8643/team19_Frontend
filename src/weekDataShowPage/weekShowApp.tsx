import React from "react";
import {exampleWeekData2} from "../ExampleData/ExampleData";
import DayDataShowComponent from "./dayDataShowComponent";
import {Box, Grid} from "@mui/material";
import TimelineComponent from "./TimelineComponent";


const WeekShowApp = () => {


    return (

        <Grid container spacing={-2} columns={12}>




                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Monday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Tuesday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Wednesday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Thursday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Friday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Saturday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["Sunday"]}
                />







        </Grid>
    )
}

export default WeekShowApp

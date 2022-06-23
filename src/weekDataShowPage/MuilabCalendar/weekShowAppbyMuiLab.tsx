import React from "react";
import {exampleWeekData2} from "../../ExampleData/ExampleData";
import DayDataShowComponent from "./dayDataShowComponent";
import {Box, Grid} from "@mui/material";



const WeekShowAppbyMuiLab = () => {


    return (

        <Grid container spacing={-2} columns={12}>




                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["monday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["tuesday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["wednesday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["thursday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["friday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["saturday"]}
                />
                <DayDataShowComponent
                    exampleDayData={exampleWeekData2["sunday"]}
                />







        </Grid>
    )
}

export default WeekShowAppbyMuiLab

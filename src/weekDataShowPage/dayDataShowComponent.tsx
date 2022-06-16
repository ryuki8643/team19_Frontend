import React from "react";

import {eventDataType, exampleDayDataShowType} from "../ExampleData/ExampleDataType";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TimelineComponent from "./TimelineComponent";


type dayDataShowType={
    exampleDayData:exampleDayDataShowType
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    margin:0,

    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DayDataShowComponent = (dayDataProps:dayDataShowType) => {

    return (
        <Grid xs={12/7}>
            {(() => {
                let items=[]
                let dataS = Object.values(dayDataProps.exampleDayData) as eventDataType[];
                for (let i = 0; i < dataS.length; i++) {

                    items.push(
                        <TimelineComponent
                            StartTime={dataS[i].eventStart}
                            EndTime={dataS[i].eventEnd}
                            Content={dataS[i].eventName}

                        />

                    );
                }
                return <>{items}</>;
            })()}

        </Grid>
    )
}

export default DayDataShowComponent

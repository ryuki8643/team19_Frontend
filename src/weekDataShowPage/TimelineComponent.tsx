import React from "react";
import {exampleSearchDataType,exampleWeekDataType} from "../ExampleData/ExampleDataType";
import {exampleDayDataShowType} from "../ExampleData/ExampleDataType";
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


type timelinePropsType={
    StartTime:String
    EndTime:String
    Content:String
}
const TimelineComponent = (timelineProps:timelinePropsType) => {

    return (
        <Timeline position="left" sx={{marginBottom:-3}}>
            <TimelineItem>
                <TimelineOppositeContent>
                    {timelineProps.Content}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent  color="text.secondary">{timelineProps.StartTime}</TimelineContent>

            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent >
                    {timelineProps.Content}End
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="text.secondary">{timelineProps.EndTime}</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default TimelineComponent

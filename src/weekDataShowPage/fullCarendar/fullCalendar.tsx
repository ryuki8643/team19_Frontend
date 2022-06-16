import FullCalendar, {EventSourceInput} from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useState,useEffect} from "react";
import {eventDataType, exampleDayDataShowType, exampleWeekDataType} from "../../ExampleData/ExampleDataType";
import TimelineComponent from "../MuilabCalendar/TimelineComponent";
import {MakeEventsArray} from "./makeEventsArray";
import {exampleWeekData1} from "../../ExampleData/ExampleData";
import {Button} from "@mui/material";

export type calendarEventsType={
    id:String,
    title:String,
    start:String,
    end:String,
    memo:String
}



function FullCalendarApp() {

    const [dayEvents,setDayEvents]=useState([{
        id:"0",
        title:"sample",
        start:"2022-06-17 10:00",
        end:"2022-06-18 11:10",
        memo:"sample event"

    }] as calendarEventsType[])

    const setEventsFunc=()=>{
        let getItems=MakeEventsArray(exampleWeekData1)
        console.log(getItems)
//        let getItems=[{        id:"sample",         title:"sample",         start:"2022-06-14 06:00",         end:"2022-06-16 11:10",         memo:"sample event"}]
        setDayEvents(dayEvents.concat(getItems))
    }
    useEffect(()=>{console.log(dayEvents,"結果")},[dayEvents])

    return (
        <>
            <Button onClick={()=>setEventsFunc()}>反映</Button>
            <FullCalendar
                firstDay={1}
                plugins={[timeGridPlugin]}
                locale="ja" // 日本語
                stickyHeaderDates={true}
                events={dayEvents as EventSourceInput}
                titleFormat={{year: '2-digit', month: 'short', day: '2-digit'}}
            />
        </>
    );
}

export default FullCalendarApp

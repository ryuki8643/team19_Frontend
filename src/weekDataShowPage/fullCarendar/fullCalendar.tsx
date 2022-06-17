import FullCalendar, {EventSourceInput} from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useEffect, useState} from "react";
import { exampleWeekDataType} from "../../ExampleData/ExampleDataType";

import {MakeEventsArray} from "./makeEventsArray";

import {Button} from "@mui/material";

export type calendarEventsType={
    id:string,
    title:string,
    start:string,
    end:string,
    memo:string
    color:string
}

type FullCalendarAppPropsType={
    weekShowData:exampleWeekDataType
    compareBool:boolean
    compareWeekShowData:exampleWeekDataType
}


function FullCalendarApp(FullCalendarAppProps:FullCalendarAppPropsType) {

    const [dayEvents,setDayEvents]=useState([] as calendarEventsType[])
    const [compareButtonDisabled,setCompareButtonDisabled]=useState(false)

    const setEventsFunc=()=>{
        let getItems=MakeEventsArray(FullCalendarAppProps.compareWeekShowData)

        getItems.forEach(
            function(item){

                item["color"]="red"
            }

        )
        setDayEvents(dayEvents.concat(getItems))
        setCompareButtonDisabled(true)
    }
    useEffect((()=>{
        let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)
        setDayEvents(getItems)
    }),[FullCalendarAppProps.weekShowData])

    useEffect((()=>{
        if(!FullCalendarAppProps.compareBool){
        let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)
        setDayEvents(getItems)}
    }),[FullCalendarAppProps.compareBool])



    return (
        <>
            {FullCalendarAppProps.compareBool && <Button onClick={()=>setEventsFunc()} disabled={compareButtonDisabled}>比較</Button>}
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

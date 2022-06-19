import FullCalendar, {createRef, EventClickArg, EventSourceInput, MountArg, RefObject} from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useEffect, useRef, useState} from "react";
import { exampleWeekDataType} from "../../ExampleData/ExampleDataType";
import MenuItem from '@mui/material/MenuItem';
import {MakeEventsArray} from "./makeEventsArray";
import Box from '@mui/material/Box';
import interactionPlugin from "@fullcalendar/interaction";
import Portal from '@mui/material/Portal';
import { SxProps } from '@mui/system';
import {Button, ClickAwayListener, Menu, Modal} from "@mui/material";
import {EventContentArg} from "@fullcalendar/core";
import zIndex from "@mui/material/styles/zIndex";
import {axiosDataExchangeType} from "../../DataExchange/DataExchangeExample";

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
    weekShowStart:string
    SetWeekShowStart(week:string):void
    userId:string
    weekDataExchange:axiosDataExchangeType
}


function FullCalendarApp(FullCalendarAppProps:FullCalendarAppPropsType) {

    const [dayEvents,setDayEvents]=useState([] as calendarEventsType[])
    const [compareButtonDisabled,setCompareButtonDisabled]=useState(false)
    const [open, setOpen] = React.useState(false);
    const [close,setClose] =useState(false)
    const [description,setDescription]=useState(<div></div> as JSX.Element)
    const [defaultDay,setDefaultDay]=useState("2022-06-13")
    const ref=useRef<FullCalendar>(null!);

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



    const handleClick = (info:EventClickArg) => {
        setOpen((prev) => !prev);
        const dialogText=
            <Box>
                <Box>{info.event._def.publicId.slice(0,10)}</Box>
                <Box>{info.el.innerText}</Box>
                <Box>説明</Box>
                <Box>{info.event.extendedProps.memo}</Box>
            </Box>
        setDescription(dialogText)
        console.log(info)

    };

    const handleClickAway = () => {
        if(close){
            setClose(false)
        }else{
            setClose(true)
        }
        if (close){
        setOpen(false)
        };
    };

    const styles: SxProps = {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
        zIndex:10000
    };
    useEffect((()=>{
        if (FullCalendarAppProps.weekShowData!==undefined){
            let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)

            setDayEvents(getItems)}
    }),[FullCalendarAppProps.weekShowData])

    useEffect((()=>{
        if(!FullCalendarAppProps.compareBool){
            let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)
            setDayEvents(getItems)}
    }),[FullCalendarAppProps.compareBool])

    useEffect(()=>{
        setDefaultDay(FullCalendarAppProps.weekShowStart.replace(/\//g,"-"))
        console.log(FullCalendarAppProps.weekShowStart.replace(/\//g,"-"))
    },[FullCalendarAppProps.weekShowStart])

    useEffect(()=>{
        let calendarApi = ref.current.getApi()
        calendarApi.gotoDate(defaultDay)

    },[defaultDay])

    return (
        <ClickAwayListener onClickAway={()=>handleClickAway()} >
            <Box onClick={()=>handleClickAway()}>
            {FullCalendarAppProps.compareBool && <Button onClick={()=>setEventsFunc()} disabled={compareButtonDisabled}>比較</Button>}
            <FullCalendar
                ref={ref as RefObject<FullCalendar>}
                scrollTime={'09:00:00'}
                showNonCurrentDates={true}
                initialDate={defaultDay}
                eventClick={(info)=>{handleClick(info)}}
                firstDay={1}
                plugins={[timeGridPlugin, interactionPlugin]}
                locale="ja" // 日本語
                stickyHeaderDates={true}
                events={dayEvents as EventSourceInput}
                titleFormat={{year: '2-digit', month: 'short', day: '2-digit'}}
                editable={true}
                selectable={false}
                selectMirror={true}
                eventDidMount={(mountArg:MountArg<EventContentArg>)=>{
                    return<div> aaaa</div>
                }}


            />
            {open ? (
                <Portal>
                    <Box sx={styles} onClick={handleClickAway}>
                        {description}
                    </Box>
                </Portal>
            ) : null}


        </Box>
        </ClickAwayListener>
    );
}

export default FullCalendarApp

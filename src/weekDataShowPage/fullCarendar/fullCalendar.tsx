import FullCalendar, {createRef, EventClickArg, EventSourceInput, MountArg, RefObject} from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'
import React, {useEffect, useRef, useState} from "react";
import { exampleWeekDataType} from "../../ExampleData/ExampleDataType";
import MenuItem from '@mui/material/MenuItem';
import {MakeEventsArray} from "./functions/makeEventsArray";
import Box from '@mui/material/Box';
import interactionPlugin from "@fullcalendar/interaction";
import Portal from '@mui/material/Portal';
import { SxProps } from '@mui/system';
import {Button, ClickAwayListener, Menu, Modal} from "@mui/material";
import {EventContentArg} from "@fullcalendar/core";
import zIndex from "@mui/material/styles/zIndex";
import {axiosDataExchangeType} from "../../DataExchange/DataExchangeExample";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
import "./Style/calendar.css"
import {MakeEventsArrayAppend} from "./functions/makeEventsArrayAppend";




export type calendarEventsType={
    id:string,
    title:string,
    start:string,
    end:string,
    memo:string
    className:string
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
        if (!compareButtonDisabled){
            let getItems=MakeEventsArrayAppend(FullCalendarAppProps.compareWeekShowData,defaultDay)

            getItems.forEach(
                function(item){

                    item["className"]="compare-event"
                }

            )
            setDayEvents(dayEvents.concat(getItems))
        } else{
            if (FullCalendarAppProps.weekShowData!==undefined){
                let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)



                setDayEvents(getItems)

            }
        }
        setCompareButtonDisabled(!compareButtonDisabled)
    }



    const handleClick = (info:EventClickArg) => {
        setOpen((prev) => !prev);
        const styles: SxProps = {
            position: 'fixed',
            width: 200,
            top: info.jsEvent.y+80,
            left: info.jsEvent.x+75,
            transform: 'translate(-50%, -50%)',
            border: '1px solid',
            p: 1,
            bgcolor: 'background.paper',
            zIndex:10000
        };
        const dialogText=

            <Box sx={styles}>
                <Box>{info.event._def.publicId.slice(0,10)}</Box>
                <Box>{info.el.innerText}</Box>
                <Box>説明</Box>
                <Box>{info.event.extendedProps.memo}</Box>
            </Box>
        setDescription(dialogText)


    };

    const handleClickAway = () => {

        setOpen(false)

    };
    const renderEventContent = (eventInfo: EventContentArg) => (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );

    useEffect((()=>{
        if (FullCalendarAppProps.weekShowData!==undefined){
            let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)

            let getItemsConcat=[] as calendarEventsType[]
            if(FullCalendarAppProps.compareBool){
                getItemsConcat=MakeEventsArrayAppend(FullCalendarAppProps.compareWeekShowData,defaultDay)

                getItemsConcat.forEach(
                    function(item){

                        item["className"]="compare-event"
                    }

                )

            }
            setDayEvents(getItems.concat(getItemsConcat))

        }
    }),[FullCalendarAppProps.weekShowData])
    useEffect((()=>{
        if (FullCalendarAppProps.weekShowData!==undefined){
            let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)

            let getItemsConcat=[] as calendarEventsType[]
            if(FullCalendarAppProps.compareBool && compareButtonDisabled){
                getItemsConcat=MakeEventsArrayAppend(FullCalendarAppProps.compareWeekShowData,defaultDay)

                getItemsConcat.forEach(
                    function(item){

                        item["className"]="compare-event"
                    }

                )

            }
            setDayEvents(getItems.concat(getItemsConcat))

        }
    }),[FullCalendarAppProps.compareWeekShowData])

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
            {FullCalendarAppProps.compareBool && <Button onClick={()=>setEventsFunc()} >{!compareButtonDisabled ? "比較":"表示を一つに"}</Button>}
            <FullCalendar

                themeSystem={'bootstrap5'}
                ref={ref as RefObject<FullCalendar>}
                scrollTime={'09:00:00'}
                showNonCurrentDates={true}
                initialDate={defaultDay}
                eventMouseEnter={(info)=>{handleClick(info)}}
                eventMouseLeave={()=>{handleClickAway()}}

                firstDay={1}
                plugins={[timeGridPlugin, interactionPlugin,bootstrap5Plugin]}
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
                viewClassNames={"calendarRootView"}
                allDaySlot={false}
                headerToolbar={{
                    start:"",
                    center:"",
                    end:""


                }}
                titleRangeSeparator={' \u2022 '}






            />
            {open ? (

                    <Box  onClick={handleClickAway}>
                        {description}
                    </Box>

            ) : null}


        </Box>
        </ClickAwayListener>
    );
}

export default FullCalendarApp

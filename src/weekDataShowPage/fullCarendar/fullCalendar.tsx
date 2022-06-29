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
import {Button, ClickAwayListener, Menu, Modal, Paper} from "@mui/material";
import {EventContentArg} from "@fullcalendar/core";
import zIndex from "@mui/material/styles/zIndex";
import {axiosDataExchangeType} from "../../DataExchange/DataExchangeExample";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
import "./Style/calendar.css"
import {MakeEventsArrayAppend} from "./functions/makeEventsArrayAppend";
import listPlugin from '@fullcalendar/list';
import {compareResultCalc} from "../../ComparePage/CompareResultCalc";





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
    compareButtonDisabled:boolean
    setCompareButtonDisabled(compare:boolean):void
    setResultValue(resultValue:number):void
}


function FullCalendarApp(FullCalendarAppProps:FullCalendarAppPropsType) {

    const [dayEvents,setDayEvents]=useState([] as calendarEventsType[])

    const [open, setOpen] = React.useState(false);
    const [close,setClose] =useState(false)
    const [description,setDescription]=useState(<div></div> as JSX.Element)
    const [defaultDay,setDefaultDay]=useState("2022-06-13")
    const ref=useRef<FullCalendar>(null!);





    const handleClick = (info:EventClickArg) => {
        console.log(info)
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
        let eventNowTime=new Date()
        if (info.event._instance?.range.start){
        eventNowTime= new Date(info.event._instance?.range.start.getTime());
        eventNowTime?.setHours(eventNowTime?.getHours() -9)}
        const dialogText=

            <Box sx={styles}><Paper elevation={5} sx={{marginTop:-2,marginLeft:-1,marginRight:-0.6,marginBottom:-1.6,borderRadius:"10px"}}>
                <Box sx={{margin:1}}>
                <Box>{eventNowTime && [ "日", "月", "火", "水", "木", "金", "土" ][eventNowTime.getDay()]}曜日</Box>
                <Box>{info.el.innerText}</Box>
                <Box></Box>
                <Box>説明:{info.event.extendedProps.memo}</Box>
            </Box>
            </Paper></Box>
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
        if (FullCalendarAppProps.weekShowData!==undefined && FullCalendarAppProps.compareWeekShowData!==undefined){
            let getItems=MakeEventsArray(FullCalendarAppProps.weekShowData)

            let getItemsConcat=[] as calendarEventsType[]
            if(FullCalendarAppProps.compareBool ){
                getItemsConcat=MakeEventsArrayAppend(FullCalendarAppProps.compareWeekShowData,defaultDay)

                getItemsConcat.forEach(
                    function(item){

                        item["className"]="compare-event"
                    }

                )

            }
            console.log((getItemsConcat),"a")
            setDayEvents(getItems.concat(getItemsConcat))

        }
        console.log(FullCalendarAppProps.compareWeekShowData,)
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

    },[defaultDay])
    useEffect(()=>{
        if(FullCalendarAppProps.weekShowData && FullCalendarAppProps.compareWeekShowData){
            compareResultCalc(FullCalendarAppProps.weekShowData,FullCalendarAppProps.compareWeekShowData,FullCalendarAppProps.setResultValue)
        }
    },[FullCalendarAppProps.weekShowData,FullCalendarAppProps.compareWeekShowData])



    return (
        <Paper elevation={5} sx={{borderRadius:"10px"}}>
            <Box onClick={()=>handleClickAway()} sx={{margin:2}}>
                <FullCalendar

                themeSystem={'bootstrap5'}
                ref={ref as RefObject<FullCalendar>}
                scrollTime={'09:00:00'}
                showNonCurrentDates={true}
                initialDate={defaultDay}
                eventMouseEnter={(info)=>{handleClick(info)}}
                eventMouseLeave={()=>{handleClickAway()}}

                firstDay={1}
                plugins={[timeGridPlugin, interactionPlugin,bootstrap5Plugin,listPlugin]}
                locale="ja" // 日本語
                stickyHeaderDates={true}
                events={dayEvents as EventSourceInput}
                titleFormat={{year: '2-digit', month: 'short', day: '2-digit'}}
                editable={false}
                selectable={false}
                selectMirror={true}

                viewClassNames={"calendarRootView"}
                allDaySlot={false}
                headerToolbar={{
                    start:"",
                    center:"",
                    end:""


                }}
                titleRangeSeparator={' \u2022 '}
                slotMinTime={"09:00:00"}
                height={650}
                dayHeaderClassNames={"dayHeader"}
                eventClick={(info)=>{handleClick(info)}}
                dayHeaderFormat={{weekday:"narrow"}}
                displayEventTime={false}







            />
            {open ? (

                    <Box  onClick={handleClickAway}>
                        {description}
                    </Box>

            ) : null}


        </Box>
            <pre></pre>
        </Paper>
    );
}

export default FullCalendarApp

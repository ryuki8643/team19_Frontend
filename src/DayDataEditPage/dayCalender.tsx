
import FullCalendar, { EventSourceInput, createRef, EventApi, DateSelectArg, RefObject } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { useEffect, useState, useRef, useCallback } from "react";
import { exampleDayDataType } from "../ExampleData/ExampleDataType";
import { Box, Button, Container, Grid, Paper, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EventForm from "./eventForm";
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const sendData = (data: exampleDayDataType) => {
    console.log(data)
    /*
    axios.post(`http://localhost:8000`, { data })
        .then(res => {
            console.log(res)
        })
        */
}

export type calendarEventsType = {
    id: string,
    title: string,
    start: string,
    end: string,
    memo: string,
    color: string,
}

const DayCalender = () => {
    const [dayEvents, setDayEvents] = useState([] as calendarEventsType[])
    const [date, setDate] = useState<Date | null>(new Date());
    const addItems = (items: calendarEventsType) => {
        const item: calendarEventsType[] = [];
        dayEvents.map((e) => {
            item.push(e);
        })
        item.push(items);
        setDayEvents(item);
    }
    const removeEvent = (title: string, id: string) => {
        console.log(id)
        const item: calendarEventsType[] = [];
        dayEvents.map((e) => {
            item.push(e);
        })
        item.map((e, i) => {
            if (e.id === id) {
                item.splice(i, 1);
            }
        })
        setDayEvents(item)
        console.log(item)
    }

    const ref = useRef<FullCalendar>(null!);

    const test = () => {
        const calendarApi = ref.current.getApi()
        calendarApi.getEvents().map((event) => { console.log(event.start) })
    }


    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: 4, padding: 4 }}>
                <Grid container justifyContent={"space-around"}>
                    <Grid width={"30%"}>
                        <Paper elevation={4} sx={{ padding: 4 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}

                                />
                            </LocalizationProvider>
                        </Paper>
                    </Grid>
                    <Grid width={"30%"}>
                        <Paper elevation={4} sx={{ padding: 4 }}>
                            <EventForm
                                addItems={addItems}
                            />
                        </Paper>

                    </Grid>
                    <Grid width={"30%"}>
                        <Paper elevation={4} sx={{ paddingTop: 2, paddingLeft: 4, paddingRight: 4, paddingBottom: 4 }}>
                            <Stack spacing={4}>
                                <FullCalendar
                                    ref={ref as RefObject<FullCalendar>}
                                    plugins={[timeGridPlugin, interactionPlugin]}
                                    initialView="timeGridDay"
                                    weekends={true}
                                    editable={true}

                                    selectable={true}
                                    allDaySlot={false}
                                    customButtons={{
                                        myCustomButton: {
                                            text: 'Custom Button!',
                                            click: function () {
                                                alert('clicked the custom button!');
                                            },
                                        },
                                    }}
                                    headerToolbar={{
                                        start: "",
                                        center: "",
                                        end: ""
                                    }}
                                    eventClick={(clickInfo) => {
                                        if (
                                            window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)
                                        ) {
                                            clickInfo.event.remove();
                                            removeEvent(clickInfo.event.title, clickInfo.event.id);
                                        }
                                    }}
                                    events={dayEvents as EventSourceInput}
                                    locales={allLocales}
                                    locale="ja"
                                    contentHeight={'450px'}
                                />
                                <Button variant="contained" disableElevation endIcon={<SendIcon />} onClick={() => test()} >
                                    Submit
                                </Button>
                            </Stack>
                        </Paper>
                    </Grid>

                </Grid>
            </Container >
        </>
    );
}

export default DayCalender;

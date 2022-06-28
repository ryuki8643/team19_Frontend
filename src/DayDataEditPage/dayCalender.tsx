
import FullCalendar, { EventSourceInput, RefObject } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { useState, useRef, useEffect } from "react";
import { exampleDayDataType, eventDataType } from "../ExampleData/ExampleDataType";
import { Box, Button, Container, Grid, Paper, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EventForm from "./eventForm";
import SendIcon from '@mui/icons-material/Send';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { GetWindowSize } from '../hooks/GetWindowSize'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

type modalProp = {
    date: any,
    getDate: (date: Date) => void

}
const ModalComponent: React.FC<modalProp> = ({ date, getDate }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={date}
                            onChange={(newValue) => {
                                getDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}

                        />
                    </LocalizationProvider>
                </Box>
            </Modal>
        </>
    );
}

const DatePickCalendar: React.FC<modalProp> = ({ date, getDate }) => {
    const windowSize = GetWindowSize()
    if (windowSize.width > 960) {
        return (
            <Grid width={"30%"}>
                <Paper elevation={4} sx={{ padding: 4, height: "520px" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={date}
                            onChange={(newValue) => {
                                getDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}

                        />
                    </LocalizationProvider>
                </Paper>
            </Grid>
        )
    } else {
        return (
            <Grid width={"100%"} display={"flex"} justifyContent={"center"}>
                <ModalComponent
                    date={date}
                    getDate={getDate}
                />
            </Grid>
        )
    }

}

const widthParam = () => {
    const windowSize = GetWindowSize();
    if (windowSize.width > 960) return "30%";
    if (520 < windowSize.width && windowSize.width <= 960) return "45%";
    if (windowSize.width <= 520) return "100%";
};


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
    }

    const ref = useRef<FullCalendar>(null!);

    const test = () => {
        const calendarApi = ref.current.getApi()
        const content: eventDataType[] = []
        calendarApi.getEvents().map((event) => {
            content.push({
                eventName: event.title,
                eventStart: event.start!.getHours().toString() + ":" + event.start!.getMinutes().toString(),
                eventEnd: event.end!.getHours().toString() + ":" + event.end!.getMinutes().toString(),
                eventDescription: event.extendedProps.memo
            })
        })

        const day = date!.getFullYear().toString() + "/" + (date!.getMonth() + 1).toString() + "/" + date!.getDay().toString()

        const sendData: exampleDayDataType = {
            userId: "1234",
            day: day,
            content: content
        }
    }

    const getDate = (date: Date) => {
        console.log(date)
        setDate(date)
    }


    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: 4, padding: 4 }}>
                <Grid container justifyContent={"space-around"}>

                    <DatePickCalendar
                        date={date}
                        getDate={getDate}
                    />
                    <Grid width={widthParam()}>
                        <Paper elevation={4} sx={{ padding: 4 }}>
                            <EventForm
                                addItems={addItems}
                            />
                        </Paper>

                    </Grid>
                    <Grid width={widthParam()}>
                        <Paper elevation={4} sx={{ paddingTop: 1, paddingLeft: 4, paddingRight: 4, paddingBottom: 4 }}>
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
                                    contentHeight={'390px'}
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

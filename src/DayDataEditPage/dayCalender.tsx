
import FullCalendar, { EventSourceInput, RefObject } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { useState, useRef } from "react";
import { exampleDayDataType, eventDataType } from "../ExampleData/ExampleDataType";
import { Box, Button, Container, Grid, Paper, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EventForm from "./eventForm";
import SendIcon from '@mui/icons-material/Send';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { GetWindowSize } from '../hooks/GetWindowSize'
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';
import { DayDataPostAPI } from '../../src/DataExchange/APIaxios';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const useStyles = makeStyles(theme => ({
    buttonStyle: {
        width: "100%",
        height: "50px",
        background: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&:hover': {
            background: "#a3a3a3",
            color: "#FFF",
        }
    },
}));


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
    const classes = useStyles();
    return (
        <>
            <Paper elevation={4} sx={{ marginBottom: 2, width: "100%", borderRadius: "10px" }}>
                <div onClick={handleOpen} className={classes.buttonStyle}>Choose Date</div>
            </Paper>


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
    if (windowSize.width > 1200) {
        return (
            <Grid width={"30%"}>
                <Paper elevation={4} sx={{ padding: 2, height: "520px", borderRadius: "10px" }}>
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
    if (windowSize.width > 1200) return "33%";
    if (600 < windowSize.width && windowSize.width <= 1200) return "48%";
    if (windowSize.width <= 600) return "100%";
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

    const sendingData = () => {
        const calendarApi = ref.current.getApi()
        const content: eventDataType[] = []
        calendarApi.getEvents().map((event) => {
            content.push({
                name: event.title,
                startTime: event.start!.getHours().toString().padStart(2, '0') + ":" + event.start!.getMinutes().toString().padStart(2, '0'),
                endTime: event.end!.getHours().toString().padStart(2, '0') + ":" + event.end!.getMinutes().toString().padStart(2, '0'),
                description: event.extendedProps.memo
            })
        })

        const day = date!.getFullYear().toString() + "/" + (date!.getMonth() + 1).toString().padStart(2, '0') + "/" + date!.getDate().toString().padStart(2, '0')


        const sendData: exampleDayDataType = {
            userId: 3,
            date: day,
            events: content
        }
        console.log(sendData)
        DayDataPostAPI(sendData);

    }

    const getDate = (date: Date) => {
        console.log(date)
        setDate(date)
    }


    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: 4, padding: 4 }}>
                <Grid container justifyContent={"space-between"}>

                    <DatePickCalendar
                        date={date}
                        getDate={getDate}
                    />
                    <Grid width={widthParam()} marginBottom={10}>
                        <Paper elevation={4} sx={{ padding: 4, borderRadius: "10px" }}>
                            <EventForm
                                addItems={addItems}
                            />
                        </Paper>

                    </Grid>
                    <Grid width={widthParam()}>
                        <Paper elevation={4} sx={{ paddingTop: 1, paddingLeft: 4, paddingRight: 4, paddingBottom: 4, borderRadius: "10px" }}>
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
                                <Button variant="contained" disableElevation endIcon={<SendIcon />} onClick={() => sendingData()} >
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

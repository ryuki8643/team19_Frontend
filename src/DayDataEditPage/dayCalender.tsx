
import FullCalendar, { EventSourceInput, RefObject } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import React, { useState, useRef, useEffect } from "react";
import { exampleDayDataType, eventDataType, getUserDataType } from "../ExampleData/ExampleDataType";
import { Box, Button, Container, Grid, Paper, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EventForm from "./eventForm";
import SendIcon from '@mui/icons-material/Send';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { GetWindowSize } from '../hooks/GetWindowSize'
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';
import { DayDataPostAPI, userIdAPI } from '../../src/DataExchange/APIaxios';
import { onAuthStateChanged } from "firebase/auth";
import { authExample } from "../SignUpPage/firebaseConfig";
import firebase from "firebase/compat";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SubmitModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
        cursor: 'pointer',
        '&:hover': {
            background: "#a3a3a3",
            color: "#FFF",
        }
    },
    CloseButton: {
        position: 'fixed',
        top: '-10px',
        right: '-10px',
        width: '25px',
        height: '25px',
        background: '#f2f2f2',
        border: '1px solid #f2f2f2',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: '16px',
        cursor: 'pointer',
    },
    CalendarStyle: {
        width: '100%',
        background: '#000',
    }
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
            <Paper elevation={4} sx={{ marginBottom: 4, width: "100%", borderRadius: "10px" }}>
                <div onClick={handleOpen} className={classes.buttonStyle}>日付を選択</div>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <span className={classes.CloseButton} onClick={() => handleClose()}>×</span>
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
    const classes = useStyles();
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
                            className={classes.CalendarStyle}

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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const [loginUser, setLoginUser] = React.useState<firebase.User | null>(null)
    const [userData, setUserData] = useState({
        id: 0,
        firebaseUid: "",
        email: "",
        age: 0,
        role: "",
        company: "",
    } as getUserDataType)


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
            userId: userData.id,
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

    useEffect(() => {
        onAuthStateChanged(authExample, (currentUser) => {
            setLoginUser(currentUser as firebase.User | null);
        });
    }, []);
    useEffect(() => {
        if (loginUser) {
            userIdAPI(setUserData, loginUser.uid).then(() => { })


        }
    }, [loginUser])

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: 4, padding: 4 }}>
                <Grid container justifyContent={"space-between"}>

                    <DatePickCalendar
                        date={date}
                        getDate={getDate}
                    />
                    <Grid width={widthParam()} marginBottom={4}>
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
                                    dayHeaders={false}
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
                                <Button variant="contained" disableElevation endIcon={<SendIcon />} onClick={() => {
                                    if (loginUser) { handleOpen() }
                                    else { handleLoginOpen() }

                                }} >
                                    登録
                                </Button>
                            </Stack>
                        </Paper>
                    </Grid>

                </Grid>
            </Container >

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={SubmitModalStyle}>
                    <span className={classes.CloseButton} onClick={() => handleClose()}>×</span>
                    <div >送信しますか？</div>
                    <div>
                        <Button sx={{ margin: 2, width: 100 }} variant="outlined" color="error" onClick={() => handleClose()}>いいえ</Button><Button sx={{ margin: 2, width: 100 }} variant="contained" disableElevation onClick={() => sendingData()}>はい</Button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={loginOpen}
                onClose={handleLoginClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={SubmitModalStyle}>
                    <span className={classes.CloseButton} onClick={() => handleLoginClose()}>×</span>
                    <div >イベントを登録するためには<br />ログインする必要があります</div>
                    <div>
                        <Button sx={{ margin: 2, width: 100 }} variant="outlined" color="error" onClick={() => handleLoginClose()}>戻る</Button>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default DayCalender;

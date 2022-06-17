import React from "react";
import { FilledInput, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';


export type DayData = {
    userId: string,     //ex) "1234"
    day: string,        //ex )"2022/06/07"
    content: EventData[],
}

export type EventData = {
    eventName: string,          //ex) "寝る"
    eventStart: string,         //ex) "14:00"
    eventEnd: string,           //ex) "16:00"
    eventDescription: string,   //ex) "起床"
}


const SendDate = (data: DayData) => {
    axios.post(`http://localhost:8000`, { data })
        .then(res => {
            console.log(res)
        })
}
type Prop = {
    daydata: DayData | undefined,
}
const EventDataField: React.FC<Prop> = ({ daydata }) => {
    console.log(daydata);
    return (<div></div>);
}

const MyDatePicker = () => {
    const value = new Date();
    const handleChange = () => { };

    if (1) {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}

                />
            </LocalizationProvider>
        );

    } else {
        return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}

                />
            </LocalizationProvider>
        );
    }
}

const DayEditApp = () => {
    const [startTime, setStartTime] = React.useState<Date | null>(new Date());
    const [endTime, setEndTime] = React.useState<Date | null>(new Date());
    const [text, setText] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [dayData, setDayData] = React.useState<DayData>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const addItems = () => {
        const test = { userId: "", day: "", content: [{ eventName: "", eventStart: "", eventEnd: "", eventDescription: "" }] };
        console.log(test.userId)
        setDayData(test)
    }

    return (
        <div>
            <Stack spacing={4}>

                <div>Edit Page</div>

                <MyDatePicker></MyDatePicker>
                <TextField
                    id="do-something"
                    label="What did you do?"
                    value={text}
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        ampmInClock
                        views={['hours', 'minutes']}
                        inputFormat="hh:mm"
                        mask="__:__"
                        label="Start Time (Hours and Minutes)"
                        value={startTime}
                        onChange={(newTime) => {
                            setStartTime(newTime);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        ampmInClock
                        views={['hours', 'minutes']}
                        inputFormat="hh:mm"
                        mask="__:__"
                        label="End Time (Hours and Minutes)"
                        value={endTime}
                        onChange={(newTime) => {
                            setEndTime(newTime);
                        }}
                        minTime={startTime}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
                <TextField
                    id="do-something"
                    label="How was it?"
                    multiline
                    rows={4}
                    value={description}
                    onChange={handleChangeDescription}
                />
                <Button variant="contained" disableElevation endIcon={<AddIcon />} onClick={() => addItems()}>
                    Add
                </Button>
                <EventDataField daydata={dayData}></EventDataField>
                <Button variant="contained" disableElevation endIcon={<SendIcon />}>
                    Submit
                </Button>

            </Stack>
        </div>
    )
}

export default DayEditApp

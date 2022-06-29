import React, { useState } from "react";
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { exampleDayDataType } from "../ExampleData/ExampleDataType";

const sendData = (data: exampleDayDataType) => {
    console.log(data)
    /*
    axios.post(`http://localhost:8000`, { data })
        .then(res => {
            console.log(res)
        })
        */
}

type Prop = {
    dailyItems: exampleDayDataType,
    addItems: (dailyEventData: exampleDayDataType) => void,
}

export const formatDate = (fulldate: string) => {
    const toTwoDigit = (date: number) => {
        return date < 10 ? "0" + date.toString() : date.toString();
    };
    const date = new Date(fulldate);
    return (
        date.getFullYear().toString() +
        "-" +
        toTwoDigit(date.getMonth() + 1) +
        "-" +
        toTwoDigit(date.getDate())
    );
};
const EventForm: React.FC<Prop> = ({ addItems, dailyItems }) => {
    const [startTime, setStartTime] = useState("12:00");
    const [endTime, setEndTime] = useState("13:00");
    const [title, setText] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const timeValidation = () => {
        const numStartTime = Number(startTime.replace(':', ''))
        const numEndTime = Number(endTime.replace(':', ''))
        return (numStartTime > numEndTime)
    }

    const setItems = () => {
        dailyItems.userId = "1234";
        dailyItems.day = formatDate(date.toLocaleString())
        let key = 0;
        if (Object.keys(dailyItems.content).length > 0) {
            key = Number(Object.keys(dailyItems.content)[Object.keys(dailyItems.content).length - 1])
        } else {
            key = Object.keys(dailyItems.content).length
        }
        const eventContent = {
            [key + 1]: {
                eventName: title,
                eventStart: startTime,
                eventEnd: endTime,
                eventDescription: description
            }
        };
        dailyItems.content = Object.assign(dailyItems.content, eventContent);
        addItems(dailyItems);

        setText("");
        setDescription("");
    }

    const isAbailableButton = () => {
        return (title === "" || description === "" || timeValidation())
    }

    return (
        <Stack spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date desktop"
                    mask="____/__/__"
                    inputFormat="yyyy/MM/dd"
                    value={date}
                    onChange={(newValue) => {
                        if (newValue != null) {
                            setDate(newValue);
                        }
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <TextField
                id="do-something"
                label="What did you do?"
                value={title}
                onChange={handleChange}
            />
            <TextField
                id="time"
                label="Start Time (Hours and Minutes)"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 60, // 5 min
                }}
                value={startTime}
                onChange={(newTime) => {
                    setStartTime(newTime.target.value);
                }}

            />
            <TextField
                id="time"
                label="End Time (Hours and Minutes)"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 60, // 5 min
                }}
                value={endTime}
                onChange={(newTime) => {
                    setEndTime(newTime.target.value);
                }}
                error={timeValidation()}
            />
            <TextField
                id="do-something"
                label="How was it?"
                multiline
                rows={4}
                value={description}
                onChange={handleChangeDescription}
            />
            <Button variant="contained" disableElevation endIcon={<AddIcon />} disabled={isAbailableButton()} onClick={() => setItems()}>
                Add
            </Button>
            <Button variant="contained" disableElevation endIcon={<SendIcon />} onClick={() => sendData(dailyItems)} >
                Submit
            </Button>
        </Stack >
    )
}

export default EventForm

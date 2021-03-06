import React, { useState } from "react";
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { calendarEventsType } from './dayCalender';



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

type Prop = {
    addItems: (items: calendarEventsType) => void;
}
const EventForm: React.FC<Prop> = ({ addItems }) => {
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

    const errorMessage = timeValidation() ? "開始時間より後の時間を選択してください" : ""
    const setItems = () => {
        const items: calendarEventsType =
        {
            id: formatDate(date.toLocaleString()) + title + " " + startTime,
            start: formatDate(date.toLocaleString()) + " " + startTime,
            end: formatDate(date.toLocaleString()) + " " + endTime,
            title: title,
            memo: description,
            color: "3788D8"
        }

        addItems(items);
        setText("");
        setDescription("");
    }

    const isAbailableButton = () => {
        return (title === "" || description === "" || timeValidation())
    }

    return (
        <Stack spacing={4}>
            <TextField
                id="do-something"
                label="タイトル"
                required
                value={title}
                placeholder="例）プログラミング"
                onChange={handleChange}
            />
            <TextField
                id="time"
                label="開始"
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
                label="終了"
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
                helperText={errorMessage}
            />
            <TextField
                id="do-something"
                label="説明"
                required
                placeholder="例）モバイルアプリのデザイン調整"
                multiline
                rows={4}
                value={description}
                onChange={handleChangeDescription}
            />
            <Button variant="contained" disableElevation endIcon={<AddIcon />} disabled={isAbailableButton()} onClick={() => setItems()}>
                追加
            </Button>
        </Stack >
    )
}

export default EventForm

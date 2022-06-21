import React, { useState } from "react";
import axios from 'axios';

import DayCalender from "./dayCalender";

import { exampleDayDataType } from "../ExampleData/ExampleDataType";


const SendData = (data: exampleDayDataType) => {
    axios.post(`http://localhost:8000`, { data })
        .then(res => {
            console.log(res)
        })
}

const DayEditApp = () => {
    return (
        <div>
            <div>Edit Page</div>
            <DayCalender

            />

        </div>
    )
}

export default DayEditApp

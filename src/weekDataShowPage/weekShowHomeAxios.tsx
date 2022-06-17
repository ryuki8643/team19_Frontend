import React from 'react'

import WeekPageFrontPage from "./WeekPageFront";
import {DataExchangeExample} from "../DataExchange/DataExchangeExample";
import {exampleSearchData} from "../ExampleData/ExampleData";

const WeekShowHomeAxios = () => {
    return (
        <>
            <WeekPageFrontPage axiosWeekDataExchange={DataExchangeExample} axiosSearchData={exampleSearchData}/>


        </>
    )
}

export default WeekShowHomeAxios

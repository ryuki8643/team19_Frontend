import React from 'react'

import WeekPageFrontPage from "./WeekPageFront";
import {DataExchangeExample} from "../DataExchange/DataExchangeExample";
import {exampleSearchData} from "../ExampleData/ExampleData";
import {exampleSearchDataType} from "../ExampleData/ExampleDataType";

type WeekShowHomeAxiosPropsType={
    SearchData:exampleSearchDataType

}

export const WeekShowHomeAxios = (WeekShowHomeAxiosProps:WeekShowHomeAxiosPropsType) => {
    return (
        <>
            <WeekPageFrontPage axiosWeekDataExchange={DataExchangeExample} axiosSearchData={WeekShowHomeAxiosProps.SearchData}/>


        </>
    )
}



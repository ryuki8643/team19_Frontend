import React from 'react'

import WeekPageFrontPage from "./WeekPageFront";

import {exampleSearchDataType, exampleWeekDataType} from "../ExampleData/ExampleDataType";
import {axiosDataExchangeType} from "../DataExchange/DataExchangeExample";

type WeekShowHomeAxiosPropsType={
    SearchData:exampleSearchDataType
    axiosWeekDataExchange:axiosDataExchangeType

}

export const WeekShowHomeAxios = (WeekShowHomeAxiosProps:WeekShowHomeAxiosPropsType) => {
    return (
        <>
            <WeekPageFrontPage axiosWeekDataExchange={WeekShowHomeAxiosProps.axiosWeekDataExchange} axiosSearchData={WeekShowHomeAxiosProps.SearchData}/>


        </>
    )
}



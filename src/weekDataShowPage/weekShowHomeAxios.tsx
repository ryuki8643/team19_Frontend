import React from 'react'

import WeekPageFrontPage from "./WeekPageFront";

import {exampleSearchDataType, exampleWeekDataType} from "../ExampleData/ExampleDataType";

type WeekShowHomeAxiosPropsType={
    SearchData:exampleSearchDataType
    axiosWeekDataExchange:{[key:string]:{[key:string]:exampleWeekDataType}}

}

export const WeekShowHomeAxios = (WeekShowHomeAxiosProps:WeekShowHomeAxiosPropsType) => {
    return (
        <>
            <WeekPageFrontPage axiosWeekDataExchange={WeekShowHomeAxiosProps.axiosWeekDataExchange} axiosSearchData={WeekShowHomeAxiosProps.SearchData}/>


        </>
    )
}



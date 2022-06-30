import React, {useEffect, useState} from 'react';
import {  Routes, Route } from "react-router-dom"
import {WeekShowHomeAxios} from "./weekDataShowPage/weekShowHomeAxios";
import DayEditHome from "./DayDataEditPage/dayEditHome";
import {Selector} from "./Selector/Selector";
import {SearchPage} from "./SearchPage/SearchPage";
import {exampleSearchData} from "./ExampleData/ExampleData";
import {Container} from "@mui/material";
import {ComparePageHome} from "./ComparePage/ComparePageHome";
import {axiosDataExchangeType, DataExchangeExample, DataExchangeExampleAPI} from "./DataExchange/DataExchangeExample";
import {SearchDataAPI, WeekDataAPI} from "./DataExchange/APIaxios";
import {exampleSearchDataType,exampleWeekDataType} from "./ExampleData/ExampleDataType";

const FrontPage: React.FC = () => {

    const [searchData,setSearchData]=useState(exampleSearchData as exampleSearchDataType)
    const [connect,setConnect]=useState(false)

    const weekDataFunc=WeekDataAPI

    useEffect( ()=>{
        const result=SearchDataAPI(setSearchData,setConnect)




    },[])
    useEffect(()=>{
        if(connect){

        }

    },[connect])

    return (
        <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>

            <Container maxWidth={"xl"}>
                <Selector SearchData={searchData} />
            </Container>


            <Routes>


                        <Route index  element={<ComparePageHome axiosSearchData={searchData} axiosWeekDataExchange={weekDataFunc}/>}/>
                        <Route path="/Individual" element={<WeekShowHomeAxios SearchData={searchData} axiosWeekDataExchange={weekDataFunc}/>}/>



                <Route path="/Edit" element={<DayEditHome />} />
                <Route path="/Search" element={<SearchPage/>}/>



            </Routes>

        </div>

    );
}

export default FrontPage;

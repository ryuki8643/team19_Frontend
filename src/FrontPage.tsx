import React, {useState} from 'react';
import {  Routes, Route } from "react-router-dom"
import {WeekShowHomeAxios} from "./weekDataShowPage/weekShowHomeAxios";
import DayEditHome from "./DayDataEditPage/dayEditHome";
import {Selector} from "./Selector/Selector";
import {SearchPage} from "./SearchPage/SearchPage";
import {exampleSearchData} from "./ExampleData/ExampleData";
import {Container} from "@mui/material";
import {ComparePageHome} from "./ComparePage/ComparePageHome";
import {DataExchangeExample} from "./DataExchange/DataExchangeExample";

const FrontPage: React.FC = () => {



    return (
        <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>

            <Container maxWidth={"xl"}>
                <Selector SearchData={exampleSearchData} />
            </Container>


            <Routes>
                <Route index element={<WeekShowHomeAxios SearchData={exampleSearchData} axiosWeekDataExchange={DataExchangeExample}/>} />
                <Route path="/Edit" element={<DayEditHome />} />
                <Route path="/Search" element={<SearchPage/>}/>
                <Route path="/Compare" element={<ComparePageHome axiosSearchData={exampleSearchData} axiosWeekDataExchange={DataExchangeExample}/>}/>


            </Routes>

        </div>

    );
}

export default FrontPage;

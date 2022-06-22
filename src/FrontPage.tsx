import React, {useState} from 'react';
import {  Routes, Route } from "react-router-dom"
import {WeekShowHomeAxios} from "./weekDataShowPage/weekShowHomeAxios";
import DayEditHome from "./DayDataEditPage/dayEditHome";
import {Selector} from "./Selector/Selector";
import {SearchPage} from "./SearchPage/SearchPage";
import {exampleSearchData} from "./ExampleData/ExampleData";


const FrontPage: React.FC = () => {



    return (
        <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>


            <Selector SearchData={exampleSearchData} />

            <Routes>
                <Route index element={<WeekShowHomeAxios SearchData={exampleSearchData}/>} />
                <Route path="/Edit" element={<DayEditHome />} />
                <Route path="/Search" element={<SearchPage/>}/>


            </Routes>

        </div>

    );
}

export default FrontPage;

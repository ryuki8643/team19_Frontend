import React from 'react';
import {  Routes, Route } from "react-router-dom"
import WeekShowHomeAxios from "./weekDataShowPage/weekShowHomeAxios";
import DayEditHome from "./DayDataEditPage/dayEditHome";
import Selector from "./Selector/Selector";


const FrontPage: React.FC = () => {
    return (
        <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>


            <Selector />

            <Routes>
                <Route index element={<WeekShowHomeAxios />} />
                <Route path="/Edit" element={<DayEditHome />} />


            </Routes>

        </div>

    );
}

export default FrontPage;

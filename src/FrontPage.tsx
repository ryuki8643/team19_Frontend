import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WeekShowHome from "./weekDataShowPage/weekShowHome";
import DayEditHome from "./DayDataEditPage/dayEditHome";
import Selector from "./Selector/Selector";

const FrontPage: React.FC = () => {
    return (
        <div className="App" style={{ backgroundColor: 'rgb(255,253,250)' }}>


                <Selector />
                <Routes>
                    <Route index element={<WeekShowHome />} />
                    <Route path="/Edit" element={<DayEditHome />} />


                </Routes>

        </div>

    );
}

export default FrontPage;

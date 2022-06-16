import {eventDataType, exampleDayDataType, exampleWeekDataType} from "../../ExampleData/ExampleDataType";
import {getStringFromDate} from "./getStringFromDate";
import {calendarEventsType} from "./fullCalendar";
import {exampleWeekData2} from "../../ExampleData/ExampleData";

type makeEventsArrayType={
    exampleWeekData:exampleWeekDataType

}

export const MakeEventsArray=(fullCalendarProps:exampleWeekDataType)=>{
    let items:calendarEventsType[]=[]

    const makeDayArray=(dayData:exampleDayDataType,NowDate:string)=> {
        let dataS = Object.values(dayData) as eventDataType[];

        for (let i = 0; i < dataS.length; i++) {
            let startTime=("00"+dataS[i].eventStart).slice(-5)
            let endTime=("00"+dataS[i].eventEnd).slice(-5)

            items.push(
                {
                    id: NowDate.toString() + " " + startTime,
                    start: NowDate.toString() + " " + startTime,
                    end: NowDate.toString() + " " + endTime,
                    title: dataS[i].eventName,
                    memo: dataS[i].eventDescription

                }
            );
        }
    }

    makeDayArray(
        fullCalendarProps["Monday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,0))
    makeDayArray(
        fullCalendarProps["Tuesday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,1))
    makeDayArray(
        fullCalendarProps["Wednesday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,2))
    makeDayArray(
        fullCalendarProps["Thursday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,3))
    makeDayArray(
        fullCalendarProps["Friday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,4))
    makeDayArray(
        fullCalendarProps["Saturday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,5))
    makeDayArray(
        fullCalendarProps["Sunday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,6))

    return items




}

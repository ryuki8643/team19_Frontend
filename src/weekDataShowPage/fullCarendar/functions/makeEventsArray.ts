import {eventDataType, exampleDayDataType, exampleWeekDataType} from "../../../ExampleData/ExampleDataType";
import {getStringFromDate} from "./getStringFromDate";
import {calendarEventsType} from "../fullCalendar";




export const MakeEventsArray=(fullCalendarProps:exampleWeekDataType)=>{
    let items:calendarEventsType[]=[]

    const makeDayArray=(dayData:eventDataType[],NowDate:string)=> {
        let dataS = dayData

        for (let i = 0; i < dataS.length; i++) {
            let startTime=("00"+dataS[i].eventStart).slice(-5)
            let endTime=("00"+dataS[i].eventEnd).slice(-5)

            items.push(
                {
                    id: NowDate.toString() + " " + startTime,
                    start: NowDate.toString() + " " + startTime,
                    end: NowDate.toString() + " " + endTime,
                    title: dataS[i].eventName,
                    memo: dataS[i].eventDescription,
                    className:"default-event"

                }
            );
        }
    }

    makeDayArray(
        fullCalendarProps["Monday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,0))
    makeDayArray(
        fullCalendarProps["Tuesday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,1))
    makeDayArray(
        fullCalendarProps["Wednesday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,2))
    makeDayArray(
        fullCalendarProps["Thursday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,3))
    makeDayArray(
        fullCalendarProps["Friday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,4))
    makeDayArray(
        fullCalendarProps["Saturday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,5))
    makeDayArray(
        fullCalendarProps["Sunday"],
        getStringFromDate(fullCalendarProps["StartDay"] as string,6))

    return items




}

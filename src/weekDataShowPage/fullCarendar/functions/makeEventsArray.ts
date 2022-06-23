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
        fullCalendarProps["monday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,0))
    makeDayArray(
        fullCalendarProps["tuesday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,1))
    makeDayArray(
        fullCalendarProps["wednesday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,2))
    makeDayArray(
        fullCalendarProps["thursday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,3))
    makeDayArray(
        fullCalendarProps["friday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,4))
    makeDayArray(
        fullCalendarProps["saturday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,5))
    makeDayArray(
        fullCalendarProps["sunday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,6))

    return items




}

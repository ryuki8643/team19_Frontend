import {eventDataType, exampleDayDataType, exampleWeekDataType} from "../../../ExampleData/ExampleDataType";
import {getStringFromDate} from "./getStringFromDate";
import {calendarEventsType} from "../fullCalendar";




export const MakeEventsArrayAppend=(fullCalendarProps:exampleWeekDataType,minusDate:string)=>{
    let items:calendarEventsType[]=[]
    const CompareMinusDate=new Date(minusDate)
    const nowDate=new Date(fullCalendarProps.startDate)
    const compareDateNum=nowDate.getDate()-CompareMinusDate.getDate()
    console.log(compareDateNum)

    const makeDayArray=(dayData:eventDataType[],NowDate:string)=> {
        let dataS = dayData;

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
        getStringFromDate(fullCalendarProps["startDate"] as string,0-compareDateNum))
    makeDayArray(
        fullCalendarProps["tuesday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,1-compareDateNum))
    makeDayArray(
        fullCalendarProps["wednesday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,2-compareDateNum))
    makeDayArray(
        fullCalendarProps["thursday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,3-compareDateNum))
    makeDayArray(
        fullCalendarProps["friday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,4-compareDateNum))
    makeDayArray(
        fullCalendarProps["saturday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,5-compareDateNum))
    makeDayArray(
        fullCalendarProps["sunday"],
        getStringFromDate(fullCalendarProps["startDate"] as string,6-compareDateNum))

    return items




}

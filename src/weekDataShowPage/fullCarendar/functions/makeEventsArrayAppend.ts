import {eventDataType, exampleDayDataType, exampleWeekDataType} from "../../../ExampleData/ExampleDataType";
import {getStringFromDate} from "./getStringFromDate";
import {calendarEventsType} from "../fullCalendar";




export const MakeEventsArrayAppend=(fullCalendarProps:exampleWeekDataType,minusDate:string)=>{
    let items:calendarEventsType[]=[]
    const CompareMinusDate=new Date(minusDate)
    const nowDate=new Date(fullCalendarProps.StartDay)
    const compareDateNum=nowDate.getDate()-CompareMinusDate.getDate()
    console.log(compareDateNum)

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
                    memo: dataS[i].eventDescription,
                    color:"3788D8"

                }
            );
        }
    }

    makeDayArray(
        fullCalendarProps["Monday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,0-compareDateNum))
    makeDayArray(
        fullCalendarProps["Tuesday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,1-compareDateNum))
    makeDayArray(
        fullCalendarProps["Wednesday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,2-compareDateNum))
    makeDayArray(
        fullCalendarProps["Thursday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,3-compareDateNum))
    makeDayArray(
        fullCalendarProps["Friday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,4-compareDateNum))
    makeDayArray(
        fullCalendarProps["Saturday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,5-compareDateNum))
    makeDayArray(
        fullCalendarProps["Sunday"] as exampleDayDataType,
        getStringFromDate(fullCalendarProps["StartDay"] as string,6-compareDateNum))

    return items




}

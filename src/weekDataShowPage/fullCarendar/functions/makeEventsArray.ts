import { eventDataType, exampleDayDataType, exampleWeekDataType } from "../../../ExampleData/ExampleDataType";
import { getStringFromDate } from "./getStringFromDate";
import { calendarEventsType } from "../fullCalendar";
import {uniq} from "./FilterCommon";




export const MakeEventsArray = (fullCalendarProps: exampleWeekDataType) => {
    let items: calendarEventsType[] = []

    const makeDayArray = (dayData: eventDataType[], NowDate: string) => {
        let dataS = dayData

        for (let i = 0; i < dataS.length; i++) {
            let startTime = ("00" + dataS[i].startTime).slice(-5)
            let endTime = ("00" + dataS[i].endTime).slice(-5)

            items.push(
                {
                    id: NowDate.toString() + " " + startTime,
                    start: NowDate.toString() + " " + startTime,
                    end: NowDate.toString() + " " + endTime,
                    title: dataS[i].name,
                    memo: dataS[i].description,
                    className: "default-event"

                }
            );
        }
    }

    makeDayArray(
        fullCalendarProps["monday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 0))
    makeDayArray(
        fullCalendarProps["tuesday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 1))
    makeDayArray(
        fullCalendarProps["wednesday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 2))
    makeDayArray(
        fullCalendarProps["thursday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 3))
    makeDayArray(
        fullCalendarProps["friday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 4))
    makeDayArray(
        fullCalendarProps["saturday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 5))
    makeDayArray(
        fullCalendarProps["sunday"],
        getStringFromDate(fullCalendarProps["startDate"] as string, 6))

    return uniq(items)




}

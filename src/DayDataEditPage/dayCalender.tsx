import FullCalendar, { EventSourceInput, createRef, EventApi, DateSelectArg } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from "@fullcalendar/core/locales-all";
import { useEffect, useState, useCallback } from "react";
import { exampleDayDataType } from "../ExampleData/ExampleDataType";
import Grid from '@mui/material/Grid';
import EventForm from "./eventForm";


export type calendarEventsType = {
    id: string,
    title: string,
    start: string,
    end: string,
    memo: string
    color: string
}

const DayCalender = () => {
    const [dailyItems, setDayEventsData] = useState({ userId: "", day: "", content: {} } as exampleDayDataType)
    let items: calendarEventsType[] = [];
    const [dayEvents, setDayEvents] = useState([] as calendarEventsType[])
    const addItems = (dailyEventData: exampleDayDataType) => {
        if (Object.keys(dailyEventData).length > 0) {

            const data = Object.values(dailyEventData.content)
            data.forEach(e => {
                items.push(
                    {
                        id: dailyEventData.day + " " + e.eventStart,
                        start: dailyEventData.day + " " + e.eventStart,
                        end: dailyEventData.day + " " + e.eventEnd,
                        title: e.eventName,
                        memo: e.eventDescription,
                        color: "3788D8"
                    }
                );
            });
            setDayEvents(items)
            setDayEventsData(dailyEventData)
        }
    }

    const removeEvent = (title: string, id: string) => {
        console.log(id)
        Object.keys(dailyItems.content).map(value => {
            if (dailyItems.content[Number(value)].eventName === title && (dailyItems.day + " " + dailyItems.content[Number(value)].eventStart) === id) {
                delete dailyItems.content[Number(value)];
            }
        })

        console.log(dailyItems.content)
        //setDayEventsData()
    }

    return (
        <>
            <Grid
                container
                direction="row"
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
            >
                <Grid >
                    <EventForm
                        dailyItems={dailyItems}
                        addItems={addItems}
                    />
                </Grid>
                <Grid >
                    <FullCalendar
                        plugins={[timeGridPlugin]}
                        initialView="timeGridDay"
                        weekends={true}
                        editable={true}
                        allDaySlot={false}
                        customButtons={{
                            myCustomButton: {
                                text: 'Custom Button!',
                                click: function () {
                                    alert('clicked the custom button!');
                                },
                            },
                        }}
                        headerToolbar={{
                            start: 'title',
                            center: '',
                            end: 'myCustomButton'
                        }}
                        eventClick={(clickInfo) => {
                            if (
                                window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)
                            ) {

                                removeEvent(clickInfo.event.title, clickInfo.event.id)
                                clickInfo.event.remove();
                            }
                        }}
                        events={dayEvents as EventSourceInput}
                        locales={allLocales}
                        locale="ja"
                        contentHeight={'700px'}
                    />
                </Grid>


            </Grid >

        </>
    );
}

export default DayCalender;

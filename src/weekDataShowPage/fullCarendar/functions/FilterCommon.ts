import {calendarEventsType} from "../fullCalendar";

export function uniq(array:calendarEventsType[]) {
    let ids=new Set()
    let ends=new Set()
    let results=[] as calendarEventsType[]
    array.forEach(function(elem, index, self) {
        if (!(ids.has(elem.id) && ends.has(elem.end))){
            ids.add(elem.id)
            ends.add(elem.end)
            results.push(elem)
        }
    });
    return results
}



export type exampleDayDataType =
    {
        userId: string,
        day: string,
        content:
            exampleDayDataShowType
    }
export type exampleUserDataType={
    userName:string,
    email:string,
    age:number,
    role:string,
    company:string,
}

export type exampleSearchDataType={
    [key:string]:
        {
            age:number,
            role:string,
            company:string,
            weekList:
                {
                    [key:number]:
                        {
                            day:string,
                            dayCount:number,
                            value:number},




                },

        },

}

export type exampleWeekDataType={
    id:string,
    StartDay:string,
    age:number,
    role:string,
    company:string,
    Monday:
        exampleDayDataShowType
    Tuesday:
        exampleDayDataShowType
    Wednesday:
        exampleDayDataShowType
    Thursday:
        exampleDayDataShowType
    Friday:
        exampleDayDataShowType
    Saturday:
        exampleDayDataShowType
    Sunday:
        exampleDayDataShowType

}

export type exampleDayDataShowType=
    {[key:number]:
        eventDataType
    }
export type eventDataType=
    {
        eventName:string,
        eventStart:string,
        eventEnd:string,
        eventDescription:string
    }


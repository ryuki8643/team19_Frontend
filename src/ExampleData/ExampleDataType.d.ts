

export type exampleDayDataType =
    {
        userId: string,
        day: string,
        content:
            eventDataType[]
    }
export type exampleUserDataType={
    userId:string,
    email:string,
    age:number,
    role:string,
    company:string,
}

export type exampleSearchDataType={
    UserData:
        {
            UserId:string
            age:number,
            role:string,
            company:string,
            weekList:


                        {
                            day:string,
                            dayCount:number,
                            value:number}[],






        }[],

}

export type exampleWeekDataType={
    UserId:string,
    StartDay:string,
    age:number,
    role:string,
    company:string,
    Monday:
        eventDataType[]
    Tuesday:
        eventDataType[]
    Wednesday:
        eventDataType[]
    Thursday:
        eventDataType[]
    Friday:
        eventDataType[]
    Saturday:
        eventDataType[]
    Sunday:
        eventDataType[]

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

export type currentUserIdDataType=
        {
            age:number,
            role:string,
            company:string,
        }


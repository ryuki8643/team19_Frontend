

export type exampleDayDataType =
    {
        userId: string,
        day: string,
        content:
            eventDataType[]
    }
export type exampleUserDataType={
    firebaseUid:string,
    email:string,
    age:number,
    role:string,
    company:string,
}

export type exampleSearchDataType={
    userData:
        {
            userId:string
            age:number,
            role:string,
            company:string,
            weekList:


                        {
                            day:string,
                            dayCount:number,
                            eventCount:number}[],






        }[],

}

export type exampleWeekDataType={
    userId:string,
    startDate:string,
    age:number,
    role:string,
    company:string,
    monday:
        eventDataType[]
    tuesday:
        eventDataType[]
    wednesday:
        eventDataType[]
    thursday:
        eventDataType[]
    friday:
        eventDataType[]
    saturday:
        eventDataType[]
    sunday:
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


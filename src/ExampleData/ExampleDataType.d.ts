

export type exampleDayDataType =
    {
        userId: number,
        date: string,
        events:
        eventDataType[]
    }
export type exampleUserDataType = {
    firebaseUid: string,
    email: string,
    age: number,
    role: string,
    company: string,
}

export type getUserDataType = {
    id:number,
    firebaseUid: string,
    email: string,
    age: number,
    role: string,
    company: string,
}

export type exampleSearchDataType = {
    userData:
    {
        userId: string
        age: number,
        role: string,
        company: string,
        weekData:


        {
            date: string,
            dateCount: number,
            eventCount: number
        }[]|[],






    }[],

}

export type getSearchDataType={

    userId: number|string,
    age: number,
    role: string,
    company: string,
    weekData:


        {
            date: string,
            dateCount: number,
            eventCount: number
        }[]|[],






}[]

export type getWeekDataType = {
    userId: number|string,
    startDate: string,
    age: number,
    role: string,
    company: string,
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

export type exampleWeekDataType = {
    userId: string,
    startDate: string,
    age: number,
    role: string,
    company: string,
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

export type exampleDayDataShowType =
    {
        [key: number]:
        eventDataType
    }
export type eventDataType =
    {
        name: string,
        startTime: string,
        endTime: string,
        description: string
    }

export type currentUserIdDataType =
    {
        age: number,
        role: string,
        company: string,
    }


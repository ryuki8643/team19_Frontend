

export type exampleDayDataType =
    {
        userId: String,
        day: String,
        content:
            exampleDayDataShowType
    }
export type exampleUserDataType={
    userName:String,
    email:String,
    age:Number,
    role:String,
    company:String,
}

export type exampleSearchDataType={
    [key:string]:
        {
            age:Number,
            role:String,
            company:String,
            weekList:
                {
                    [key:Number]:
                        {
                            day:String,
                            dayCount:Number,
                            value:Number},




                },

        },

}

export type exampleWeekDataType={
    id:String,
    StartDay:String,
    age:Number,
    role:String,
    company:String,
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
    {[key:Number]:
        eventDataType
    }
export type eventDataType=
    {
        eventName:String,
        eventStart:String,
        eventEnd:String,
        eventDescription:String
    }



export type exampleDayDataType =
    {
        userId: String,
        day: String,
        content:
            {
                [key: Number]:
                    {
                        eventName: String,
                        eventStart: String,
                        eventEnd: String,
                        eventDescription: String
                    },

            }
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
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },
    Tuesday:
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },
    Wednesday:
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },
    Thursday:
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },
    Friday:
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },
    Saturday:
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },
    Sunday:
        {[key:number]:
                {   eventName:String,
                    eventStart:String,
                    eventEnd:String,
                    eventDescription:String
                },
        },

}

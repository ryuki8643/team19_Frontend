import {
    currentUserIdDataType,
    exampleDayDataType,
    exampleSearchDataType,
    exampleUserDataType,
    exampleWeekDataType
} from "./ExampleDataType";
//フロントエンド->バックエンド

export const exampleDayData:exampleDayDataType={
    userId:"1234",
    day:"2022/06/07",
    content:

            [
                {
                    eventName:"寝る",
                    eventStart:"12:00",
                    eventEnd:"14:00",
                    eventDescription:"睡眠"
                },

                {
                    eventName:"起きる",
                    eventStart:"14:00",
                    eventEnd:"16:00",
                    eventDescription:"起床"
                }
                ]

}

export const exampleUser:exampleUserDataType=
{
    userId:"1234",
    email:"example@example.com",
    age:20,
    role:"Engineer",
    company:"Yahoo",
}


//バックエンド->フロントエンド
export const exampleSearchData:exampleSearchDataType=
{
    "cIZ9KPVRKCSluw9Oqpx6AAIQMLg1":
        {
            age:29,
            role:"ペンギン",
            company:"Yahoo",
            weekList:
                [
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            value:0
                        },

                ],
        },
    "1234":
        {
            age:20,
            role:"エンジニア",
            company:"Yahoo",
            weekList:
                [
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            value:0},

                        {
                            day:"2022/06/20",
                            dayCount:7,
                            value:0}




                ],

        },
    "2233":
        {
            age:25,
            role:"神",
            company:"Yahoo",
            weekList:
                [
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            value:0
                        },

                ]
    },
}



export const exampleWeekData1:exampleWeekDataType={
    id:"1234",
    StartDay:"2022/06/13",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    Monday:
        [
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },

            {
                eventName:"ミーティング",
            eventStart:"12:00",
            eventEnd:"16:00",
            eventDescription:"偉い人と会議"
            },
        ],
    Tuesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Wednesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

}


export const exampleWeekData2:exampleWeekDataType={
    id:"1234",
    StartDay:"2022/06/20",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    Monday:
        [
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Tuesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Wednesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

    Sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

}



export const exampleWeekData3:exampleWeekDataType={
    id:"2233",
    StartDay:"2022/06/13",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    Monday:
        [
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Tuesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Wednesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    Sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

}

export const exampleWeekData4:exampleWeekDataType={
    id:"cIZ9KPVRKCSluw9Oqpx6AAIQMLg1",
    StartDay:"2022/06/13",
    age:29,
    role:"ペンギン",
    company:"Yahoo",
    Monday:
        [
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Tuesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Wednesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],
    Sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                },

                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        ],

}


export const exampleCurrentIdData:{[key:string]:currentUserIdDataType}={
    "cIZ9KPVRKCSluw9Oqpx6AAIQMLg1":
        {
            age:25,
            role:"神",
            company:"Yahoo"
        }
}

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
    firebaseUid:"1234",
    email:"example@example.com",
    age:20,
    role:"Engineer",
    company:"Yahoo",
}


//バックエンド->フロントエンド
export const exampleSearchData:exampleSearchDataType=
{
    userData:[
        {
            userId:"cIZ9KPVRKCSluw9Oqpx6AAIQMLg1",
            age:29,
            role:"ペンギン",
            company:"Yahoo",
            weekList:
                [
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            eventCount:0
                        },

                ],
        },

        {
            userId:"1234",
            age:20,
            role:"エンジニア",
            company:"Yahoo",
            weekList:
                [
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            eventCount:0},

                        {
                            day:"2022/06/20",
                            dayCount:7,
                            eventCount:0}




                ],

        },

        {
            userId:"2233",
            age:25,
            role:"神",
            company:"Yahoo",
            weekList:
                [
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            eventCount:0
                        },

                ],
        },
        {
            userId:"2224",
            age:21,
            role:"学生",
            company:"Yahoo",
            weekList:
                [
                    {
                        day:"2022/06/13",
                        dayCount:7,
                        eventCount:0
                    },
                    {
                        day: "2022/06/20",
                        dayCount: 7,
                        eventCount: 0
                    }

                ],
        },
        {
            userId:"3334",
            age:19,
            role:"学生",
            company:"Yahoo",
            weekList:
                [
                    {
                        day:"2022/06/13",
                        dayCount:7,
                        eventCount:0
                    },

                ],
        },
        {
            userId:"4444",
            age:20,
            role:"学生",
            company:"Yahoo",
            weekList:
                [
                    {
                        day:"2022/06/06",
                        dayCount:7,
                        eventCount:0
                    },

                ],
        },
    ],
}



export const exampleWeekData1:exampleWeekDataType={
    userId:"1234",
    startDate:"2022/06/13",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    monday:
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
    tuesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    wednesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

}


export const exampleWeekData2:exampleWeekDataType={
    userId:"1234",
    startDate:"2022/06/20",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    monday:
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
    tuesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    wednesday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

    sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

}



export const exampleWeekData3:exampleWeekDataType={
    userId:"2233",
    startDate:"2022/06/13",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    monday:
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
    tuesday:
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
    wednesday:
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
    thursday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    friday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    saturday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],
    sunday:
        [
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        ],

}

export const exampleWeekData4:exampleWeekDataType={
    userId:"cIZ9KPVRKCSluw9Oqpx6AAIQMLg1",
    startDate:"2022/06/06",
    age:29,
    role:"ペンギン",
    company:"Yahoo",
    monday:
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
    tuesday:
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
    wednesday:
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
    thursday:
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
    friday:
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
    saturday:
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
    sunday:
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


export const exampleWeekData5:exampleWeekDataType={
    userId:"2224",
    startDate:"2022/06/13",
    age:21,
    role:"学生",
    company:"Yahoo",
    monday:
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
    tuesday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    wednesday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    thursday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    friday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    saturday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    sunday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],

}


export const exampleWeekData6:exampleWeekDataType={
    userId:"2224",
    startDate:"2022/06/20",
    age:17,
    role:"学生",
    company:"Yahoo",
    monday:
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
    tuesday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    wednesday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    thursday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    friday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    saturday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],

    sunday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],

}



export const exampleWeekData7:exampleWeekDataType={
    userId:"3334",
    startDate:"2022/06/13",
    age:20,
    role:"学生",
    company:"Yahoo",
    monday:
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
    tuesday:
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
    wednesday:
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
    thursday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    friday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    saturday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],
    sunday:
        [
            {   eventName:"コーディング",
                eventStart:"10:00",
                eventEnd:"11:00",
                eventDescription:"プログラミング"
            }
        ],

}

export const exampleWeekData8:exampleWeekDataType={
    userId:"4444",
    startDate:"2022/06/06",
    age:17,
    role:"学生",
    company:"Yahoo",
    monday:
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
    tuesday:
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
    wednesday:
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
    thursday:
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
    friday:
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
    saturday:
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
    sunday:
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

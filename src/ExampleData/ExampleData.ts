import {
    currentUserIdDataType,
    exampleDayDataType,
    exampleSearchDataType,
    exampleUserDataType,
    exampleWeekDataType
} from "./ExampleDataType";
//フロントエンド->バックエンド

export const exampleDayData: exampleDayDataType = {
    userId: 1234,
    date: "2022/06/07",
    events:

        [
            {
                name: "寝る",
                startTime: "12:00",
                endTime: "14:00",
                description: "睡眠"
            },

            {
                name: "起きる",
                startTime: "14:00",
                endTime: "16:00",
                description: "起床"
            }
        ]

}

export const exampleUser: exampleUserDataType =
{
    firebaseUid: "1234",
    email: "example@example.com",
    age: 20,
    role: "Engineer",
    company: "Yahoo",
}


//バックエンド->フロントエンド
export const exampleSearchData: exampleSearchDataType =
{
    userData: [
        {
            userId: "cIZ9KPVRKCSluw9Oqpx6AAIQMLg1",
            age: 29,
            role: "ペンギン",
            company: "Yahoo",
            weekData:
                [

                    {
                        date: "2022/06/13",
                        dateCount: 7,
                        eventCount: 5
                    },

                ],
        },

        {
            userId: "1234",
            age: 20,
            role: "エンジニア",
            company: "Yahoo",
            weekData:
                [
                    {
                        date: "2022/06/13",
                        dateCount: 7,
                        eventCount: 4
                    },

                    {
                        date: "2022/06/20",
                        dateCount: 7,
                        eventCount: 2
                    }




                ],

        },

        {
            userId: "2233",
            age: 25,
            role: "神",
            company: "Yahoo",
            weekData:
                [
                    {
                        date: "2022/06/13",
                        dateCount: 7,
                        eventCount: 6
                    },

                ],
        },
        {
            userId: "2224",
            age: 21,
            role: "学生",
            company: "Yahoo",
            weekData:
                [
                    {
                        date: "2022/06/13",
                        dateCount: 7,
                        eventCount: 22
                    },
                    {
                        date: "2022/06/20",
                        dateCount: 7,
                        eventCount: 11
                    }

                ],
        },
        {
            userId: "3334",
            age: 19,
            role: "学生",
            company: "Yahoo",
            weekData:
                [
                    {
                        date: "2022/06/13",
                        dateCount: 7,
                        eventCount: 0
                    },

                ],
        },
        {
            userId: "4444",
            age: 20,
            role: "学生",
            company: "Yahoo",
            weekData:
                [
                    {
                        date: "2022/06/06",
                        dateCount: 7,
                        eventCount: 7
                    },

                ],
        },
    ],
}



export const exampleWeekData1: exampleWeekDataType = {
    userId: "1234",
    startDate: "2022/06/13",
    age: 20,
    role: "エンジニア",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            },
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

}


export const exampleWeekData2: exampleWeekDataType = {
    userId: "1234",
    startDate: "2022/06/20",
    age: 20,
    role: "エンジニア",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

}



export const exampleWeekData3: exampleWeekDataType = {
    userId: "2233",
    startDate: "2022/06/13",
    age: 20,
    role: "エンジニア",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

}

export const exampleWeekData4: exampleWeekDataType = {
    userId: "cIZ9KPVRKCSluw9Oqpx6AAIQMLg1",
    startDate: "2022/06/06",
    age: 29,
    role: "ペンギン",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],

}


export const exampleCurrentIdData: { [key: string]: currentUserIdDataType } = {
    "cIZ9KPVRKCSluw9Oqpx6AAIQMLg1":
    {
        age: 25,
        role: "神",
        company: "Yahoo"
    }
}


export const exampleWeekData5: exampleWeekDataType = {
    userId: "2224",
    startDate: "2022/06/13",
    age: 21,
    role: "学生",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            },
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

}


export const exampleWeekData6: exampleWeekDataType = {
    userId: "2224",
    startDate: "2022/06/20",
    age: 17,
    role: "学生",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

}



export const exampleWeekData7: exampleWeekDataType = {
    userId: "3334",
    startDate: "2022/06/13",
    age: 20,
    role: "学生",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],
    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            }
        ],

}

export const exampleWeekData8: exampleWeekDataType = {
    userId: "4444",
    startDate: "2022/06/06",
    age: 17,
    role: "学生",
    company: "Yahoo",
    monday:
        [
            {
                name: "コーディング",
                startTime: "9:00",
                endTime: "12:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    tuesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    wednesday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    thursday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    friday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    saturday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],
    sunday:
        [
            {
                name: "コーディング",
                startTime: "10:00",
                endTime: "11:00",
                description: "プログラミング"
            },

            {
                name: "ミーティング",
                startTime: "12:00",
                endTime: "16:00",
                description: "偉い人と会議"
            }
        ],

}

import {exampleDayDataType,exampleSearchDataType,exampleUserDataType,exampleWeekDataType} from "./ExampleDataType";
//フロントエンド->バックエンド

export const exampleDayData:exampleDayDataType={
    userId:"1234",
    day:"2022/06/07",
    content:
        {
            1:
                {
                    eventName:"寝る",
                    eventStart:"12:00",
                    eventEnd:"14:00",
                    eventDescription:"睡眠"
                },
            2:
                {
                    eventName:"起きる",
                    eventStart:"14:00",
                    eventEnd:"16:00",
                    eventDescription:"起床"
                }
        }
}

export const exampleUser:exampleUserDataType=
{
    userName:"example",
    email:"example@example.com",
    age:20,
    role:"Engineer",
    company:"Yahoo",
}


//バックエンド->フロントエンド
export const exampleSearchData:exampleSearchDataType=
{
    "1234":
        {
            age:20,
            role:"エンジニア",
            company:"Yahoo",
            weekList:
                {
                    1:
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            value:0},
                    2:
                        {
                            day:"2022/06/20",
                            dayCount:7,
                            value:0}




                },

        },
    "2233":
        {
            age:25,
            role:"神",
            company:"Yahoo",
            weekList:
                {1:
                        {
                            day:"2022/06/13",
                            dayCount:7,
                            value:0
                        },

                },
    },
}



export const exampleWeekData1:exampleWeekDataType={
    id:"1234",
    StartDay:"2022/06/13",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    Monday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },
        2:
            {
                eventName:"ミーティング",
            eventStart:"12:00",
            eventEnd:"16:00",
            eventDescription:"偉い人と会議"
            },
        },
    Tuesday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Wednesday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Thursday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Friday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Saturday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Sunday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },

}


export const exampleWeekData2:exampleWeekDataType={
    id:"1234",
    StartDay:"2022/06/20",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    Monday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },
            2:
                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        },
    Tuesday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Wednesday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Thursday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Friday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Saturday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },

    Sunday:
        {1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },

}



export const exampleWeekData3:exampleWeekDataType={
    id:"2233",
    StartDay:"2022/06/13",
    age:20,
    role:"エンジニア",
    company:"Yahoo",
    Monday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"9:00",
                    eventEnd:"12:00",
                    eventDescription:"プログラミング"
                },
            2:
                {   eventName:"ミーティング",
                    eventStart:"12:00",
                    eventEnd:"16:00",
                    eventDescription:"偉い人と会議"
                }
        },
    Tuesday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Wednesday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Thursday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Friday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Saturday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },
    Sunday:
        {
            1:
                {   eventName:"コーディング",
                    eventStart:"10:00",
                    eventEnd:"11:00",
                    eventDescription:"プログラミング"
                }
        },

}

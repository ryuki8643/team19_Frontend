
import {exampleWeekDataType} from "../ExampleData/ExampleDataType";
import {
    exampleWeekData1,
    exampleWeekData2,
    exampleWeekData3, exampleWeekData4,
    exampleWeekData5,
    exampleWeekData6,
    exampleWeekData7,
    exampleWeekData8,
} from "../ExampleData/ExampleData";

export type axiosDataExchangeType={
    (setSample:(sample:exampleWeekDataType)=>void,userId:string,startDate:string):void
}

export const DataExchangeExample:{[key:string]:{[key:string]:exampleWeekDataType}}={

    "cIZ9KPVRKCSluw9Oqpx6AAIQMLg1":{
        "2022/06/06":exampleWeekData4,
        "2022/06/13":exampleWeekData3,


    },
    "1234":{
        "2022/06/13":exampleWeekData1,
        "2022/06/20":exampleWeekData2,

    },
    "2233":{
        "2022/06/13":exampleWeekData3,


    },
    "2224":{
        "2022/06/13":exampleWeekData5,
        "2022/06/20":exampleWeekData6,
    },
    "3334":{
        "2022/06/13":exampleWeekData7,
    },
    "4444":{
        "2022/06/06":exampleWeekData8,
    },


}
export const DataExchangeExampleAPI:axiosDataExchangeType=(setSample:(sample:exampleWeekDataType)=>void,userId:string,startDate:string):void=>{
    setSample( DataExchangeExample[userId][startDate])

}



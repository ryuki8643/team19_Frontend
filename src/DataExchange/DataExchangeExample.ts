import { exampleWeekData1, exampleWeekData2, exampleWeekData3} from "../ExampleData/ExampleData";
import {exampleWeekDataType} from "../ExampleData/ExampleDataType";

export type axiosDataExchangeType={
    [key:string]:{[key:string]:exampleWeekDataType}
}

export const DataExchangeExample:{[key:string]:{[key:string]:exampleWeekDataType}}={
    "1234":{
        "2022/06/13":exampleWeekData1,
        "2022/06/20":exampleWeekData2,

    },
    "2233":{
        "2022/06/13":exampleWeekData3,


    }


}



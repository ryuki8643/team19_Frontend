
import axios from 'axios';
import {exampleDayDataType, exampleSearchDataType, exampleUserDataType, exampleWeekDataType} from "../ExampleData/ExampleDataType";
import {exampleSearchData} from "../ExampleData/ExampleData";
import {axiosDataExchangeType, DataExchangeExample, DataExchangeExampleAPI} from "./DataExchangeExample";
import {sortData} from "../weekDataShowPage/fullCarendar/functions/sortData";

interface jsonType {
    id:number,
    data:string,
    flag:boolean
}

const URL=""
export const SearchDataAPI =async (setSample:(sample:exampleSearchDataType)=>void,setConnect:(connect:boolean)=>void)=>{

    const response=await axios
        .get<exampleSearchDataType>(URL+"/users")
        .then((results) => {
            let return_Json = results.data;
            console.log("通信成功");


            // 成功したら取得できたデータを返す
            if (return_Json.userData){
                console.log(return_Json);
                setConnect(true)
                setSample(sortData({userData:exampleSearchData.userData.concat(return_Json.userData)}))};
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            setSample(sortData(exampleSearchData))
            // 失敗したときは空のjsonを返す
        });
}

export const WeekDataAPI:axiosDataExchangeType =async (setSample:(sample:exampleWeekDataType)=>void,userId:string,startDate:string)=>{

    if(Object.keys(DataExchangeExample).indexOf(userId)>-1){DataExchangeExampleAPI(setSample,userId,startDate)}else{

    console.log(Object.keys(DataExchangeExample).indexOf(userId),"値",userId,Object.keys(DataExchangeExample))
    const response=await axios
        .get<exampleWeekDataType>(URL+"/users/"+userId,{params:{startDate:startDate}})
        .then((results) => {
            let return_Json = results.data;


            console.log("通信成功")
            // 成功したら取得できたデータを返す
            if (return_Json.userId){
                console.log(return_Json);
            setSample(return_Json)};
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            // 失敗したときは空のjsonを返す
        });
    }
}

export const SignUpPostAPI =async (UserData:exampleUserDataType)=>{



    const response=await axios
        .post(URL+"/users",UserData)
        .then((results) => {



            console.log("通信成功")
            // 成功したら取得できたデータを返す

        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            // 失敗したときは空のjsonを返す
        });

}

export const DayDataPostAPI =async (dayData:exampleDayDataType)=>{



        const response=await axios
            .post(URL+"/events",dayData)
            .then((results) => {



                console.log("通信成功")
                // 成功したら取得できたデータを返す

            })
            .catch((error) => {
                console.log('通信失敗');
                console.log(error.status);
                // 失敗したときは空のjsonを返す
            });

}

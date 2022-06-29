
import axios from 'axios';
import {
    eventDataType,
    exampleDayDataType,
    exampleSearchDataType,
    exampleUserDataType,
    exampleWeekDataType,
    getSearchDataType, getUserDataType, getWeekDataType
} from "../ExampleData/ExampleDataType";
import { exampleSearchData } from "../ExampleData/ExampleData";
import { axiosDataExchangeType, DataExchangeExample, DataExchangeExampleAPI } from "./DataExchangeExample";
import { sortData } from "../weekDataShowPage/fullCarendar/functions/sortData";

interface jsonType {
    id: number,
    data: string,
    flag: boolean
}

const URL = "http://localhost:8000"
export const SearchDataAPI = async (setSample: (sample: exampleSearchDataType) => void, setConnect: (connect: boolean) => void) => {

    const response = await axios
        .get<getSearchDataType>(URL + "/users")
        .then((results) => {
            let return_Json = results.data as getSearchDataType;
            console.log("通信成功");


            // 成功したら取得できたデータを返す
            if (return_Json) {
                console.log(exampleSearchData.userData,return_Json);

                const transData=return_Json.filter((elem)=>{return elem.weekData}).map((value, index, array)=>{
                    return {userId:value.userId.toString(),age:value.age,company:value.company,role:value.role,weekData:value.weekData}
                })
                console.log(transData)
                console.log(exampleSearchData.userData.concat(transData))
                setConnect(true)
                setSample(sortData({ userData: exampleSearchData.userData.concat(transData) }))
                console.log("合体成功")
            };
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            setSample(sortData(exampleSearchData))
            // 失敗したときは空のjsonを返す
        });
}

export const WeekDataAPI: axiosDataExchangeType = async (setSample: (sample: exampleWeekDataType) => void, userId: string, startDate: string) => {

    if (Object.keys(DataExchangeExample).indexOf(userId) > -1) { DataExchangeExampleAPI(setSample, userId, startDate) } else {

        console.log(Object.keys(DataExchangeExample).indexOf(userId), "値", userId, Object.keys(DataExchangeExample))
        const response = await axios
            .get<getWeekDataType>(URL + "/users/" + userId, { params: { startDate: startDate.replace("/","-").replace("/","-") } })
            .then((results) => {
                let return_Json = results.data;


                console.log("通信成功")
                // 成功したら取得できたデータを返す
                if (return_Json.userId) {
                    const transData={
                        userId: return_Json.userId.toString(),
                        startDate: return_Json.startDate,
                        age: return_Json.age,
                        role: return_Json.role,
                        company: return_Json.company,
                        monday:
                            return_Json.monday,
                        tuesday:
                            return_Json.tuesday,
                        wednesday:
                            return_Json.wednesday,
                        thursday:
                            return_Json.thursday,
                        friday:
                            return_Json.friday,
                        saturday:
                            return_Json.saturday,
                        sunday:
                            return_Json.sunday,

                    }
                    console.log(return_Json);
                    setSample(transData)
                };
            })
            .catch((error) => {
                console.log('通信失敗');
                console.log(error.status);
                // 失敗したときは空のjsonを返す
            });
    }
}

export const userIdAPI = async (setSample: (sample: getUserDataType) => void,uuid:string) => {

    const response = await axios
        .get<getUserDataType>(URL + "/firebase/"+uuid)
        .then((results) => {
            let return_Json = results.data ;
            console.log("通信成功",return_Json);
            setSample(return_Json)




        })
        .catch((error) => {
            console.log('通信失敗',"ユーザーデータ");
            console.log(error.status);


        });
}


export const SignUpPostAPI = async (UserData: exampleUserDataType) => {



    const response = await axios
        .post(URL + "/users", UserData)
        .then((results) => {



            console.log("通信成功",UserData,"ユーザー")
            // 成功したら取得できたデータを返す

        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            // 失敗したときは空のjsonを返す
        });

}

export const DayDataPostAPI = async (dayData: exampleDayDataType) => {



    const response = await axios
        .post(URL + "/events", dayData)
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

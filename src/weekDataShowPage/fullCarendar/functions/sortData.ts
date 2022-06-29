import {exampleSearchDataType} from "../../../ExampleData/ExampleDataType";

export const sortData=(searchData:exampleSearchDataType):exampleSearchDataType=>{
    let sortResult=searchData.userData.filter((elem)=>{return elem.weekData.length>0}).sort(function (a,b){
        return (calcScore(a.weekData) <calcScore(b.weekData)) ? 1 :-1;
    }

    )
    console.log(sortResult,"ソート")
    return {userData:sortResult}

}

const calcScore=(reduceData:{
    date:string,
    dateCount:number,
    eventCount:number}[])=>{
    const initialValue = 0;
    let reduceResult=reduceData.reduce((previousValue,currentValue)=>
        previousValue + currentValue.dateCount*currentValue.eventCount,
            initialValue
    )

    return reduceResult



}

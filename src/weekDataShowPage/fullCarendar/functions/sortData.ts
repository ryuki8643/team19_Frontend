import {exampleSearchDataType} from "../../../ExampleData/ExampleDataType";

export const sortData=(searchData:exampleSearchDataType):exampleSearchDataType=>{
    let sortResult=searchData.userData.sort(function (a,b){
        return (calcScore(a.weekList) <calcScore(b.weekList)) ? 1 :-1;
    }

    )
    console.log(sortResult,"ソート")
    return {userData:sortResult}

}

const calcScore=(reduceData:{
    day:string,
    dayCount:number,
    eventCount:number}[])=>{
    const initialValue = 0;
    let reduceResult=reduceData.reduce((previousValue,currentValue)=>
        previousValue + currentValue.dayCount*currentValue.eventCount,
            initialValue
    )

    return reduceResult



}

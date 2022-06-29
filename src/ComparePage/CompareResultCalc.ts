import {eventDataType, exampleWeekDataType} from "../ExampleData/ExampleDataType";

const reduceObject=(dayData:eventDataType[],initialValue:{[key:string]:number})=>{
    return dayData.reduce(

        function(previousValue, currentValue){
            if (previousValue[currentValue.eventName]) {
                previousValue[currentValue.eventName]+=Number(currentValue.eventEnd.split(":")[0])*60+Number(currentValue.eventEnd.split(":")[1])-
                    Number(currentValue.eventStart.split(":")[0])*60+Number(currentValue.eventStart.split(":")[1])
                return previousValue
            } else {
                previousValue[currentValue.eventName]=Number(currentValue.eventEnd.split(":")[0])*60+Number(currentValue.eventEnd.split(":")[1])-
                    Number(currentValue.eventStart.split(":")[0])*60+Number(currentValue.eventStart.split(":")[1])
                return previousValue
            }

        },
        initialValue
    )

}


export const compareResultCalc=(userData:exampleWeekDataType,compareData:exampleWeekDataType,setResult:(result:number)=>void):void=>{
    const initialValue1 = {} as {[key:string]:number};
    const mon1=reduceObject(userData.monday,initialValue1)
    const tue1=reduceObject(userData.tuesday,mon1)
    const wed1=reduceObject(userData.wednesday,tue1)
    const thu1=reduceObject(userData.thursday,wed1)
    const fri1=reduceObject(userData.friday,thu1)
    const sat1=reduceObject(userData.saturday,fri1)
    const sun1=reduceObject(userData.sunday,sat1)

    const initialValue2 = {} as {[key:string]:number};
    const mon2=reduceObject(compareData.monday,initialValue2)
    const tue2=reduceObject(compareData.tuesday,mon2)
    const wed2=reduceObject(compareData.wednesday,tue2)
    const thu2=reduceObject(compareData.thursday,wed2)
    const fri2=reduceObject(compareData.friday,thu2)
    const sat2=reduceObject(compareData.saturday,fri2)
    const sun2=reduceObject(compareData.sunday,sat2)


    const sumOfData=Math.max(Object.values(sun2).reduce(function(a, b) {

        return a + b;

    }),Object.values(sun1).reduce(function(a, b) {

            return a + b;

        })
    )
    let result=Object.keys(sun1).reduce(
        function(previousValue, currentValue){
            if (sun2[currentValue]) {

                if (sun2[currentValue]<=sun1[currentValue]){
                    return previousValue+sun2[currentValue]
                }
                else{
                    return previousValue+sun1[currentValue]
                }


            } else {
                return previousValue
            }

        },
        0
    )
    console.log(sun1,sun2,"ペンギン",result,sumOfData)
    setResult(Math.round(result*100/sumOfData))


}




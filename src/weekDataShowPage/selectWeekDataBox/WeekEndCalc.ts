export const WeekEndCalc=(day:string)=>{
    let date=new Date(day)
    if (date){
    date.setDate(date.getDate()+6)

        const month=date.getMonth()+1
    return date.getFullYear()+"/"+month+"/"+date.getDate()

    } else {
        return ""
    }
}

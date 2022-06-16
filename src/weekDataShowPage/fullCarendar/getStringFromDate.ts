export const getStringFromDate=(dateStr:string,plusDate:number)=> {
    let preDate:Date=new Date(dateStr)
    let date=new Date(preDate.setDate(preDate.getDate() + plusDate))



    let year_str = date.getFullYear().toString();
    //月だけ+1すること
    let month_str = (date.getMonth()+1).toString();
    let day_str = date.getDate().toString();



    month_str = ('00' + month_str).slice(-2);
    day_str = ('00' + day_str).slice(-2);


    let format_str = 'YYYY-MM-DD';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);


    return format_str;
};

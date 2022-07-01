import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useEffect} from "react";
import {Autocomplete, TextField} from "@mui/material";
import {WeekEndCalc} from "./WeekEndCalc";
import {useWindowSize} from "../../SearchPage/windowSize";

type SelectWeekDataType={
    UserId:string
    weekShowStart:string
    searchTree:{[key:string]:string[]}

    SetWeekShowStart(id:string):void
}
const SelectWeekDataBox2 = (SelectWeekDataProps:SelectWeekDataType) => {
    const width=useWindowSize()
    const handleChange = (event: SelectChangeEvent) => {
        if(event.target.value){SelectWeekDataProps.SetWeekShowStart(event.target.value as string)};
    };
    const autoCompleteHandleChange=(value: {week:string,text:string}|null)=>{
        if(value){
            SelectWeekDataProps.SetWeekShowStart(value.week)
        }
    }
    const which=true


    const weekDataAutoCompleteObject={} as {[key:string]: {week:string,text:string}}
    (SelectWeekDataProps.searchTree[SelectWeekDataProps.UserId]

    ).forEach((value:string)=>{
        if (width<700){
            weekDataAutoCompleteObject[value]={week:value,text:value+"の週"}
        } else if(width>750){
        weekDataAutoCompleteObject[value]={week:value,text:value+"~"+WeekEndCalc(value)}
    } else {
            weekDataAutoCompleteObject[value]={week:value,text:value+"の週"}
        }
    })


    useEffect(()=>{


        if(SelectWeekDataProps.UserId)
                SelectWeekDataProps.SetWeekShowStart(SelectWeekDataProps.searchTree[SelectWeekDataProps.UserId][0])

    },[SelectWeekDataProps.UserId])

    return (
        <FormControl fullWidth>
            {!which && <><InputLabel id="demo-simple-select-label">Weeks</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={SelectWeekDataProps.weekShowStart}
                    label="Weeks"
                    onChange={handleChange}
                >
                    {(SelectWeekDataProps.searchTree[SelectWeekDataProps.UserId]

                    ).map((value) => {
                        return (
                            <MenuItem value={value}
                                      key={value}>{value.replace("/", "年").replace("/", "月")}</MenuItem>
                        )
                    })}


                </Select></>}
            {which && <Autocomplete

                sx={{margin:2}}


                renderInput={(params) => <TextField {...params} label="Weeks" sx={{fontSize:"1px"}} /> }
                getOptionLabel={(option) => option.text}
                options={Object.values(weekDataAutoCompleteObject)}
                value={weekDataAutoCompleteObject[SelectWeekDataProps.weekShowStart]}
                onChange={(event, value, reason, details)=>{
                    autoCompleteHandleChange(value)
                }}

            />}

        </FormControl>)
}

export default SelectWeekDataBox2

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {exampleSearchDataType} from "../../ExampleData/ExampleDataType";
import {Autocomplete,TextField} from "@mui/material";
import {useEffect, useState} from "react";

type SelectWeekDataType={
    UserId:string
    SearchData:exampleSearchDataType
    SetUserId(id:string):void

}
const SelectWeekDataBox = (SelectWeekDataProps:SelectWeekDataType) => {
    const [autocompleteValue,setAutocompleteValue]=useState(Object.keys(SelectWeekDataProps.SearchData)[0] )
    const handleChange = (event: SelectChangeEvent) => {
        if(event.target.value){SelectWeekDataProps.SetUserId(event.target.value as string);}
    };
    const autocompleteHandleClick=(value:{user:string,text:string}|null)=>{
        if(value){
            SelectWeekDataProps.SetUserId(value.user)}
    }
    const autoCompleteObject={} as {[key:string]:{user:string,text:string}}
    Object.keys(SelectWeekDataProps.SearchData).forEach((value)=>{
        autoCompleteObject[value]={user:value,text:SelectWeekDataProps.SearchData[value].company+" "+SelectWeekDataProps.SearchData[value].age+"歳 "+SelectWeekDataProps.SearchData[value].role}

    })

    const which=true




    return (
        <FormControl fullWidth>
            {!which && <>
                <InputLabel id="demo-simple-select-label">Users</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={SelectWeekDataProps.UserId}
                label="Users"
                onChange={handleChange}
                >
            {Object.keys(SelectWeekDataProps.SearchData).map((value)=>{
                return(
                <MenuItem value={value} key={value}>{SelectWeekDataProps.SearchData[value].company+" "+SelectWeekDataProps.SearchData[value].age+"歳 "+SelectWeekDataProps.SearchData[value].role}</MenuItem>
                )
            })}
                </Select></>}

            {which && <Autocomplete
                renderInput={(params) => <TextField {...params} label="Users" /> }
                options={Object.values(autoCompleteObject)}
                value={autoCompleteObject[SelectWeekDataProps.UserId]}
                getOptionLabel={(option) => option.text}
                onChange={((event, value, reason, details) => {
                    autocompleteHandleClick(value)
                })}/>}
        </FormControl>)
}

export default SelectWeekDataBox

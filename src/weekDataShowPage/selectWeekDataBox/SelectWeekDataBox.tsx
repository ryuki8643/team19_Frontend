import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {exampleSearchDataType} from "../../ExampleData/ExampleDataType";

type SelectWeekDataType={
    UserId:string
    SearchData:exampleSearchDataType
    SetUserId(id:string):void
}
const SelectWeekDataBox = (SelectWeekDataProps:SelectWeekDataType) => {
    const handleChange = (event: SelectChangeEvent) => {
        SelectWeekDataProps.SetUserId(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
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
            </Select>
        </FormControl>)
}

export default SelectWeekDataBox

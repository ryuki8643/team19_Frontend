import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useEffect} from "react";

type SelectWeekDataType={
    UserId:string
    weekShowStart:string
    searchTree:{[key:string]:string[]}

    SetWeekShowStart(id:string):void
}
const SelectWeekDataBox2 = (SelectWeekDataProps:SelectWeekDataType) => {
    const handleChange = (event: SelectChangeEvent) => {
        SelectWeekDataProps.SetWeekShowStart(event.target.value as string);
    };
    useEffect(()=>{


        if(SelectWeekDataProps.UserId)
                SelectWeekDataProps.SetWeekShowStart(SelectWeekDataProps.searchTree[SelectWeekDataProps.UserId][0])

    },[SelectWeekDataProps.UserId])

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Weeks</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={SelectWeekDataProps.weekShowStart}
                label="Weeks"
                onChange={handleChange}
            >
                {(SelectWeekDataProps.searchTree[SelectWeekDataProps.UserId]

                ).map((value)=>{
                    return(
                        <MenuItem value={value} key={value}>{value}の週</MenuItem>
                    )
                })}


            </Select>
        </FormControl>)
}

export default SelectWeekDataBox2

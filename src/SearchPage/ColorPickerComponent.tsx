import {useState} from "react";
import {Input} from "@mui/material";


type colorPicType= {
    SetLineColor(lineColor:string):void;
}
export default function ColorPic(props:colorPicType) {
    const [color, setColor] = useState<string>("#000000");

    return (


            <Input
                sx={[{



                    color:"white",
                    backgroundColor:'#FF6600',
                    borderBottom:"5px solid orangered",
                    borderRight:"5px solid orangered",
                    borderRadius:"10px",
                    flexGrow:1,


                    margin:"2%",



                },{'&:hover': {
                        backgroundColor:'#FF6600',
                        borderBottom:"2px solid orangered",
                        borderRight:"2px solid orangered",
                    }}]}
                type="color"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    props.SetLineColor(e.target.value)
                }}

            />

    );
};

import React, {useRef, useState} from 'react';
import ColorPic from "./ColorPickerComponent";
import {Box, Button, Container, Paper} from "@mui/material";
import {useWindowSize} from "./windowSize";
interface IProps {
    width: number;
    height: number;
}

interface IRect {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
}

export const DrawPaint: React.FC<IProps> = (props) => {
    const { width, height } = props
    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    let mouseX: number | null = null;
    let mouseY: number | null = null;
    const [png, setPng] = useState<string | null>(null)
    const [lineColor,setLineColor]=useState("#000000")

    let widthSize=useWindowSize()
    const getContext = (): CanvasRenderingContext2D => {
        const canvas: any = canvasRef.current;
        return canvas.getContext('2d');
    };
    const aref=useRef<HTMLAnchorElement>(null)

    const OnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (e.button !== 0) { return; }
        const canvas: any = canvasRef.current;
        const rect: IRect = canvas.getBoundingClientRect();
        const x = ~~(e.clientX - rect.left);
        const y = ~~(e.clientY - rect.top);
        Draw(x, y);
    }

    const OnMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (e.buttons !== 1) { return; }
        const canvas: any = canvasRef.current;
        const rect: IRect = canvas.getBoundingClientRect();
        const x = ~~(e.clientX - rect.left);
        const y = ~~(e.clientY - rect.top);
        Draw(x, y);
    }

    const DrawEnd = (e: React.MouseEvent<HTMLCanvasElement>) => {
        mouseX = null;
        mouseY = null;
    }
    const Save =() =>{
        const canvas: any = canvasRef.current;
        const imgS=canvas.toDataURL('image/png',2)
        setPng(imgS)


    }
    const Draw = (x: number, y: number) => {
        const ctx = getContext();
        ctx.beginPath();
        ctx.globalAlpha = 1.0;
        if (mouseX === null || mouseY === null) {
            ctx.moveTo(x, y);
        } else {
            ctx.moveTo(mouseX, mouseY);
        }
        ctx.lineTo(x, y);
        ctx.lineCap = "round";
        ctx.lineWidth = 10;
        ctx.strokeStyle= lineColor;
        ctx.stroke();
        mouseX = x;
        mouseY = y;
        Save()
    }

    const Reset = () => {
        const ctx = getContext();
        ctx.clearRect(0, 0, width, height);
    }





    return (
        <Container  sx={{marginTop:2}} >
        <Paper elevation={5} sx={{borderRadius:"10px"}}>
            <div>
                <canvas onMouseDown={OnClick}
                        onMouseMove={OnMove}
                        onMouseUp={DrawEnd}
                        onMouseOut={DrawEnd}
                        ref={canvasRef}
                        width={widthSize-80}

                />
            </div>
            <Box sx={{display:"flex"}}>
            <ColorPic SetLineColor={setLineColor}/>

            <Button onClick={Reset} sx={[{



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
                }}]}>リセット</Button>


            <Button onClick={()=>aref?.current?.click()} sx={[{



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
                }}]}>保存</Button>




            {png && (
                    <a href={png} download={true} ref={aref}></a>
            )}
            </Box>
        </Paper>
        </Container>
    );
}



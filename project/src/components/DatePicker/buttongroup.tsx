import { Component } from "react";
import { CustomButton } from "./button";
import Stack from '@mui/material/Stack';

export default function ButtonGroupComponent(props: any) {
    
     function onclickCancel() {
        console.log("Cancel Clicked");
    }

    function onclickDone() {
        console.log("Done Clicked");
    }
    
    return(
            <Stack direction = "row" spacing = {2} style = {{ margin: 15, marginLeft: 60}}>
                <CustomButton innerText="CANCEL" backgroundColor = "white" color = "gray" onClick = { onclickCancel } borderRadius = '16px' width = "130px" > </CustomButton>
                <CustomButton innerText = "DONE" backgroundColor = "#f355e7" onClick = { onclickDone } borderRadius = '16px' width = "130px" > </CustomButton>
            </Stack>
        );
    
}

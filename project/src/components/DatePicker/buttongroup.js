import { Component } from "react";
import CustomButton from "./button";
import Stack from '@mui/material/Stack';

class ButtonGroupComponent extends Component {
    constructor(props){
        super(props);
    }

    onclickCancel = () => {
        console.log("Cancel Clicked");
    }

    onclickDone = () => {
        console.log("Done Clicked");
    }

    render() {
        return (
            <Stack direction="row" spacing={2} style={{margin: 15}}>
                <CustomButton innerText="CANCEL" backgroundColor="white" color="gray" onClick={this.onclickCancel} borderRadius='16px' width="130px"></CustomButton>
                <CustomButton innerText="DONE" backgroundColor="#f355e7" onClick={this.onclickDone} borderRadius='16px' width="130px"></CustomButton>
            </Stack>
        );
    }
}

export default ButtonGroupComponent;
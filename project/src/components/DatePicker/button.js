import { Button } from "@mui/material";
import { Component } from "react";

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
            id = {this.props.id}
            variant="contained"
            onClick = {this.props.onClick}
            endIcon = {this.props.icon}
            style={{
                    borderRadius: this.props.borderRadius,
                    backgroundColor: this.props.backgroundColor,
                    width: this.props.width,
                    color: this.props.color
                }}>
                {this.props.innerText}
            </Button>
        );
    }
}


export default ButtonComponent;
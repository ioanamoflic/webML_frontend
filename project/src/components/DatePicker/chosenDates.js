import { Component } from "react";
import { Stack, Paper, Button, stepButtonClasses } from "@mui/material";

class ChosenDates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack direction="row" style={{ marginBottom: this.props.marginBottom }}>
                <Button disabled="true" variant="outlined" 
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    background: this.props.background,
                    borderTopLeftRadius: this.props.radius,
                    borderBottomLeftRadius: this.props.radius,
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderColor: this.props.borderColor
                }}>
                    <div style={{textAlign: this.props.textAlign}}>
                        Start date
                        <div
                            style={{
                                color: this.props.leftDateColor,
                                fontWeight: this.props.fontWeight,
                                fontSize: this.props.fontSize
                            }}>{this.props.startDate}</div>
                    </div>
                </Button>
                <Button disabled="true" variant="outlined"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    background: this.props.background,
                    borderTopRightRadius: this.props.radius,
                    borderBottomRightRadius: this.props.radius,
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    borderColor: this.props.borderColor
                }}>
                    <div style={{textAlign: this.props.textAlign}}>
                        End date
                        <div
                            style={{
                                color: this.props.rightDateColor,
                                fontWeight: this.props.fontWeight,
                                fontSize: this.props.fontSize
                            }}>
                            {this.props.endDate}</div>
                    </div>
                </Button>
            </Stack>
        );
    }
}

export default ChosenDates;
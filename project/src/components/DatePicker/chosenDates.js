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
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderColor: this.props.borderColor
                }}>
                    <div style={{textAlign: this.props.textAlign, fontSize: 10}}>
                        Start date
                        <div
                            style={{
                                color: this.props.leftDateColor,
                                fontWeight: 'bold',
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
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderColor: this.props.borderColor
                }}>
                    <div style={{textAlign: this.props.textAlign, fontSize: 10}}>
                        End date
                        <div
                            style={{
                                color: this.props.rightDateColor,
                                fontWeight: 'bold',
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
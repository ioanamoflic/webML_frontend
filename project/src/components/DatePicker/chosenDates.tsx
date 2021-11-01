import { Component } from "react";
import { Stack, Button } from "@mui/material";

export default function ChosenDates(props: any) {
    return (
        <Stack direction="row" style={{ marginBottom: props.marginBottom }}>
            <Button disabled variant="outlined"
                style={{
                    width: props.width,
                    height: props.height,
                    background: props.background,
                    borderTopLeftRadius: props.radius,
                    borderBottomLeftRadius: props.radius,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderColor: props.borderColor
                }}>
                <div style={{ textAlign: props.textAlign, fontSize: 10 }}>
                    Start date
                        <div
                        style={{
                            color: props.leftDateColor,
                            fontWeight: 'bold',
                            fontSize: props.fontSize
                        }}>{props.startDate}</div>
                </div>
            </Button>
            <Button disabled variant="outlined"
                style={{
                    width: props.width,
                    height: props.height,
                    background: props.background,
                    borderTopRightRadius: props.radius,
                    borderBottomRightRadius: props.radius,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderColor: props.borderColor
                }}>
                <div style={{ textAlign: props.textAlign, fontSize: 10 }}>
                    End date
                        <div
                        style={{
                            color: props.rightDateColor,
                            fontWeight: 'bold',
                            fontSize: props.fontSize
                        }}>
                        {props.endDate}</div>
                </div>
            </Button>
        </Stack>
    );
}

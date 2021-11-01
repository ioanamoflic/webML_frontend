import { Button } from "@mui/material";

export const CustomButton = (props: any) => (
            <Button
            id = {props.id}
            variant="contained"
            onClick = {props.onClick}
            endIcon = {props.icon}
            style={{
                    borderRadius: props.borderRadius,
                    backgroundColor: props.backgroundColor,
                    width: props.width,
                    color: props.color
                }}>
                    {props.innerText}
            </Button>
)

            

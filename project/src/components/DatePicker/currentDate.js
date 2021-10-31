import { Component } from "react";
import { Stack, Paper, Menu, MenuItem, Button, TextField } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';


class CurrentDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick = () => {
        this.setState({ anchorEl: true });
    };

    handleClose = () => {
        this.setState({ anchorEl: false });
    };

    render() {
        const open = Boolean(this.state.anchorEl)
        return (
            <Stack direction="row" style={styles.bgColor} divider={<Divider orientation="vertical" flexItem color="white" />}>
                <Paper elevation={0} style={{ width: 100, backgroundColor: 'inherit' }}>
                    <p style={{color: "white", align: "center", marginTop: 5, marginLeft: 15}}><b>01</b><br/> TODAY</p>
                </Paper>
                <Paper elevation={0} style={{ backgroundColor: 'inherit' }}>
                    <Button endIcon={<ArrowDropDownIcon />} style={{ width: 200, height: 50, color: 'white' }}>
                        NOVEMBER
                    </Button>
                </Paper>
                <Paper elevation={0} style={{ backgroundColor: 'inherit' }}>
                    <Button endIcon={<ArrowDropDownIcon />} style={{ width: 100,  height: 50, color: 'white' }}>
                        2021
                    </Button>
                </Paper>
            </Stack>
        );

    }

}

export default CurrentDate;

const styles = {
    bgColor: {
        background: 'linear-gradient(135deg, #5087d0, #4d4ab0)',
        height: '50px'
    },
}

//To Be Used: 
{/* <Button
id="basic-button"
aria-controls="basic-menu"
aria-haspopup="true"
aria-expanded={open ? 'true' : undefined}
onClick={this.handleClick}
endIcon={<ArrowDropDownIcon/>}
>
NOVEMBER
</Button>
<Menu
id="basic-menu"
anchorEl={this.state.anchorEl}
open={open}
onClose={this.handleClose}
MenuListProps={{
    'aria-labelledby': 'basic-button',
}}
>
<MenuItem onClick={this.handleClose}>JANUARY</MenuItem>
</Menu> */}
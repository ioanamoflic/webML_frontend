import { Component } from "react";
import { Stack, Paper, Menu, MenuItem, Button, Popover } from "@mui/material";
import ButtonComponent from "./button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


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
            <Stack direction="row">
                <Paper elevation={0} style={{ margin: 10 }} >
                    15 AUG
                </Paper>
                <Paper elevation={0} >
                    <Button
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
                    </Menu>
                </Paper>
                <Paper elevation={0} >
                <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        // onClick={this.handleClick}
                        endIcon={<ArrowDropDownIcon/>}
                    >
                        2021
                    </Button>
                    {/* <Menu
                        id="basic-menu"
                        anchorEl={this.state.anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    </Menu> */}
                </Paper>
            </Stack>
        );

    }

}

export default CurrentDate;
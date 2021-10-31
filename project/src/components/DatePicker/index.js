import { Component } from "react";
import Calendar from './calendar';
import ButtonGroupComponent from "./buttongroup";
import ChosenDates from "./chosenDates";
import CurrentDate from "./currentDate";
import { Paper, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';

class DatePicker extends Component {

    render() {
        return (
            <Stack style={styles.calendarClass}>
                <Paper elevation={0}>
                    <ChosenDates />
                </Paper>
                <Paper elevation={0}>
                    <CurrentDate />
                </Paper>
                <Divider/>
                <Paper style={styles.insideCalendar} elevation={2}>
                    <Calendar />
                </Paper>
                <Divider/>
                <Paper style={styles.buttonGroup} elevation={0}>
                    <ButtonGroupComponent />
                </Paper>
            </Stack>
        );

    }
}

export default DatePicker;

const styles = {
    calendarClass: {
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    insideCalendar: {
        background: 'linear-gradient(135deg, #4290c0,#4795cd, #5087d0, #6b52d0)',
        width: "400px",
    },
    buttonGroup: {
        width: '400px',
        height: '70px',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #5087d0, #4d4ab0)',
        borderRadius: '0px 0px 15px 15px',
    },
}
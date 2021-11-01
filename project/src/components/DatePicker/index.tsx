import { Component } from "react";
import Calendar from './calendar';
import ButtonGroupComponent from "./buttongroup";
import ChosenDates from "./chosenDates";
import CurrentDate from "./currentDate";
import { Paper, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import {styles} from './styles'

export default function DatePicker() {

        return (
            <Stack style={styles.calendarClass}>
                <Paper elevation={0}>
                <ChosenDates
                    startDate="27 AUG 2018"
                    endDate="31 AUG 2018"
                    background="white"
                    width="220px"
                    height="70px"
                    marginBottom="5px"
                    leftDateColor="#ae94e3"
                    rightDateColor="#40a2db"
                    fontSize="20px"
                    radius="10px"
                    textAlign="left"
                    >
                </ChosenDates>
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


import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CurrentDate from "./currentDate";
import ButtonGroupComponent from "./buttongroup";
import ChosenDates from "./chosenDates";
import Stack from '@mui/material/Stack';

const CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            days: new Array(CALENDAR.length).fill().map((_, i) => ({ style: { color: 'white' } })),
        };

        this.handleCellClick = this.handleCellClick.bind(this);
    }

    static startDate = null;
    static endDate = null;

    handleCellClick = (day) => {
        var arr;
        if ((this.endDate !== null && this.endDate !== undefined) || this.startDate === undefined) {
            arr = new Array(CALENDAR.length).fill().map((_, i) => ({ style: { color: 'white' } }))
            arr[day - 1].style = styles.cellCircle;
            this.startDate = day;
            this.endDate = null;
        } else {
            if (this.startDate > day) {
                [this.startDate, day] = [day, this.startDate];
            }
            arr = this.state.days;
            arr[this.startDate - 1].style = styles.startCellCircle;
            for (let index = this.startDate; index < day - 1; index++) {
                arr[index].style = styles.betweenCellCircle;
            }
            arr[day - 1].style = styles.endCellCircle;
            this.endDate = day;
        }

        this.setState({
            days: arr
        });
    }

    getHead = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell style={{ color: "white" }}>SU</TableCell>
                    <TableCell style={{ color: "white" }}>MO</TableCell>
                    <TableCell style={{ color: "white" }}>TU</TableCell>
                    <TableCell style={{ color: "white" }}>WE</TableCell>
                    <TableCell style={{ color: "white" }}>TH</TableCell>
                    <TableCell style={{ color: "white" }}>FR</TableCell>
                    <TableCell style={{ color: "white" }}>SA</TableCell>
                </TableRow>
            </TableHead>
        );
    }
    getBody = () => {
        const calendar = [];
        const preprocCal = CALENDAR.map(day => {
            return <TableCell style={this.state.days[day - 1].style} onClick={() => this.handleCellClick(day)}><b>{day}</b></TableCell>
        });

        for (let index = 0; index < preprocCal.length / 7; index++) {
            calendar.push(<TableRow>{preprocCal.slice(index * 7, index * 7 + 7)}</TableRow>)
        }

        return (
            <TableBody>
                {calendar}
            </TableBody>
        );
    }
    render() {
        return (
            <div style={styles.calendarClass}>
                <ChosenDates style={{
                    width: '430px'
                }} />
                <div style={styles.insideCalendar}>
                    <CurrentDate />
                    <TableContainer>
                        <Table>
                            {this.getHead()}
                            {this.getBody()}
                        </Table>
                    </TableContainer>
                    <div style={styles.buttonGroup}>
                        <ButtonGroupComponent />
                    </div>
                </div>
            </div>
        );
    }
}
export default Calendar;

//styles.css?
const styles = {
    calendarClass: {
        marginLeft: 200,
        marginTop: 100,
        width: 400,
    },
    insideCalendar: {
        background: 'linear-gradient(135deg, #4290c0,#4795cd, #5087d0, #6b52d0)',
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        width:"380px",
        marginLeft:"10px"
    },
    circle: {
        width: "320px",
        padding: "10px",
        border: "5px solid gray",
    },
    startCellCircle: {
        color: 'white',
        background: 'linear-gradient(#D16ADF,#4795cd, #31E6E6, #6b52d0)',
        borderTopLeftRadius: "27px",
        borderBottomLeftRadius: "27px"
    },
    cellCircle: {
        color: 'white',
        background: 'linear-gradient(#D16ADF,#4795cd, #31E6E6, #6b52d0)',
        borderRadius: "27px"
    },
    endCellCircle: {
        color: 'white',
        background: 'linear-gradient(#D16ADF,#4795cd, #31E6E6, #6b52d0)',
        borderTopRightRadius: "27px",
        borderBottomRightRadius: "27px"
    },
    betweenCellCircle: {
        color: 'white',
        background: 'linear-gradient(#D16ADF,#4795cd, #31E6E6, #6b52d0)'
    },
    buttonGroup: {
        marginLeft: "60px", 
        marginTop: "10px",
        marginBottom: "20px" 
    }
}

import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { borderBottom } from "@mui/system";

const CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            days: new Array(CALENDAR.length).fill().map((_, i) => ({ style: { color: 'white', borderBottom: 'none'} })),
        };

        this.handleCellClick = this.handleCellClick.bind(this);
    }

    static startDate = null;
    static endDate = null;

    handleCellClick = (day) => {
        var arr;
        if ((this.endDate !== null && this.endDate !== undefined) || this.startDate === undefined) {
            arr = new Array(CALENDAR.length).fill().map((_, i) => ({ style: { color: 'white', borderBottom: 'none' } }))
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
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>SU</TableCell>
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>MO</TableCell>
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>TU</TableCell>
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>WE</TableCell>
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>TH</TableCell>
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>FR</TableCell>
                    <TableCell style={{ color: "white", borderBottom: 'none' }}>SA</TableCell>
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
            <TableContainer>
                <Table>
                    {this.getHead()}
                    {this.getBody()}
                </Table>
            </TableContainer>
        );
    }
}
export default Calendar;

const styles = {
    startCellCircle: {
        color: 'white',
        background: 'linear-gradient(#a450e4, #855fea, #855fea)',
        borderTopLeftRadius: "27px",
        borderBottomLeftRadius: "27px",
        borderBottom: 'none',
    },
    cellCircle: {
        color: 'white',
        backgroundColor: '#71cceb',
        borderRadius: '50%',
        borderBottom: 'none',
    },
    endCellCircle: {
        color: 'white',
        background: 'linear-gradient(90deg, #855fea, #855fea, #4a84f8)',
        borderTopRightRadius: "27px",
        borderBottomRightRadius: "27px",
        borderBottom: 'none'
    },
    betweenCellCircle: {
        color: 'white',
        background: 'linear-gradient(#a450e4, #855fea, #855fea)',
        borderBottom: 'none'
    },
}
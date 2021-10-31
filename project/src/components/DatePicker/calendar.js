
import React, { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
        this.handleCellClick = this.handleCellClick.bind(this);
    }

    handleCellClick = (e) => {
        //TODO: add circle to chosen date when the cell is pressed (see lab example)
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
            return <TableCell style={{ color: "white" }} onClick={this.handleCellClick}><b>{day}</b></TableCell>
        });

        for (let index = 0; index < preprocCal.length / 7; index++) {
            calendar.push(<TableRow>{preprocCal.slice(index * 7, index * 7 + 7)}</TableRow>)
        }

        return (
            <TableBody>
                {calendar}
            </TableBody>
        )

            ;
    }
    render() {
        return (
            <div style={styles.calendarClass}>
                <TableContainer>
                    <Table>
                        {this.getHead()}
                        {this.getBody()}
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
export default Calendar;

const styles = {
    calendarClass: {
        background: 'linear-gradient(135deg, #4290c0,#4795cd, #5087d0, #6b52d0)',
        marginLeft: 200,
        marginTop: 100,
        width: "400px"
    },
    circle: {
        width: "320px",
        padding: "10px",
        border: "5px solid gray",
    }
}
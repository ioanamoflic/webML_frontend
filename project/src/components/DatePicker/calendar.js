
import React, { Component } from "react";
import Button from "@mui/material/Button"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };


    }
    getHead = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>SU</TableCell>
                    <TableCell>MO</TableCell>
                    <TableCell>TU</TableCell>
                    <TableCell>WE</TableCell>
                    <TableCell>TH</TableCell>
                    <TableCell>FR</TableCell>
                    <TableCell>SA</TableCell>
                </TableRow>
            </TableHead>
        );
    }
    getBody=()=>{

        const calendar=[];
        const preprocCal=CALENDAR.map(day=>{
            return <TableCell>{day}</TableCell>
        });
        
        for (let index=0;index<preprocCal.length/7;index++){
            calendar.push(<TableRow>{preprocCal.slice(index*7,index*7+7)}</TableRow>)
        }

        return (
            <TableBody>
            {
                
                calendar
            }
            </TableBody>
        )

        ;
    }
    render() {
        return (
            <div style={{marginLeft:200,marginTop:100,width:"400px"}}>
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
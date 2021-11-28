import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styles } from './styles'

const CALENDAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

export default function Calendar() {
    const [days, setDays] = useState<any[]>(getDaysStyles());
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(0);

    function getDaysStyles() {
        var basicStyles: any[] = [];
        CALENDAR.forEach(day => {
            basicStyles.push(styles.emptyCell);
        });
        return basicStyles;
    }

    const handleCellClick = (day: number) => {
        var arr = [];
        if (endDate !== 0 || startDate === 0) {
            arr = getDaysStyles();
            arr[day - 1] = styles.cellCircle;
            setStartDate(day);
            setEndDate(0);
        } else {       
            arr = days;
            if (startDate > day) {
                arr[day - 1] = styles.startCellCircle;
                for (let index = day; index < startDate - 1; index++) {
                    arr[index] = styles.betweenCellCircle;
                }
                arr[startDate - 1] = styles.endCellCircle;
                setStartDate(day);
                setEndDate(startDate);

            } else {
                arr[startDate - 1] = styles.startCellCircle;
                for (let index = startDate; index < day - 1; index++) {
                    arr[index] = styles.betweenCellCircle;
                }
                arr[day - 1] = styles.endCellCircle;
                setEndDate(day);
            }
        }
        setDays(arr);
    }

    useEffect(
        () => {
            console.log('Chosen start date: ', startDate);
            console.log('Chosen end date: ', endDate);
        }
    );

    const tableHead = (
        <TableHead>
            <TableRow>
                <TableCell style={styles.emptyCell}>SU</TableCell>
                <TableCell style={styles.emptyCell}>MO</TableCell>
                <TableCell style={styles.emptyCell}>TU</TableCell>
                <TableCell style={styles.emptyCell}>WE</TableCell>
                <TableCell style={styles.emptyCell}>TH</TableCell>
                <TableCell style={styles.emptyCell}>FR</TableCell>
                <TableCell style={styles.emptyCell}>SA</TableCell>
            </TableRow>
        </TableHead>
    )

    function getBody() {
        const calendar = [];
        const preprocCal = CALENDAR.map(day => {
            return <TableCell style={days[day - 1]} onClick={() => handleCellClick(day)}><b>{day}</b></TableCell>
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

    return (
        <TableContainer>
            <Table>
                {tableHead}
                {getBody()}
            </Table>
        </TableContainer>
    );
}
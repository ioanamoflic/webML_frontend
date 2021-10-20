import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

function createData(name, size, result, link) {
    return {
        name,
        size,
        result,
        link
    };
}

const rows = [
    createData('iris.jpg', '5616 x 374', '98.76', 'shorturl.at/jsvL4'),
    createData('altIris.jpg', '5616 x 374', '99.15', 'shorturl.at/jsvL4'),
    createData('niciunIris.jpg', '5616 x 3744', '67.33', 'shorturl.at/jsvL4'),
    createData('ultimulIris.jpeg', '5616 x 3744', '88.95', 'shorturl.at/jsvL4'),
];

export default function TablePage() {
    const [selected, setSelected] = React.useState([]);

    const selectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const selectOneClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
      };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Checkbox
                                color="primary"
                                onChange={(event) => selectAllClick(event)}
                            />&nbsp;
                            Image name
                        </TableCell>
                        <TableCell align="right">Image size</TableCell>
                        <TableCell align="right">Recognition result&nbsp;(%)</TableCell>
                        <TableCell align="right">Image link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Checkbox
                                    color="primary"
                                    checked={isSelected(row.name)}
                                    onChange={(event) => selectOneClick(event, row.name)}
                                />&nbsp;
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                            <TableCell align="right">{row.result}</TableCell>
                            <TableCell align="right">{row.link}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

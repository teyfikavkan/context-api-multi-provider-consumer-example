import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SubContext from "../context/SubContext";
import GlobalContext from "../context/GlobalContext";

const columns = [
    {id: 'id', label: 'Id', minWidth: 100},
    {id: 'name', label: 'Name', minWidth: 100},
    {id: 'surname', label: 'Surname', minWidth: 100},
    {id: 'age', label: 'Age', minWidth: 100},
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function PersonListView() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const {personList, newPerson} = useContext(SubContext);
    const {setSelectedId} = useContext(GlobalContext);
    const [rows,setRows] = useState([]);
    useEffect(() => {
        personList.forEach(person=>{
            rows.push({
                id:person.id,
                name:person.name,
                surname:person.surname,
                age:person.age,
            });
        })
    },[]);

    useEffect(() => {
        if(newPerson.id != ""){
            setRows(rows=>[...rows,newPerson]);
        }
    },[newPerson]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRowClicked = (event, row) => {
        setSelectedId(row.id);
    };
    console.log("PersonListView rendered");
    return (
        <section id="section-counter" className="center-align white-text blue" style={{marginTop: "20px"}}>
            <div>PersonList</div>
            <div style={{backgroundColor: "grey"}}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{minWidth: column.minWidth}}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={(event) => handleRowClicked(event, row)}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </section>
    );
}

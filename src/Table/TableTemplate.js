import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SortIcon from "@material-ui/icons/Sort";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

export default function TableTemplate(props) {
  const classes = useStyles();

  if (!props.rows) {
    return "Loading";
  } else {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="center">
                <SortIcon onClick={() => props.sorting()}></SortIcon>
                ID
              </TableCell>
              <TableCell align="center">
                <span>Title</span>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Search"
                    align="center"
                    onChange={(value) => props.search(value)}
                  />
                </div>
              </TableCell>

              <TableCell align="center">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.userId}
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">
                  {row.completed.toString().toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

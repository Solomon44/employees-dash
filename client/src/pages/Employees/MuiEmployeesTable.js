import React, { useState } from 'react';
import faker from 'faker';

import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  // TablePagination,
  // TableFooter,
} from '@material-ui/core';

//styles for the table
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '50px auto',
    maxWidth: 1000,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));

//rendering fake user for testing
let USERS = [];

for (let i = 0; i < 15; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.companyName(),
    department: faker.commerce.department(),
    joinDate: faker.date.past().toLocaleDateString('en-US'),
  };
}

//material ui table to render users
const MuiUsersTable = (props) => {
  //pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // //handle the changes of the page
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // //handle the quantity of rows per page
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  //  style module
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
              <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
              <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  <Grid container>
                    <Grid item sm={2}>
                      <Avatar art={row.name} src='.' className={classes.avatar} />
                    </Grid>
                    <Grid item sm={10}>
                      <Typography className={classes.name}>{row.name}</Typography>
                      <Typography color='textSecondary' variant='body2'>
                        {row.email}
                      </Typography>
                      <Typography color='textSecondary' variant='body2'>
                        {row.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography color='primary' variant='subtitle1'>
                    {row.jobTitle}
                  </Typography>
                  <Typography color='textSecondary' variant='body2'>
                    {row.company}
                  </Typography>
                  <Typography color='textSecondary' variant='body2'>
                    {row.department}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography> {row.joinDate}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableFooter>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={USERS.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPage={handleChangeRowsPerPage}
        />
      </TableFooter> */}
      </TableContainer>
    </React.Fragment>
  );
};

export default MuiUsersTable;

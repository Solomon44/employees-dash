import React from 'react';
// import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';
import MuiUsersTable from './MuiEmployeesTable';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function UsersData() {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title='Employees'
        subTitle='all the Employees in one  list'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        <MuiUsersTable />
      </Paper>
    </>
  );
}

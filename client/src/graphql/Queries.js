import { useQuery, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import MuiEmployeesTable from '../pages/Employees/MuiEmployeesTable';
import PageHeader from '../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

//get all the users data from the database
const QUERY_ALL_EMPLOYEES = gql`
  query {
    users {
      name
      email
      mobile
      company
      jobTitle
      department
      joinDate
    }
  }
`;

function GetEmloyees() {
  const classes = useStyles();
  //get data state
  const { error, data, loading, refetch } = useQuery(QUERY_ALL_EMPLOYEES);

  // console.log(data);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  return (
    <>
      <PageHeader
        title='Employees'
        subTitle='all the Employees in one  list'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>{users && <MuiEmployeesTable users={users} />}</Paper>
    </>
  );
}

export default GetEmloyees;

import React, { useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import MuiEmployeesTable from '../pages/Employees/MuiEmployeesTable';

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

//posting users the to the data bases using graphql Mutation method
const CREATE_EMPLOYEE_MUTATION = gql`
  mutation ($input: userInput!) {
    createUser(input: $input) {
      name
    }
  }
`;

/*mutation{
    createUser(userInput:{
      company: "Sawayn, Torphy and O'Connell"
      email: "Mona.Raynor70@yahoo.com"
      jobTitle: "Chief Configuration Orchestrator"
      joinDate: "1/12/2022"
      name: "Darnell O'Keefe"
      phone: "(381) 218-0219"
    
      
    }){
      name
      email
      company
      phone
     joinDate
      
      
  }}*/

/** */

const DisplayData = () => {
  // Create User States

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [company, setCompany] = useState('');
  // const [phone, setPhone] = useState('');
  // const [jobTitle, setJobTitle] = useState('');
  // const [joinDate, setJoinDate] = useState('');
  // const [department, setDepartment] = useState('');

  //get data state
  const { error, data, loading, refetch } = useQuery(QUERY_ALL_EMPLOYEES);

  if (error) throw 'There is an error';
  //post data state
  const [createUser] = useMutation(CREATE_EMPLOYEE_MUTATION);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }
  console.log(data);
};
export default DisplayData;

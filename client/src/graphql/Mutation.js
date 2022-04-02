import React from 'react';
import { gql, useMutation } from '@apollo/client';
import MuiEmployeesTable from '../pages/Employees/MuiEmployeesTable';

//posting users the to the data bases using graphql Mutation method
const CREATE_EMPLOYEE_MUTATION = gql`
  mutation ($input: userInput!) {
    createUser(input: $input) {
      name
    }
  }
`;

function CreateEmployee() {
  // Create User States

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [company, setCompany] = useState('');
  // const [phone, setPhone] = useState('');
  // const [jobTitle, setJobTitle] = useState('');
  // const [joinDate, setJoinDate] = useState('');
  // const [department, setDepartment] = useState('');

  //post data state
  const [createUser] = useMutation(CREATE_EMPLOYEE_MUTATION);
}
export default CreateEmployee;

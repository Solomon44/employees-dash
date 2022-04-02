import { useQuery, gql } from '@apollo/client';
import React from 'react';

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
  //get data state
  const { error, data, loading, refetch } = useQuery(QUERY_ALL_EMPLOYEES);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }
  return { users };
}

export default GetEmloyees;

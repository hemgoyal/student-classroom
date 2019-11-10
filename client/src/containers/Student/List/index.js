import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

const GET_STUDENTS = gql`
  query {
    students {
      id,
      name,
      email,
      mobile,
      is_active
    }
  }
`;

export default class AddStudent extends Component {
  render() {
    return (
      <Query query={GET_STUDENTS}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress />;
          if (error) return <div>Error :(</div>;

          console.log('studetns: ', data.students);

          return (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Is Active</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  data.students.map(student => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.mobile}</TableCell>
                      <TableCell>{student.is_active}</TableCell>
                      <TableCell>Edit, Delete</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          )
        }}
      </Query>
    );
  }
}

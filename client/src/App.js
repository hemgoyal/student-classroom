import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';

import StudentList from './containers/Student/List';

import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Student Classroom GraphQL Sample App
        </Typography>
      </Box>
      <Box>
        <StudentList />
      </Box>
    </Container>
  );
}

export default App;

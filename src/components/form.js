import React, { useState } from "react";
import firebase from '../services/firebase';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


const Form = () => {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTask = () => {
    const taskRef = firebase.database().ref('Task');
    const task = {
      title,
      complete: false,
    };

    taskRef.push(task);
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Write your new task</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl onChange={handleOnChange} value={title} />
      </InputGroup>
      <Button variant="outline-primary" onClick={createTask}>Add Task</Button>
    <br/>
    </Container>
  );
}

export default Form;

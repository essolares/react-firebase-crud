import React from 'react';
import './App.css';
import Form from './components/form';
import TaskList from './components/taskList';
import Badge from 'react-bootstrap/Badge'

export default function App() {
  return (
    <div className="App">
      <h1><Badge variant="primary">Tasks</Badge>
        </h1>
      <Form />
      <TaskList />
    </div>
  );
}

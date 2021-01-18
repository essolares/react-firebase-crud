import React from 'react';
import './App.css';
import Form from './components/form';
import TaskList from './components/taskList';

export default function App() {
  return (
    <div className="App">
      <h1>Tasks</h1>
      <Form />
      <TaskList />
    </div>
  );
}

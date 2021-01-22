import React from 'react';
import firebase from '../services/firebase';
import '../App.css';
import Button from 'react-bootstrap/Button'


export default function Task({ task }) {

    const completeTask = () => {
        const taskRef = firebase.database().ref('Task').child(task.id);
        taskRef.update({
          complete: !task.complete,
        });
      };

      const deleteTask = () => {
        const taskRef = firebase.database().ref('Task').child(task.id);
        taskRef.remove();
      };
    
  return (
    
    <div>
      <h1 className={task.complete ? 'complete' : ''}>{task.title}</h1>
      <Button variant="outline-danger" onClick={deleteTask}>Delete</Button>
      <Button variant="outline-success" onClick={completeTask}>Complete</Button>
    </div>
  );
}

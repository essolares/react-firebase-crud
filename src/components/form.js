import React, { useState } from 'react';
import firebase from '../services/firebase';

export default function form() {
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
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTask}>Add Task</button>
    </div>
  );
}

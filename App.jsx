/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

import {
  SafeAreaView,
} from 'react-native';

function App() {
  const [tasks, setTasks] = useState(" ");
  
  const handleChangeTask = (task) => {
    setTasks(task.target.value);
  } 

  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList tasks={tasks} onChange={handleChangeTask}/>
    </SafeAreaView>
  );
}

export default App;

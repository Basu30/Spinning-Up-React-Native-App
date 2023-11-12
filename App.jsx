/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

import { SafeAreaView } from 'react-native';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  
  const handleChangeTask = (task) => {
    setTasks([...tasks, task]);
  } 

  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList tasks={tasks} onChange={handleChangeTask}/>
    </SafeAreaView>
  );
}

export default App;

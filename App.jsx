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

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const [tasks, setTasks] = useState( ["Do laundry", "Go to gym", "Walk dog"] );
  
  // const handleChangeTask = (task) => {
  //   setTasks(task.target.value);
  // }; onChange={handleChangeTask}

  return (
    <SafeAreaView>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;

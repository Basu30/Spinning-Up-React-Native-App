
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';


function ToDoList({tasks}){
 
  return ( 
    <View>
      <Text>My To Do List</Text>
      <ScrollView>
        {tasks.map(( task, index ) => (
          <Text style={styles.task} key={index}>{task}</Text>
        ))}       
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });

export default ToDoList;
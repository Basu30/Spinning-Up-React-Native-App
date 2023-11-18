
import React from 'react';

import {
  StyleSheet,
  //Pressable,
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
      {/* <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable> */}
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
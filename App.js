import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './Screen/Home';
import LoginPage from './Screen/Login';
import TableAttend from './Screen/TableAttend';
import LessonPage from './Screen/Lesson';
import OpenCameraPage from './Screen/OpenCamera';
import ShowLessonList from './Screen/ShowLesson';
import EditAttendsFunction from './Screen/EditAttend';
const Stack=createNativeStackNavigator();
window.IP='192.168.1.14';

// component main
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen 
          name="Login Page" component={LoginPage}  
        />
        <Stack.Screen 
          name="Home Page" component={Home}  
          options={{headerLeft: () => null}}
        />
        <Stack.Screen 
          name="Attends Page" component={TableAttend} 
        />
        <Stack.Screen 
          name="Lesson Page" component={LessonPage}  
        />       
        <Stack.Screen 
          name="Camera Page" component={OpenCameraPage} 
        />
        <Stack.Screen 
          name="Lesson List Page" component={ShowLessonList} 
        />
        <Stack.Screen 
          name="Edit Page" component={EditAttendsFunction} 
        />
      </Stack.Navigator> 

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

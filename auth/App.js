
import React from 'react';

import {
  StyleSheet,
 
} from 'react-native';

import { Login } from './Screens/Login';
import { Rejister } from './Screens/Rejister';
import { Home } from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App=()=>{

  return(

     <NavigationContainer>
       <Stack.Navigator 
        screenOptions={{
            header: ()=> null
        }}

        initialRouteName='Login'
    >
         <Stack.Screen name='Login'  component={Login}/>
         <Stack.Screen name='Rejister'  component={Rejister}/>
         <Stack.Screen name='Home'  component={Home}/>
       </Stack.Navigator>
     </NavigationContainer>
  )
}

const styles = StyleSheet.create({
 
});

export default App;

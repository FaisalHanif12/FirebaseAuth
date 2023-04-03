import React, { useState } from 'react';
import {
   Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity, 
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export const Rejister=({navigation})=>{
 
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
      await auth().createUserWithEmailAndPassword(email, password)
        .then(() => { alert('User Added Suceessfully') })
        .catch((err) => alert(err));
    }
    
    return(
        <View>
            <View style = {{alignItems : 'center', marginTop : 40, marginLeft : -8}}>
             <Text style = {{color : 'black', fontWeight : 'bold', fontSize : 20 , marginBottom : 35}}>
                 Rejister Yourself Here!
             </Text>

              <Text style = {{color : 'black', fontWeight : 'bold', fontSize : 15 , marginBottom : 10,marginLeft : -120}}>
                 Enter Email : 
              </Text>
              
              <View style = {{marginTop : 10}}>
                  <TextInput 
                       onChangeText={(email)=> setEmail(email)}
                       value={email}
                       placeholder='Enter Your Email'
                       style = {{width : 200, height : 40, borderWidth : 2, borderRadius : 10, marginBottom : 10}}

                />
              </View>


              <Text style = {{color : 'black', fontWeight : 'bold', fontSize : 15 , marginBottom : 10,marginLeft : -90}}>
                 Enter Password : 
              </Text>
              
              <View style = {{marginTop : 10 , marginBottom : 15}}>
                  <TextInput 
                                   
                      onChangeText={(password)=> setPassword(password)}
                      value={password} 
                       placeholder='Enter Your Password'
                       style = {{width : 200, height : 40, borderWidth : 2, borderRadius : 10}}
                      secureTextEntry={true}
                  />

              </View>

             <View style = {{width : 90, height : 40 , backgroundColor : 'chartreuse', marginTop : 10, alignItems : 'center', justifyContent : 'center', marginBottom : 50, borderRadius : 20}}>
                <TouchableOpacity 
                 onPress={handleSignUp}
                >
                   <Text style = {{color : 'black', fontWeight : 'bold'}}>
                    Rejister
                   </Text>
                </TouchableOpacity>
             </View>


             <View style = {{width : 90, height : 40 , backgroundColor : 'blue', marginTop : -40, alignItems : 'center', justifyContent : 'center', marginLeft : 10, borderRadius : 15}}>
                <TouchableOpacity 
                   onPress = {()=> navigation.navigate('Login')}
                >
                   <Text style = {{color : 'white', fontWeight : 'bold'}}>
                    Login
                   </Text>
                </TouchableOpacity>
             </View>

             
         </View>

        </View>
    )
}


const styles = StyleSheet.create({
 
});
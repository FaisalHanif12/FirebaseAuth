import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
export const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    await auth().signInWithEmailAndPassword(email, password)
      .then(() => {
         alert('Login Sucessfully')
         navigation.navigate('Home');
         console.log("User Login Successfull")
    })
      .catch((err) => alert(err));

  }

  return (

    <View>
      <View style={{ alignItems: 'center', marginTop: 190, marginLeft: -8 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginBottom: 35 }}>
          Login Yourself Here!
        </Text>
      </View>

      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginBottom: 10, marginLeft: 100 }}>
        Enter Email :
      </Text>

      <View style={{ marginTop: 10 }}>
        <TextInput
          placeholder='Enter Your Email'
          onChangeText={(email) => setEmail(email)}
          value={email}
          style={{ width: 200, height: 40, borderWidth: 2, borderRadius: 10, marginBottom: 10, marginLeft: 100 }}

        />
      </View>

      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginBottom: 10, marginLeft: 100 }}>
        Enter Password :
      </Text>

      <View style={{ marginTop: 10, marginBottom: 15, marginLeft: 100 }}>
        <TextInput
          placeholder='Enter Your Password'
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          value={password}
          style={{ width: 200, height: 40, borderWidth: 2, borderRadius: 10 }}

        />

      </View>

      <View style={{ width: 90, height: 40, backgroundColor: 'blue', marginTop: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 150, borderRadius: 15 }}>
        <TouchableOpacity
          onPress={handleSignIn}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop: 20, marginLeft: 150, backgroundColor: 'white', width: 90, height: 40
        , alignContent: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 10, borderColor: 'blue'
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Rejister')}
        >
          <Text style={{ marginLeft: 20, color: 'black', fontWeight: 'bold' }}>
            Rejister
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

});
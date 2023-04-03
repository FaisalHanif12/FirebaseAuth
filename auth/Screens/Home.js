import React,{useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const Home = ({navigation}) => {

    
    const [mydata, setmydata] = useState(null);

    useEffect(() => {
        getdata();
    }, [])

    const getdata=async()=>{

        console.log("this is Console")

        try {    
            const data = await database().ref('Users/1').once("value");
            console.log(data)

            console.log("Here is the console")

        } catch (err) {
            console.log(err)
        }

    }

    const LogoutHandle =()=>{
        auth()
        .signOut()
        .then(() => alert('User signed out!'));
         navigation.navigate('Login') 
      }

    return(

        
        <View style={{ alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
                Homescreen
            </Text>

            <View style={{
                marginTop: 20, marginLeft: 0, backgroundColor: 'white', width: 90, height: 40
                , alignContent: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 10, borderWidthcolor: 'black'
            }}>
                <TouchableOpacity

                 onPress={LogoutHandle}

                >
                    <Text style={{ marginLeft: 20, color: 'black', fontWeight: 'bold' }}>
                        Log out
                    </Text>
                </TouchableOpacity>




            </View>
        </View>
    )
}


const styles = StyleSheet.create({

});
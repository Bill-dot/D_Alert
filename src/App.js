import React, { Component } from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native'
import RNLocalNotifications from 'react-native-local-notifications'

export default class App extends Component{
    constructor(props){
        super(props)

    }

    alert=()=>{
        setTimeout(() => {
            Alert.alert(
                'NOTIFICATION ALERT',
                'To get a notification tap on ok',
                [
                    {text:'OK', onPress:()=> this.getNotification()}
                ],
                {cancelable:false}
            )
            
        }, 2000);
    }

    getNotification=()=>{
        RNLocalNotifications.setAndroidIcons("ic_launcher", "mipmap", "notification_small", "drawable");
        var NotificationText = 'Here is your local notification'
        var scheduleNotification= (new Date()).toString()
        RNLocalNotifications.createNotification(1,'some text','2020-04-04 10:18', 'default')
        RNLocalNotifications.updateNotification(1, 'Some modifications to text', '2017-01-02 12:35', 'silence');
        console.log('should have received notification by now')
    }

    render(){
        return(
            <View style={styles.main}>
                <TouchableOpacity
                    onPress={()=>this.alert()}
                >
                    <Text style={styles.text}>Press ME!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:35
    }
})
import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';

export default function Header() {
 return (
   <View style = {styles.header}>
    <Pressable style = {styles.logo}>
     <Text>Devgram</Text>
    </Pressable>


    <Pressable>
      <Image 
      source = {require('../../Images/Icons/icons8-send-24.png')}
      style={styles.send}/>
    </Pressable>
   </View>
  );
}


const styles = StyleSheet.create({
    header:{
      height: 55,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomWidth:0.2,
      shadowColor:'#000',
      elevation:1
    },
    logo:{
      height:40,
      width:90
    },
    send:{
      width:24,
      height:24
    }
  })
import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

export default function Header() {
 return (
   <View style = {styles.header}>
    <Pressable>
     <Text>Devgram</Text>
    </Pressable>
   </View>
  );
}


const styles = StyleSheet.create({
    header:{
      flex:1
    }
  })
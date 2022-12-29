import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import Header from './src/Components/Header';

export default function App() {
 return (
   <View>
    <Header/>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
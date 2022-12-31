import React, { useState } from 'react';
import { View , Text , StyleSheet, FlatList} from 'react-native';
import Header from './src/Components/Header';
import List from './src/Components/List'

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      nick:'pinduca_',
      bio:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      profile:'https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_.jpg',
      img:'https://www.geekbinge.com/wp-content/uploads/2014/12/Adam-Sandler-Sony.jpg',
      likers:10,
      liked: false
    },
    {
      id: '2',
      nick:'zezinMilGrau',
      bio:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      profile:'https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_.jpg',
      img:'https://www.geekbinge.com/wp-content/uploads/2014/12/Adam-Sandler-Sony.jpg',
      likers:104,
      liked: true
    },
    {
      id: '3',
      nick:'antoniohp',
      bio:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      profile:'https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_.jpg',
      img:'https://www.geekbinge.com/wp-content/uploads/2014/12/Adam-Sandler-Sony.jpg',
      likers:112,
      liked: false
    },
    {
      id: '4',
      nick:'antoniohp',
      bio:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      profile:'https://m.media-amazon.com/images/M/MV5BMjQyNzM2MjM1Ml5BMl5BanBnXkFtZTcwMDE5NjI3Mg@@._V1_.jpg',
      img:'https://www.geekbinge.com/wp-content/uploads/2014/12/Adam-Sandler-Sony.jpg',
      likers:300,
      liked: false
    },

  ])

 return (
   <View>
    <FlatList
    ListHeaderComponent={Header}
    data={feed}
    keyExtractor={(item) => item.id}
    renderItem ={({item}) => <List data = {item}/>}
    />


   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
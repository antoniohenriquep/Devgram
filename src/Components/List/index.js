import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function List(props) {
 return (
   <View>
    <View style = {styles.header}>
      <Image 
      source={{uri: props.data.profile}}
      style = {styles.profile}/>
      <Text style={styles.nick}>
        {props.data.nick}
      </Text>
    </View>
    <Image
    source={{uri: props.data.img}}
    style = {styles.pic}
    resizeMode = {'cover'}/>


    <View style = {styles.interactionBar}>
      <Pressable style={({pressed}) =>[
          {
            backgroundColor: pressed ? '#b8b8b8' : '#ffff',
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center'
          }
        ]}>
        <Image 
        source={require('../../Images/Icons/like_icon_24x24.png')}
        style={styles.icons}/>
      </Pressable>

      <Pressable style={({pressed}) =>[
          {
            backgroundColor: pressed ? '#b8b8b8' : '#ffff',
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center'
          }
        ]}>
        <Image 
        source={require('../../Images/Icons/comments_icon_24x24.png')}
        style={{width:32,height:32,marginLeft:10}}
        />
      </Pressable>
      <Pressable>
        <Image 
        source={require('../../Images/Icons/icons8-send-24.png')}
        style={{width:32,height:32,marginLeft:10}}
        />
      </Pressable>
    </View>


   </View>
  );
}

const styles = StyleSheet.create({
  header:{
    height:50,
    borderBottomWidth:0.2,
    borderColor: '#b8b8b8',
    alignItems:'center',
    paddingLeft:10,
    flexDirection:'row'
  },
  nick:{
    fontWeight:'bold',
    color:'black',
    marginLeft:15,
    fontSize:16
  },
  profile:{
    width:40,
    height:40,
    borderRadius:20
  },
  pic:{
    height:400
  },
  interactionBar:{
    height:45,
    padding:5,
    marginBottom:5,
    flexDirection:'row',
    alignItems:'center'
  },
  icons:{
    width:35,
    height:35,
  }
})
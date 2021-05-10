import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        School Attendance App
      </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'blue'
  },
  text:{
    color:'white',
    padding:20,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center'
  }
  
});
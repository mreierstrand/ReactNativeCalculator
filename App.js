import React, { Component } from 'react';
import {StyleSheet,Text,TextInput,View,Button, } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 100,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 10,
  },
});


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      input1: 0,
      input2: 0,
      result: 0,
      clicks: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={{fontSize: 30}}>Olivers Calculator</Text>
          <Text style={{fontSize: 20}}>
            Made in React Native.
          </Text>
        </View>
        
        <View style={styles.middleContainer}>
          <View style={styles.row}>
           <View>
            <Text style={{fontSize: 20}}>Number 1</Text>
             <TextInput 
             onChangeText={(text) => this.setState({input1:parseInt(text)})}
             style={{height:40, width: 100, backgroundColor: '#888888', color: '#FFFFFF'}}
             placeholder="Type a number"
             placeholderTextColor="white"
             />
           </View>
           <Text style={{fontSize: 40, marginStart: 25, marginTop: 20}}>+</Text>
            <View style={{marginStart: 25}}>
             <Text style={{fontSize: 20}}>Number 2</Text>
            <TextInput 
            onChangeText={(text) => this.setState({input2:parseInt(text)})}
            style={{height:40, width: 100, backgroundColor: '#888888', color: '#FFFFFF'}} 
            placeholder="Type a number"
            placeholderTextColor="white"
            />
          </View>
      </View>
      <Text>Result: {this.state.result}</Text>
        </View>
     <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
        <Button
            title="Calculate"
            style={styles.button}
            onPress={() => {
            this.setState({result : parseInt(this.state.input1) + parseInt(this.state.input2) });
            }}
            color="#444444"
          />
          <Button
            title="Increment result"
            style={styles.button}
            onPress={() => {
            this.setState({result : this.state.result + 1});
            }}
            color="#444444"
          />
          <Button
            title="Decrement result"
            style={styles.button}
            onPress={() => {
            this.setState({result : this.state.result - 1});
            }}
            color="#444444"
          />
        </View>
      </View>
     </View>
    );
  }
}
  




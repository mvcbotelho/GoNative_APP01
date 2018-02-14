import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Todo from './components/Todo'

export default class App extends Component {
  state = {
    user: 'Marcus',
    todos: [
      { id: 0, text: 'Fazr café' },
      { id: 1, text: 'Estudar GoNative' },
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'Novo todo' }
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>OI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#333',
    justifyContent: 'space-around',
    alignContent: 'center'
  },
  box: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: '#f00',
    transform: [
      {
        rotateZ: '20deg'
      }
    ]
  },
  boxText: {
    color: '#fff'
  }
});

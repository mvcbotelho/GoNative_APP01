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
         {id: 0, text: 'Fazr café' },
         {id: 1, text: 'Estudar GoNative' },
    ]
  };

  addTodo = () => {
    this.setState({ 
      todos: [
        ...this.state.todos,
        {id: Math.random(), text: 'Novo todo'}
      ] 
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>{ this.state.user }</Text>
        { this.state.todos.map(todos => <Todo key={todos.id} title={todos.text} />) }
        <Button title="Adiciona todo" onPress={this.addTodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

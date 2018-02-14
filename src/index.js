import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import Todo from 'components/Todo';

export default class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'Fazr café' },
      { id: 1, text: 'Estudar GoNative' },
    ],
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
        <Todo title="Fazer Café" />
        <Todo title="Ligar o computador" />
        <Todo title="Estudar GoNative" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

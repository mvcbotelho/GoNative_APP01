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

  //Métodos de clico de vida no react
  constructor(){
    //Sempre a primeira coisa a ser execultada. Se precisar mudar alguma coisa o lugar é aqui
  }

  componentWillMount(){
    //Execulta automaticamente antes do componente ser renderizado em tela.
    //Usado pra criar eventListner
    // Não é recomendado fazer consultas a API e nem modificação de estado
  }

  componentDidMount(){
    //Melhor lugar para chamar a API
    //Buscar serviços para mostrar em tela
  }

  componentWillReceiveProps(props) {
    //Quando alguma propriedade for modificada ele executa antes de modificar a propriedade
    //props.todoList !== this.props.todoList
  }

  shouldComponentUpdate(newProps, newState){
    //Podemos vetar a atualização automática do render()
    //Podemos verificar as auterações do render
    return false; //não atualiza o render
  }

  componentWillUpdate(newProps, newState){
    //Consegui a permissão para atualizar e vou atualizar aqui
  }

  componentDidUpdate(oldProps, oldState){
    //As únicas referencias q temos aqui são as antigas
  }

  componentWillUnmount(){
    //É o ultimo método executado antes do componente sair da tela
    //Local para remover os eventListner
  }

  componentDidCatch(){
    //Método para recuperação de erros
    //Permite que o erro não apareça de forma visivel ao usuário.
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

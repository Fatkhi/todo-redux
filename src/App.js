import React from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import './App.css';

const App = () => (
  <div className="todoapp">
    <h1>Todos</h1>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App;

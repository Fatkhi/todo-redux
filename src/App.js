import React from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import FooterContainer from './containers/FooterContainer';
import './App.css';

const App = () => (
  <div>
  	<div className="todoapp">
	    <h1>Todos</h1>
	    <AddTodo />
	    <VisibleTodoList />
	    <FooterContainer />
	  </div>
	  <footer className="info">
	  	<p>Double-click to edit a todo</p>
	  </footer>
  </div>
)

export default App;

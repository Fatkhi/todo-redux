import React, { Component } from 'react';
import Todo from './Todo'

const todoList = ( { todos, toggleTodo, editTodo, deleteTodo } ) => {
	return (
		<ul className="todo-list">
			{todos.map(todo => (
				<Todo 
					key={todo.id} 
					{...todo} 
					editTodo= { editTodo }
					toggleTodo={ () => { toggleTodo(todo.id) } } 
					deleteTodo={ () => { deleteTodo(todo.id) } }
				/>
				))}
		</ul>
	)
}

export default todoList;
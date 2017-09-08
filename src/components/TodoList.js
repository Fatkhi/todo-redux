import React, { Component } from 'react';
import Todo from './Todo'

const todoList = ( { todos, toggle, editTodo } ) => {
	return (
		<ul className="todo-list">
			{todos.map(todo => (
				<Todo 
					key={todo.id} 
					{...todo} 
					editTodo= { editTodo }
					toggle={ () => toggle(todo.id) } 
				/>
				))}
		</ul>
	)
}

export default todoList;
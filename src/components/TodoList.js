import React from 'react';
import Todo from './Todo'

const todoList = ( { todos, activeCount, hasTodos, toggleTodo, editTodo, deleteTodo, toggleAll } ) => {
	return (
		<section className="main">
			<input 
				className="toggle-all" 
				id="toggle-all"
				type="checkbox" 
				checked={!activeCount} 
				onChange={ (e) => { toggleAll(e.target.checked) } }
			/>
			<label style={ {display: hasTodos ? '' : 'none'} } htmlFor="toggle-all">Mark all as complete</label>
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
		</section>
	)
}

export default todoList;
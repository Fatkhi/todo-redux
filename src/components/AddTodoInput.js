import React from 'react';

export default ({ addTodo }) => {
	let input;

	return (
		<form 
			onSubmit={ e => { 
					e.preventDefault();
					addTodo(input.value);
					input.value = '';
				} 
			} 
		>
			<input 
				ref={ ref => input = ref } 
				className="new-todo" 
				placeholder="What needs to be done?"
				autoFocus 
			/>
		</form>	
	)
}
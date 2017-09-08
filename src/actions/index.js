let idCounter = 0;
export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		payload: {
			id: idCounter++,
			completed: false,
			text
		}
	}
}

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const editTodo = todo => {
	console.log(todo);
	return {
		type: 'EDIT_TODO',
		payload: {
			...todo
		}
	}
}
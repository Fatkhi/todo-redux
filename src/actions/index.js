export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ALL = 'SHOW_ALL';

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

export const editTodo = (id, text) => {
	return {
		type: 'EDIT_TODO',
		id,
		text
	}
}

export const deleteTodo = id => {
	return {
		type: 'DELETE_TODO',
		id
	}
}

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const clearCompleted = () => {
	return {
		type: 'CLEAR_COMPLETED'
	}
}
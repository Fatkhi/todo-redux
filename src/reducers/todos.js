const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.payload
			];
		case 'TOGGLE_TODO':	
			return state.map(todo => {
				if (todo.id === action.id) {
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo;
			});
		case 'TOGGLE_ALL':
			return state.map(todo => {
				return {
					...todo,
					completed: action.completed
				}
			});
		case 'EDIT_TODO':
			return state.map(todo => {
				if (todo.id === action.id) {
					return {
						...todo,
						text: action.text
					}
				}
				return todo;
			});
		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.id );
		case 'CLEAR_COMPLETED':
			return state.filter(todo => !todo.completed);
	}
	return state;
}

export default todos;
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
	}
	return state;
}

export default todos;
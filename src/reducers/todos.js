const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.payload
			];
		case 'EDIT_TODO':
			return state.map(todo => {
				const {
					payload,
					payload: {
						id
					}
				} = action;
				if (todo.id === id) {
					return payload;
				}
				return todo;
			});
	}
	return state;
}

export default todos;
import TodoList from '../components/TodoList';
import { editTodo } from '../actions';
import { toggleTodo } from '../actions';
import { deleteTodo } from '../actions';
import { connect } from 'react-redux';
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../actions';

const filterTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ACTIVE:
			return todos.filter( todo => !todo.completed );
		case SHOW_COMPLETED:
			return todos.filter( todo => todo.completed );
		case SHOW_ALL:
			return todos;
	}
}

const mapStateToProps = state => {
	return {
		todos: filterTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		editTodo: (id, text) => {
			dispatch(editTodo(id, text));
		},
		toggleTodo: id => {
			dispatch(toggleTodo(id));
		},
		deleteTodo: id => {
			dispatch(deleteTodo(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



import TodoList from '../components/TodoList';
import { editTodo, toggleTodo, deleteTodo, toggleAll } from '../actions';
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../actions';
import { connect } from 'react-redux';

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
		todos: filterTodos(state.todos, state.visibilityFilter),
		activeCount: state.todos.filter( todo => !todo.completed ).length,
		hasTodos: !!state.todos.length
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
		},
		toggleAll: completed => {
			dispatch(toggleAll(completed));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



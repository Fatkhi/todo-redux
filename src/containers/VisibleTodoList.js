import TodoList from '../components/TodoList';
import { editTodo } from '../actions';
import { toggleTodo } from '../actions';
import { deleteTodo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		todos: state.todos
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



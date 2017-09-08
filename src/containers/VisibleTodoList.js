import TodoList from '../components/TodoList';
import { editTodo } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		editTodo: (todo) => {
			dispatch(editTodo(todo));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



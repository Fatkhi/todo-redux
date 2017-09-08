import { addTodo } from '../actions';
import { connect } from 'react-redux';
import AddTodoInput from '../components/AddTodoInput'

// const mapStateToProps = state => {
// 	return {

// 	}
// }

const mapDispatchToProps = dispatch => {
	return {
		addTodo: (text) => {
			dispatch(addTodo(text));
		}
	}
}

export default connect(null, mapDispatchToProps)(AddTodoInput);
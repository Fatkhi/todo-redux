import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { setVisibilityFilter, clearCompleted } from '../actions';

const mapStateToProps = state => {
	return {
		todosCount: state.todos.length,
		leftItems: state.todos.filter(todo => !todo.completed).length,
		visibilityFilter: state.visibilityFilter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setFilter: (filter) => {
			dispatch(setVisibilityFilter(filter));
		},
		clearCompleted: () => {
			dispatch(clearCompleted());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
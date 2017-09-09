import React from 'react';
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../actions';

const footer = ( { todosCount, leftItems, visibilityFilter, setFilter, clearCompleted } ) => {
	const onClick = filter => e => {
		e.preventDefault();
		setFilter(filter);
	}
	return (
		<footer style={{display: todosCount ? 'block' : 'none' }} className="footer">
			<span className="todo-count">
				<strong>{ leftItems }</strong> { leftItems > 1 ? 'items' : 'item' } left
			</span>
			<ul className="filters">
				<li>
					<a
						href="#/"
						onClick={ onClick(SHOW_ALL) }
						className={ visibilityFilter === SHOW_ALL ? 'selected' : '' }>
							All
					</a>
				</li>
				{' '}
				<li>
					<a
						href="#/active"
						onClick={ onClick(SHOW_ACTIVE) }
						className={ visibilityFilter === SHOW_ACTIVE ? 'selected' : '' }>
							Active
					</a>
				</li>
				{' '}
				<li>
					<a
						href="#/completed"
						onClick={ onClick(SHOW_COMPLETED) }
						className={ visibilityFilter === SHOW_COMPLETED ? 'selected' : '' }>
							Completed
					</a>
				</li>
			</ul>
			<button style={{display: todosCount - leftItems ? 'block' : 'none' }}
				className="clear-completed"
				onClick={clearCompleted}
			>
				Clear completed
			</button>
		</footer>
	)
}

export default footer;
import React, { Component } from 'react';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isEditing: false,
			editText: props.text
		};

		this.inputRef = null;

		this.toggleEditing = this.toggleEditing.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.submitValue = this.submitValue.bind(this);
	}

	toggleEditing () {
		this.setState( (prevState) => ( { isEditing: !prevState.isEditing} ));
	}

	handleChange(e) {
		this.setState( { editText: e.target.value } )
	}

	handleKeyDown(e) {
		if (e.which === ENTER_KEY) {
			this.submitValue(this.state.editText);
			this.inputRef.blur();
		}
		else if (e.which === ESCAPE_KEY) {
			this.inputRef.blur();
		}
		else {
			this.setState( { editText: e.target.value } )
		}
	}

	submitValue(value) {
		this.props.editTodo(this.props.id, value);
	}

	componentDidUpdate() {
		this.inputRef.focus();
		this.inputRef.setSelectionRange(this.inputRef.value.length, this.inputRef.value.length);
	}

	render() {
		let classes = '';
		if (this.state.isEditing) classes += 'editing ';
		if (this.props.completed) classes += 'completed';

		return (
			<li className={ classes }>
				<div className="view">
					<input
					 className="toggle" 
					 type="checkbox" 
					 checked={ this.props.completed }
					 onChange={ this.props.toggleTodo }
					/>
					<label onDoubleClick={ this.toggleEditing }>{ this.props.text }</label>
					<button onClick={ this.props.deleteTodo } className="destroy" />
				</div>
				<input 
					className="edit"
					ref={ ref => this.inputRef = ref } 
					value={ this.state.editText } 
					onChange={ e => this.handleChange(e) } 
					onBlur={ this.toggleEditing } 
					onKeyDown={ e => this.handleKeyDown(e) }
				/>
			</li>
		)
	}
}

export default Todo;
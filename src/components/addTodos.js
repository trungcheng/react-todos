import React from 'react';

export default class AddTodo  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		}
	}

	renderError() {
		if (!this.state.error) { return null; }

		return <div style={{ color: 'red' }}>{ this.state.error }</div>;
	}

	render () {
		return ( 
			<form onSubmit={ this.handleAdd.bind(this) }>
				<input type="text" placeholder="What do I need to do?" ref="addInput" />
				<button>Add</button>
				{ this.renderError() }
			</form>
		)
	}

	handleAdd(e) {
		e.preventDefault();

		const addInput = this.refs.addInput;
		const task = addInput.value;
		const validateInput = this.validateInput(task);
		if (validateInput) {
			this.setState({ error: validateInput });
			return;
		}

		this.setState({ error: null });
		this.props.addTask(task);
		this.refs.addInput.value = '';
	}

	validateInput(task) {
		if (!task) {
			return 'Please enter a task.';
		} else if (_.find(this.props.todos, todo => todo.task === task)) {
			return 'Task already exists.';
		} else {
			return null;
		}
	}
}
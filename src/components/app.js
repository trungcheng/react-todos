import React from 'react';
import AddTodo from './addTodos';
import TodoList from './todoLists';

const todos = [
	{ task: 'Brush face', isCompleted: true },
	{ task: 'Eat breakfast', isCompleted: false },
	{ task: 'Go swimming', isCompleted: true },
	{ task: 'Go to the movie theater', isCompleted: false },
	{ task: 'Do homework', isCompleted: false }
];

export default class App  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: todos
		}
	}

	render () {
		return ( 
			<div>
				<h1>React todos application</h1>
				<AddTodo todos={this.state.todos} addTask={ this.addTask.bind(this) } />
				<TodoList 
					todos={ this.state.todos } 
					toggleTask={ this.toggleTask.bind(this) }
					saveTask={ this.saveTask.bind(this) }
					deleteTask={ this.deleteTask.bind(this) }
				/>
			</div>
		)
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos });
	}

	addTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}

	saveTask(oldTask, newTask) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos });
	}

	deleteTask(taskDeleted) {
		_.remove(this.state.todos, todo => todo.task === taskDeleted);
		this.setState({ todos: this.state.todos });
	}
}
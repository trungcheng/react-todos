import _ from 'lodash';
import React from 'react';
import TodoHeader from 'components/todoHeader';
import TodoListItem from 'components/todoListItems';

export default class TodoList  extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
	}

	render () {
		return ( 
			<table>
				<TodoHeader />
				<tbody>
					{ this.renderItems() }
				</tbody>
			</table>
		)
	}
}
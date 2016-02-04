
class AddTodo extends React.Component {

	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
	}

	addTodo() {
		var newTodoText = this.refs.newTodoText.getDOMNode().value;
		if (newTodoText.length > 0) {
			$.post('/Home/AddTodo',
				{ Text: newTodoText });

			this.refs.newTodoText.getDOMNode().value = "";
		}
	}

	render() {
		return (
		<div className="col-sm-4">
			<table>
				<tr>
					<td>
						<input className="form-control" type="text" ref="newTodoText" />
					</td>
					<td>
						<button className="btn btn-info" onClick={this.addTodo}>Add Todo</button>
					</td>
				</tr>
			</table>
		</div>
		)
	}
}

class TodoList extends React.Component {

	componentWillMount() {
		this.setState({ todos: [] });
		this.loadTodos();
	}

	loadTodos() {
		setInterval(() => {
			$.get("/Home/GetTodos", (todos) => {
				this.setState({ todos: todos });
			});
		}, 1000);
	}

	render() {
		let todos = this.state.todos.map(todo => {
			return < Todo id={todo.Id} date={todo.Date} text={todo.Text} />
		});

		return (
			<div className="row">
				{todos}
			</div>
			)
	}
}
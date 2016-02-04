
class Todo extends React.Component {

	constructor(props) {
		super(props);
		this.removeTodo = this.removeTodo.bind(this);
	}

	removeTodo() {
		$.post('/Home/RemoveTodo', { id: this.props.id });
	}

	render() {
		return (
			<div className="col-sm-12 alert alert-warning" onClick={this.removeTodo}>
				<div className="col-sm-2 todo-date">
					<h1>{this.props.date}</h1>
				</div>
				<div className="col-sm-10 todo-text">
					<h4>{this.props.text}</h4>
				</div>
			</div>
			)
	}
}
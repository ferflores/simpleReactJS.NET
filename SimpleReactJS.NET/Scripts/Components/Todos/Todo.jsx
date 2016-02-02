
class Todo extends React.Component {
	render() {
		return (
			<div className="col-sm-12 alert alert-warning">
				<div className="col-sm-3">
					<h1>{this.props.date}</h1>
				</div>
				<div className="col-sm-8">
					<h4>{this.props.text}</h4>
				</div>
			</div>
			)
	}
}
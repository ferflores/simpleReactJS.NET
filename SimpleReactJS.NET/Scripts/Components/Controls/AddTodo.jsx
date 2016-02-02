
class AddTodo extends React.Component {
	render() {
		return (
		<div className="col-sm-4">
			<table>
				<tr>
					<td><input className="form-control" type="text"/></td>
					<td><button className="btn btn-info">Add Todo</button></td>
				</tr>
			</table>
		</div>
		)
	}
}

class FilterTodo extends React.Component {
	render() {
		return (
			<div className="col-sm-4">
				<table>
					<tr>
						<td><input className="form-control" type="text"/></td>
						<td><button className="btn btn-info">Filter</button></td>
					</tr>
				</table>
			</div>
			)
	}
}
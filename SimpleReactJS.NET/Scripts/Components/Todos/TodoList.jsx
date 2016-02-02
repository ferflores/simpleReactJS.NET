
let todos = [
	{ date: '27 Nov', text: 'MTY .NET Meetup' },
	{ date: '28 Nov', text: 'Javascript Meetup' }
];

class TodoList extends React.Component {

	render() {
		return (
			
			<div className="row">
				{
					todos.map(todo => {
						return < Todo date={todo.date} text={todo.text} />
					})
				}
			</div>
			)
	}
}
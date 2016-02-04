using SimpleReactJS.NET.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Net;
using System.Web.Mvc;
using System.Linq;

namespace SimpleReactJS.NET.Controllers
{
	public class HomeController : Controller
	{
		private static readonly IList<Todo> _todos;

		static HomeController()
		{
			_todos = new List<Todo>
			{
				new Todo
				{
					Id = 0,
					Date = "04 Feb",
					Text = ".NET Mty meetup"
				},
				new Todo
				{
					Id = 1,
					Date = "06 Feb",
					Text = "Code Crafters meetup"
				}
			};
		}

		public ActionResult Index()
		{
			return View();
		}

		public JsonResult GetTodos()
		{
			return Json(_todos, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult AddTodo(Todo todo)
		{
			todo.Date = DateTime.Now.ToString("dd MMM", CultureInfo.CreateSpecificCulture("en-US"));
			todo.Id = _todos.Count;

			_todos.Insert(0, todo);

			return new HttpStatusCodeResult(HttpStatusCode.OK);
		}

		[HttpPost]
		public ActionResult RemoveTodo(int id)
		{
			_todos.Remove(_todos.Single(t => t.Id == id));

			return new HttpStatusCodeResult(HttpStatusCode.OK);
		}
	}
}
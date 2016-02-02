using System.Web.Optimization;
using System.Web.Optimization.React;

namespace SimpleReactJS.NET.App_Start
{
	public class BundleConfig
	{
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new BabelBundle("~/Scripts/Main")
				.IncludeDirectory("~/Scripts/Components", "*.jsx", true)
				.Include("~/Scripts/Main.jsx"));
		}
	}
}
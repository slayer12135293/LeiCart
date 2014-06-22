using System.Web;
using System.Web.Optimization;

namespace LeiCart
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            var angularApp = new ScriptBundle("~/angularApp");
            angularApp.Include("~/Scripts/angular/*.js");
            angularApp.Include("~/Scripts/angular/directives/*.js");
            angularApp.Include("~/Scripts/angular/factories/*.js");
            angularApp.Include("~/Scripts/angular/controllers/*.js");
            bundles.Add(angularApp);

            var cssBundle = new StyleBundle("~/css");
            cssBundle.IncludeDirectory("~/Content/", "*.css", true);
            bundles.Add(cssBundle);

            //BundleTable.EnableOptimizations = true;
        }
    }
}
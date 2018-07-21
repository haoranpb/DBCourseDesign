using System.Web;
using System.Web.Optimization;

namespace MvcMovie
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/allscripts").Include(
                "~/Scripts/address_all.js",
                "~/Scripts/base.min.js",
                "~/Scripts/bootstrap.js",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/buyConfirm.js",
                "~/Scripts/checkout.min.js",
                "~/Scripts/common.js",
                "~/Scripts/countdown.js",
                "~/Scripts/demo.js",
                "~/Scripts/easing.min.js",
                "~/Scripts/flickity.pkgd.min.js",
                "~/Scripts/html5shiv-min.js",
                "~/Scripts/index.js",
                "~/Scripts/jquery-1.11.1.min.js",
                "~/Scripts/jquery-3.3.1intellisense.js",
                "~/Scripts/jquery-3.3.1.min.js",
                "~/Scripts/jquery-3.3.1.slim.js",
                "~/Scripts/jquery.js",
                "~/Scripts/jquery.magnific-popup.min.js",
                "~/Scripts/jquery.mobile-menu.min.js",
                "~/Scripts/jquery.validate-vsdoc.js",
                "~/Scripts/jquery.validate.js",
                "~/Scripts/jquery.validate.unobtrusive.js",
                "~/Scripts/modernizr-2.8.3.js",
                "~/Scripts/modernizr.js",
                "~/Scripts/owl.carousel.min.js",
                "~/Scripts/prefixfree.min.js",
                "~/Scripts/price-slider.js",
                "~/Scripts/revolution-slider.js",
                "~/Scripts/revolution.extension.js",
                "~/Scripts/script.js",
                "~/Scripts/tuan.js",
                "~/Scripts/unslider.min.js"
                ));

        }
    }
}

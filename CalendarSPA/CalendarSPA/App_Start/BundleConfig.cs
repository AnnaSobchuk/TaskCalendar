﻿using System.Web;
using System.Web.Optimization;

namespace CalendarSPA
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {




            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                "~/Scripts/app/scripts.js",
                "~/Scripts/app/newjavascript.js"
               

               ));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/bootstrap.min.js",
                 "~/Scripts/app/jquery-2.1.1.js"
                  
                ));

            bundles.Add(new ScriptBundle("~/bundles/new").Include(
                 "~/Scripts/newLook/toDo.js",
                 "~/Scripts/jQueryUI1.11.2custom/jquery-ui-{version}.js"
                ));
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/style.css"
               ));
            bundles.Add(new StyleBundle("~/Content/new").Include(
                  "~/Content/newDesign.css", 
                  //"~/Content/lavish-bootstrap.css",
                  "~/Content/themes/jquery.ui.all.css"
               
             
                ));
            bundles.Add(new StyleBundle("~/Content/bootstrap").Include(
                "~/Content/bootstrap/bootstrap.css",
                "~/Content/bootstrap/bootstrap.css.map",
                "~/Content/bootstrap/bootstrap.min.css"
                ));
        }
    }
}
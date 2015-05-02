using Ninject;
using repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CalendarSPA.Controllers
{
    public class HomeController : Controller
    {
        public static IKernel AppKernel;
        UnitOfWork uof;
        public HomeController()
        {
            AppKernel = new StandardKernel(new MyNinjectModule());

            uof = AppKernel.Get<UnitOfWork>();
            
        }
        public ActionResult Index(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            var categories = uof.categories.getTasks();
            ViewBag.CategoryList = categories;
            return View();
        }
        public ActionResult OldView()
        {
            return View();
        }
        public ActionResult Solved()
        {
            return View();
        }
       
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class AdminInfoController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: AdminInfo/Index
        public ActionResult Index()
        {
            ViewBag.SalerList = db.Salers.ToList();
            ViewBag.CustomerList = db.Customers.ToList();

            return Content("success"); // finish redirect url in the front-end. Qustion: need to pass admin id through index func?
        }

        // GET: AdminInfo/DeleteSaler/id
        public ActionResult DeleteSaler(string id)
        {
            Saler saler = db.Salers.Find(id);
            db.Salers.Remove(saler);
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteCustomer/id
        public ActionResult DeleteCustomer(string id)
        {
            Customer customer = db.Customers.Find(id);
            db.Customers.Remove(customer);
            return Content("success"); // redirect to index via front-end
        }
    }
}
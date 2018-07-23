using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.DAL;
//这个页面针对的是买家
namespace MvcMovie.Controllers
{
    public class PersonalinfoController : Controller
    {
        private MovieDBContext db = new MovieDBContext();
        // GET: Personalinfo/Index?ID=XXX&role=xxxxx
        public ActionResult Index(string ID)
        {
            Customer cus = db.Customers.Find(ID);
            ViewBag.age = cus.CustomerAge;
            ViewBag.key = cus.CustomerPassword;
            ViewBag.id = ID;
            return View();
        }

        //get:/Personalinfo/EditCus?ID=222&CustomerAge=38&CustomerGender=girl&CustomerPassword=qqq&CustomerPhone=111
        public ActionResult EditCus([Bind(Include = "ID,CustomerAge,CustomerPassword")] Customer customer)
        {
            string ID = Request.QueryString["ID"];
            string CustomerAge = Request.QueryString["CustomerAge"];
            string CustomerPassword = Request.QueryString["CustomerPassword"];
            string CustomerGender = Request.QueryString["CustomerGender"];
            string CustomerPhone = Request.QueryString["CustomerPhone"];
            Customer customer = db.Customers.Find(ID);
            customer.CustomerAge = int.Parse(CustomerAge);
            customer.CustomerPassword = CustomerPassword;
            customer.CustomerGender = CustomerGender;
            customer.CustomerPhone = CustomerPhone;
            db.Entry(customer).State = EntityState.Modified;
            db.SaveChanges();
            return View();
        }


    }


}
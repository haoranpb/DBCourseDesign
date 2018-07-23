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
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteCustomer/id
        public ActionResult DeleteCustomer(string id)
        {
            Customer customer = db.Customers.Find(id);
            db.Customers.Remove(customer);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET:  AdminInfo/Search/ID
        // 根据ID搜索
        public ActionResult Search(string ID)
        {
            //先在买家中查找
            Customer customer = db.Customers.Find(ID);
            if (customer == null)//买家没找到 则在卖家中查找
            {
                Saler saler = db.Salers.Find(ID);
                if (saler == null) return Content("not found");//卖家中也没找到 则返回未找到信息
                else//返回找到的卖家信息
                {
                    var SalerInfo = new
                    {
                        Type = "saler",
                        ID = saler.SalerID,
                        Info = saler.SalerInfo,
                        Phone = saler.SalerPhone,
                    };
                    return Json(SalerInfo);
                }
            }
            else//返回找到的买家信息
            {
                var CustomerInfo = new
                {
                    Type = "customer",
                    ID = customer.ID,
                    Age = customer.CustomerAge,
                    Gender = customer.CustomerGender,
                    Phone = customer.CustomerPhone,
                    Credit = customer.CustomerCredit,
                };
                return Json(CustomerInfo);
            }
            // url重定向在前端实现 
        }

    }
}
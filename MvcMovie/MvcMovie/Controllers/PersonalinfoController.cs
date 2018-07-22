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
            //Admin adm = db.Admins.Find(ID);
            //Saler sel = db.Salers.Find(ID);
            //int role = 0;
            //if (adm != null) role = 1;
            //if (sel != null) role = 2;
            //根据id在数据库内查找
            //尝试使用viewbag对页面传参
            //switch (role)
            //{
            //    case 0://顾客
                    ViewBag.age = cus.CustomerAge;
                    ViewBag.key = cus.CustomerPassword;
                    ViewBag.id = ID;
            //        break;
            //    case 1://管理
            //        ViewBag.key = adm.AdminPassword;
            //        ViewBag.id = ID;
            //        break;
            //    case 2://卖家
            //        ViewBag.salerinfo = sel.SalerInfo;
            //        ViewBag.key = sel.SalerPassword;
            //        ViewBag.id = ID;
            //        ViewBag.phone = sel.SalerPhone;
            //        break;
            //}
            return View();
        }
        // Post:/Personalinfo/EditCus
        //[HttpPost]
        //public ActionResult EditCus([Bind(Include = "ID,CustomerAge,CustomerPassword")] Customer customer)
        //{
        //    db.Entry(customer).State = EntityState.Modified;
        //    db.SaveChanges();
        //    return Content("success");
        //}

        //get:/Personalinfo/EditCus?ID=222&CustomerAge=38&CustomerGender=girl&CustomerPassword=qqq&CustomerPhone=111
        public ActionResult EditCus()//修改信息
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
            return View(); //页面不跳转，应在前端提示成功
        }


        //// Post:/Personalinfo/EditAdm
        //[HttpPost]
        //public ActionResult EditAdm([Bind(Include = "AdminID,AdminPassword")] Admin admin)
        //{
        //    db.Entry(admin).State = EntityState.Modified;
        //    db.SaveChanges();
        //    return Content("success");
        //}
        //// Post:/Personalinfo/EditSel
        //[HttpPost]
        //public ActionResult EditSel([Bind(Include = "SalerID,SalerPassword,SalerPhone,SalerInfo")] Saler seller)
        //{
        //    db.Entry(seller).State = EntityState.Modified;
        //    db.SaveChanges();
        //    return Content("success");
        //}


    }


}
using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.DAL;
//全部使用localdb的连接方式，而非oracle
namespace MvcMovie.Controllers
{
    public class PersonalinfoController : Controller
    {
        private MovieDBContext db = new MovieDBContext();
        // GET: Personalinfo/Index?ID=XXX&role=xxxxx
        public ActionResult Index(string ID)
        {
            Customer cus = db.Customers.Find(ID);
            Admin adm = db.Admins.Find(ID);
            Saler sel = db.Salers.Find(ID);
            int role = 0;
            if (adm != null) role = 1;
            if (sel != null) role = 2;
            //根据id在数据库内查找
            //尝试使用viewbag对页面传参
            switch (role)
            {
                case 0://顾客
                    ViewBag.age = cus.CustomerAge;
                    ViewBag.key = cus.CustomerPassword;
                    ViewBag.id = ID;
                    break;
                case 1://管理
                    ViewBag.key = adm.AdminPassword;
                    ViewBag.id = ID;
                    break;
                case 2://卖家
                    ViewBag.salerinfo = sel.SalerInfo;
                    ViewBag.key = sel.SalerPassword;
                    ViewBag.id = ID;
                    ViewBag.phone = sel.SalerPhone;
                    break;
            }
            return View();
        }
        // Post:/Personalinfo/EditCus
        [HttpPost]
        public ActionResult EditCus([Bind(Include = "ID,CustomerAge,CustomerPassword")] Customer customer)
        {
            db.Entry(customer).State = EntityState.Modified;
            db.SaveChanges();
            return Content("success");
        }
        // Post:/Personalinfo/EditAdm
        [HttpPost]
        public ActionResult EditAdm([Bind(Include = "AdminID,AdminPassword")] Admin admin)
        {
            db.Entry(admin).State = EntityState.Modified;
            db.SaveChanges();
            return Content("success");
        }
        // Post:/Personalinfo/EditSel
        [HttpPost]
        public ActionResult EditSel([Bind(Include = "SalerID,SalerPassword,SalerPhone,SalerInfo")] Saler seller)
        {
            db.Entry(seller).State = EntityState.Modified;
            db.SaveChanges();
            return Content("success");
        }


    }


}
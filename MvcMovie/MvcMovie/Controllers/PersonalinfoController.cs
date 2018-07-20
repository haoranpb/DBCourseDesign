using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//全部使用localdb的连接方式，而非oracle
namespace MvcMovie.Controllers
{
    public class PersonalinfoController : Controller
    {
        private CustomerDBContext cdb = new CustomerDBContext();
        private SalerDBContext sdb = new SalerDBContext();
        private AdminDBContext adb = new AdminDBContext();
        // GET: Personalinfo/Index?ID=XXX&role=xxxxx
        public ActionResult Index(string ID)
        {
            Customer cus = cdb.Customers.Find(ID);
            Admin adm = adb.Admins.Find(ID);
            Saler sel = sdb.Salers.Find(ID);
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
            cdb.Entry(customer).State = EntityState.Modified;
            cdb.SaveChanges();
            return Content("success");
        }
        // Post:/Personalinfo/EditAdm
        [HttpPost]
        public ActionResult EditAdm([Bind(Include = "AdminID,AdminPassword")] Admin admin)
        {
            adb.Entry(admin).State = EntityState.Modified;
            adb.SaveChanges();
            return Content("success");
        }
        // Post:/Personalinfo/EditSel
        [HttpPost]
        public ActionResult EditSel([Bind(Include = "SalerID,SalerPassword,SalerPhone,SalerInfo")] Saler seller)
        {
            sdb.Entry(seller).State = EntityState.Modified;
            sdb.SaveChanges();
            return Content("success");
        }


    }


}
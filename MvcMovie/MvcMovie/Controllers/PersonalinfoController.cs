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
        private SellerDBContext sdb = new SellerDBContext();
        private AdminDBContext adb = new AdminDBContext();
        // GET: Personalinfo/Index?ID=XXX&role=xxxxx
        public ActionResult Index(string ID)
        {   Customer cus = cdb.Customers.Find(ID);
            Admin adm = adb.Admins.Find(ID);
            Seller sel = sdb.Sellers.Find(ID);
            int role = 0;
            if (adm != null) role = 1;
            if (sel != null) role = 2;
            //根据id在数据库内查找
            //尝试使用viewbag对页面传参
            switch (role)
            {
                case 0://顾客
                    ViewBag.age=cus.age;
                    ViewBag.key = cus.key;
                    ViewBag.id = ID;
                    break;
                case 1://管理
                    ViewBag.key = adm.key;
                    ViewBag.id = ID;
                    break;
                case 2://卖家
                    ViewBag.province = sel.province;
                    ViewBag.key = sel.key;
                    ViewBag.id = ID;
                    ViewBag.district = sel.district;
                    ViewBag.city = sel.city;
                    ViewBag.phone_number = sel.phone_number;
                    break;
            }
            return View();
        }
        // Post:/Personalinfo/EditCus
        [HttpPost]
        public ActionResult EditCus([Bind(Include = "ID,age,key")] Customer customer){
             cdb.Entry(customer).State = EntityState.Modified;
             cdb.SaveChanges();
             return Content("success");
        }
        // Post:/Personalinfo/EditAdm
        [HttpPost]
        public ActionResult EditAdm([Bind(Include = "ID,key")] Admin admin)
        {
            adb.Entry(admin).State = EntityState.Modified;
            adb.SaveChanges();
            return Content("success");
        }
        // Post:/Personalinfo/EditSel
        [HttpPost]
        public ActionResult EditSel([Bind(Include = "ID,key,province,city,district,phone_number")] Seller seller)
        {
            sdb.Entry(seller).State = EntityState.Modified;
            sdb.SaveChanges();
            return Content("success");
        }


    }


}
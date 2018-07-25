using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using System.Data.Entity;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class SalerController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: /Saler/Index?ID=xxx
        public ActionResult Index( )
        {
            string ID = Request.QueryString["ID"];
            //return saler info via viewbag
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            //提取店铺信息
            var shopquery = from shops in db.Shops
                           where shops.SalerID == ID
                           select shops;

            //return shoplist of id
            string ShopIdString = "";
            foreach (var shop in shopquery)
            {
                ShopIdString = ShopIdString + " " + shop.ShopID;
            }
            ViewBag.shopidstring = ShopIdString;

            //return shop orderlist

            return PartialView();
        }

        public ActionResult Order()//向页面返回全部的shop内的全部order的id
        {
            var shopid1 = Request.QueryString["shopid1"];

            var shopid2 = Request.QueryString["shopid2"];

            var shopid3 = Request.QueryString["shopid3"];
            string p = "";
            var orderinfo1 = (from i in db.Orders where i.ShopID == shopid1 select i);
            var orderinfo2 = (from i in db.Orders where i.ShopID == shopid2 select i);
            var orderinfo3 = (from i in db.Orders where i.ShopID == shopid3 select i);
            if(orderinfo1.Count()!=0)
            foreach (var o in orderinfo1)
            {
                p = p + " " + o;
            }
            if (orderinfo2.Count() != 0)
                foreach (var o in orderinfo2)
            {
                p = p + " " + o;
            }
            if (orderinfo3.Count() != 0)
                foreach (var o in orderinfo3)
            {
                p = p + " " + o;
            }
            return Content(p);
        }

        public ActionResult Orderinfo()
        {
            string Orderid = Request.QueryString["Orderid"];
            Order order = db.Orders.Find(Orderid);
            string ordertime = order.OrderTime.ToString();
            string shopid = order.ShopID;
            var json = new
            {
                OrderId = Orderid,
                OrderTime = ordertime,
                ShopId = shopid
            };
            return Json(json,JsonRequestBehavior.AllowGet);
        }

        // ShopDetail Page
        // GET: ../Saler/ShopDetail?shopid=100001
        public ActionResult ShopDetail()
        {
            string shopid = Request.QueryString["shopid"];
            Shop shop = db.Shops.Find(shopid);
            if (shop == null)
            {
                return Content("shop not exist");
            }
            else
            {
                ViewBag.shopid = shopid;
                ViewBag.ShopName = shop.ShopName; // what else to display?
                return PartialView();
            }
        }

        // create shop func finished in a pop up dialog
        // GET: /Saler/CreateShopPage?ID=xxx&shopid=xx
        public ActionResult CreateShopPage()
        {
            string ID = Request.QueryString["ID"]; // what this ID for?
            ViewBag.shopid = Request.QueryString["shopid"];
            //卖家基本信息通过viewbag传输
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            return PartialView();
        }


        //添加店铺 /Saler/CreateShop?ShopID=111&ShopName=111&SalerCredit=111&SalerID=Lucas
        public ActionResult CreateShop(string ShopID, string ShopName, string SalerCredit, string SalerID)
        {
            Shop shop = new Shop();
            shop.ShopID = ShopID;
            shop.ShopName = ShopName;
            shop.SalerCredit = SalerCredit;
            shop.SalerID = SalerID;

            if (ModelState.IsValid)
            {
                db.Shops.Add(shop);
                db.SaveChanges();
                return RedirectToAction("Index/"+shop.SalerID);
            }

            return Content("failure");
        }
        
        // delete shop button wait to add
        public ActionResult DeleteShop()
        {
            string ID = Request.QueryString["ID"];
            Shop shop = db.Shops.Find(ID);
            if(shop == null)
            {
                return Content("failure");
            }
            db.Shops.Remove(shop);
            db.SaveChanges();
            return RedirectToAction("Index/" + shop.SalerID);
        }

        //跳转至SalerInfo /Saler/SalerInfoPage
        public ActionResult SalerInfoPage(string ID)
        {
            //卖家基本信息通过viewbag传输
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            return View();
        }

        //修改卖家信息  /Saler/EditSalerInfo?ID=111&SalerPassword=qqq&SalerInfo=what&SalerPhone=123
        public ActionResult EditSalerInfo()
        {
            string ID = Request.QueryString["ID"];
            string SalerPassword = Request.QueryString["SalerPassword"];
            string SalerInfo = Request.QueryString["SalerInfo"];
            string SalerPhone = Request.QueryString["SalerPhone"];

            Saler saler = db.Salers.Find(ID);
            saler.SalerInfo = SalerInfo;
            saler.SalerPassword = SalerPassword;
            saler.SalerPhone = SalerPhone;

            if (ModelState.IsValid)
            {
                db.Entry(saler).State = EntityState.Modified;
                db.SaveChanges();
                return Content("success");
            }
            
            return Content("failed");
        }

    }
}
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

        // GET: /Saler/index?ID=xxx
        public ActionResult Index( )
        {
            string ID = Request.QueryString["ID"];
            //卖家基本信息通过viewbag传输
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            //提取店铺信息
            var shopquery = from shops in db.Shops
                           where shops.SalerID == ID
                           select shops;

            //用于测试
            string ShopIdString = "";
            foreach (var shop in shopquery)
            {
                ShopIdString = String.Join(ShopIdString, " ", shop.ShopID);
            }
            ViewBag.shopidstring = ShopIdString;
            return PartialView();

            //return View(shopquery.ToList());
        }

        //跳转至创建店铺页面 /Saler/CreateShopPage?ID=Lucas
        public ActionResult CreateShopPage()
        {
            string ID = Request.QueryString["ID"];
            //卖家基本信息通过viewbag传输
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            return View();
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
        
        //删除店铺 /Saler/DeleteShop?ID=111
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
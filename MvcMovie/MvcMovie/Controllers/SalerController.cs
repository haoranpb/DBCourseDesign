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
        public ActionResult Index(string ID)
        {

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
            return Content(ShopIdString);

            //return View(shopquery.ToList());
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

            return View(shop);
        }
        
        //删除店铺 /Saler/DeleteShop?ID=111
        public ActionResult DeleteShop()
        {
            string ID = Request.QueryString["ID"];
            Shop shop = db.Shops.Find(ID);
            db.Shops.Remove(shop);
            db.SaveChanges();
            return RedirectToAction("Index/" + shop.SalerID);
        }

        

    }
}
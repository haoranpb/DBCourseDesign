using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using Oracle.ManagedDataAccess.Client;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class HomePageController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: /Homepage/Index
        public ActionResult Index()
        {
            return PartialView();
        }

        //// GET: Recommend/Shop
        //// 点击进入店铺页
        //public ActionResult ShopInfo(string id)
        //{
        //    string user_id = ViewBag.ID;
        //    Shop shop = db.Shops.Find(id);
        //    if (shop == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    string url = string.Join("~/Shop/Index", id);
        //    return RedirectToRoute("url & ID = user_id");
        //}

        //// GET: Recommend/Goods
        //// 点击进入商品页
        //public ActionResult ItemInfo(string id)
        //{
        //    string user_id = ViewBag.ID;
        //    Item item = db.Items.Find(id);
        //    if (item == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    string url = string.Join("~/Item/Index", id);
        //    return RedirectToRoute("url & ID = user_id");
        //}

        //// GET: Recommend/SearchShop
        //// 搜索店铺
        //public ActionResult SearchShop(string name)
        //{
        //    Shop shop = db.Shops.Find(name);
        //    if (shop == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    ViewBag.Name = shop.ShopName;
        //    ViewBag.ShopID = shop.ShopID;
        //    ViewBag.Saler = shop.SalerID;
        //    ViewBag.Level = shop.SalerCredit;

        //    string url = string.Join("~/Shop/Index", name);
        //    return RedirectToRoute("url & ID = user_id");
        //}

        // GET: /HomePage/Search?keyword=LILIFAN
        // 搜索商品
        public ActionResult Search(string keyword)
        {
            var items = from item in db.Items
                        where item.ItemName.Contains(keyword)
                        select item;

            //用于测试
            string ItemIdString = "";
            foreach (var item in items)
            {
                ItemIdString = String.Join(ItemIdString, "   ", item.ItemID);
            }
            return Content(ItemIdString);

            //return View(items.ToList());
        }
    }
}
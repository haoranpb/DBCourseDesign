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
    public class HomePagesController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: Recommend
        // 
        public ActionResult Index()
        {
            ViewBag.Message = "Vibranium Home Page.";

            return View();
        }

        // GET: Recommend/Shop
        public ActionResult ShopInfo(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shop shop = db.Shops.Find(id);
            if (shop == null)
            {
                return HttpNotFound();
            }
            return View();
        }

        // GET: Recommend/Goods
        public ActionResult GoodsInfo(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Item item = db.Items.Find(id);
            if (item == null)
            {
                return HttpNotFound();
            }
            return View();
        }

        // GET: Recommend/SearchShop
        public ActionResult SearchShop(string name)
        {
            Shop shop = db.Shops.Find(name);
            if (shop == null)
            {
                return HttpNotFound();
            }
            var ShopInfo = new { Name = Shop.ShopName, ID = Shop.ShopID,
                Saler = Shop.SalerID, Level = Shop.SalerCredit };
            return Json(ShopInfo);
        }

        // GET: Recommend/SearchGoods
        public ActionResult SearchGoods(string name)
        {
            Item item = db.Items.Find(name);
            if (goods == null)
            {
                return HttpNotFound();
            }
            var GoodsInfo = new
            {
                GID = Item.ItemID,
                SID = Item.ShopID,
                Price = Item.ItemPrice,
                Name = Item.ItemPrice,
                Info = Item.ItemInfo,
                Pic = Item.ItemPic,
                Sale = Item.Sales,
                Quanity = Item.Remain
            };
            return Json(GoodsInfo);
        }
    }
}
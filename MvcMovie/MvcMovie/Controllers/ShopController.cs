using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using MvcMovie.Models;
using Oracle.ManagedDataAccess.Client;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class ShopController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: Shop/Index/id
        public ActionResult Index(string id)
        {
            ViewBag.id = id;
            return View();
        }

        //商店内商品列表
        // GET: Shop/ListID/shopid
        public ActionResult ListID(string shopid)
        {
            var shopinfo = (from j in db.Shops where j.ShopID == shopid select j);
            string itemIdlist = "";
            foreach (var shopitem in shopinfo)
            {
                itemIdlist = String.Join(itemIdlist, " ", shopitem.ShopID.ToString());
            }
            return Content(itemIdlist);
        }

        //商店信息
        // GET: Shop/ShopInfo/id
        public ActionResult ShopInfo(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Shop shop = db.Shops.Find(id);
            var ShopInfo = new
            {
                Name = shop.ShopName,
                ID = shop.ShopID,
                Saler = shop.SalerID,
            };
            return Json(ShopInfo);
        }

        // GET: Shop/SalerInfo/id
        //卖家信息
        public ActionResult SalerInfo(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Saler saler = db.Salers.Find(id);
            var SalerInfo = new
            {
                ID = saler.SalerID,
                Info = saler.SalerInfo,
            };
            return Json(saler.SalerInfo);
        }

        // GET: Shop/ItemInfo/itemid
        // 点击进入商品页
        public ActionResult ItemInfo(string itemid)
        {
            string user_id = ViewBag.ID;
            Item item = db.Items.Find(itemid);
            if (item == null)
            {
                return HttpNotFound();
            }
            var json = new { ItemID = item.ItemID, ItemInfo = item.ItemInfo,ItemName = item.ItemName,itemPic = item.ItemPic,ItemPrice = item.ItemPrice, ItemRemain = item.ItemRemain ,ItemSales = item.ItemSales,ShopID = item.ShopID };
            return Json(json);
        }
    }
}
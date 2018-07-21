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
        // Home页面
        public ActionResult Index()
        {
            ViewBag.Message = "Vibranium Home Page.";

            return PartialView();
        }

        // GET: Recommend/Shop
        // 点击进入店铺页
        public ActionResult ShopInfo(string id)
        {
            string user_id = ViewBag.ID;
            Shop shop = db.Shops.Find(id);
            if (shop == null)
            {
                return HttpNotFound();
<<<<<<< HEAD
            }
            string url = string.Join("~/Shop/Index", id);
=======
            }
            string url = string.Join("~/Shop/Index", id);
>>>>>>> fe54a95606e1b40a0a4cd8c84b9cd714ef2c6773
            return RedirectToRoute("url & ID = user_id");
        }

        // GET: Recommend/Goods
        // 点击进入商品页
        public ActionResult ItemInfo(string id)
        {
            string user_id = ViewBag.ID;
            Item item = db.Items.Find(id);
            if (item == null)
            {
                return HttpNotFound();
<<<<<<< HEAD
            }
            string url = string.Join("~/Item/Index", id);
=======
            }
            string url = string.Join("~/Item/Index", id);
>>>>>>> fe54a95606e1b40a0a4cd8c84b9cd714ef2c6773
            return RedirectToRoute("url & ID = user_id");
        }

        // GET: Recommend/SearchShop
        // 搜索店铺
        public ActionResult SearchShop(string name)
        {
            Shop shop = db.Shops.Find(name);
            if (shop == null)
            {
                return HttpNotFound();
<<<<<<< HEAD
            }
            ViewBag.Name = shop.ShopName;
            ViewBag.ShopID = shop.ShopID;
            ViewBag.Saler = shop.SalerID;
            ViewBag.Level = shop.SalerCredit;

            string url = string.Join("~/Shop/Index", name);
=======
            }
            ViewBag.Name = shop.ShopName;
            ViewBag.ShopID = shop.ShopID;
            ViewBag.Saler = shop.SalerID;
            ViewBag.Level = shop.SalerCredit;

            string url = string.Join("~/Shop/Index", name);
>>>>>>> fe54a95606e1b40a0a4cd8c84b9cd714ef2c6773
            return RedirectToRoute("url & ID = user_id");
        }

        // GET: Recommend/SearchGoods
        // 搜索商品
        public ActionResult SearchGoods(string name)
        {
            Item item = db.Items.Find(name);
            if (item == null)
            {
                return HttpNotFound();
<<<<<<< HEAD
            }
            ViewBag.GID = item.ItemID;
            ViewBag.SID = item.ShopID;
            ViewBag.Price = item.ItemPrice;
            ViewBag.Name = item.ItemPrice;
            ViewBag.Info = item.ItemInfo;
            ViewBag.Pic = item.ItemPic;
            ViewBag.Sale = item.ItemSales;
            ViewBag.Quanity = item.ItemRemain;

            string url = string.Join("~/Item/Index", name);
=======
            }
            ViewBag.GID = item.ItemID;
            ViewBag.SID = item.ShopID;
            ViewBag.Price = item.ItemPrice;
            ViewBag.Name = item.ItemPrice;
            ViewBag.Info = item.ItemInfo;
            ViewBag.Pic = item.ItemPic;
            ViewBag.Sale = item.ItemSales;
            ViewBag.Quanity = item.ItemRemain;

            string url = string.Join("~/Item/Index", name);
>>>>>>> fe54a95606e1b40a0a4cd8c84b9cd714ef2c6773
            return RedirectToRoute("url & ID = user_id");
        }
    }
}
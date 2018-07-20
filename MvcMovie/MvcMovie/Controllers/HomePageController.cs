using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;

namespace MvcMovie.Controllers
{
    public class HomePageController : Controller
    {
        private ShopDBContext sdb = new ShopDBContext();
        private GoodsDBContext gdb = new GoodsDBContext();

        // GET: Recommend
        public ActionResult Index()
        {
            ViewBag.Message = "Vibranium Home Page.";
            Response.Redirect("http://localhost:52510/HomePage");
            return View();
        }

        // GET: Recommend/Shop
        public ActionResult Shop()
        {
            ViewBag.Message = "Shop Page.";

            return View();
        }

        // GET: Recommend/Goods
        public ActionResult Goods()
        {
            ViewBag.Message = "Goods Page.";

            return View();
        }

        // GET: Recommend/Discount
        public ActionResult Discount()
        {
            ViewBag.Message = "Discount Page.";

            return View();
        }

        // GET: Recommend/SearchShop
        public ActionResult SearchShop(string id)
        {
            Shop shop = sdb.Shop.Find(id);
            if (shop == null)
            {
                return HttpNotFound();
            }
            return Redirect(@"http://localhost:52510/Shop/id=？");
        }

        // GET: Recommend/SearchGoods
        public ActionResult SearchGoods(string id)
        {
            Goods goods = gdb.Goods.Find(id);
            if (goods == null)
            {
                return HttpNotFound();
            }
            return Redirect(@"http://localhost:52510/goods/id=？");
        }
    }
}
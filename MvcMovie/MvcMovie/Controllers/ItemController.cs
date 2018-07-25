using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using MvcMovie.DAL;
using System.Data.Entity;

namespace MvcMovie.Controllers

{
    public class ItemController : Controller
    {

        private MovieDBContext db = new MovieDBContext();

        // GET: /Item/Index?id=xxx&user_id=xxx
        public ActionResult Index()
        {
            ViewBag.id = Request.QueryString["id"]; // itemid
            ViewBag.user_id = Request.QueryString["user_id"];

            Item good = db.Items.Find(ViewBag.id);
            if (good == null) return HttpNotFound();

            ViewBag.name = good.ItemName;
            ViewBag.price = good.ItemPrice;
            ViewBag.ItemInfo = good.ItemInfo;
            ViewBag.img = "../Images/img/images/" + good.ItemID + ".jpg";

            return PartialView();
            
        }


        //GET: /Item/Add?ID=X&customerID=xxx&cnt=xx
        //向购物车增加商品 cnt为数量
        public ActionResult Add()
        {
            string itemID = Request.QueryString["ID"];
            string customerID = Request.QueryString["customerID"];
            int cnt = int.Parse(Request.QueryString["cnt"]); // 1 const
            Item good = db.Items.Find(itemID);
            if (good.ItemRemain < cnt)
                return Content("low_stock");//库存不足

            // Cart cart = db.Carts.Find(itemID, customerID); primary key do not match!Tempory solution: cnt===1
            var cart = (from i in db.Carts // 
                        where i.CustomerID == customerID & i.CartID == itemID
                        select i).First();

            if (cart == null) // the item is not in the cart
            {
                var p = (from j in db.Carts
                         where j.CustomerID == customerID
                         select j);
                if (p.Count() >= 3) return Content("full");//防止购物车内商品种类>3个，这样会过多，然后前端提示一下，购物车商品过多
                else
                {
                    Cart newCart = new Cart()
                    {
                        CustomerID = customerID,
                        CartID = itemID,
                        ItemCount = cnt,
                        CartPrice = good.ItemPrice * cnt,
                    };
                    db.Carts.Add(newCart);
                    db.SaveChanges();
                }
            }
            else
            {
                cart.ItemCount += cnt;
                cart.CartPrice += good.ItemPrice * cnt;
                db.Entry(cart).State = EntityState.Modified;
                db.SaveChanges();
                return Content("already_in");
            }
            return Content("success");
        }
    }

}


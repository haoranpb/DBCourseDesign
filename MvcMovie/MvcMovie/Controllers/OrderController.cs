using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class OrderController : Controller
    {
        private MovieDBContext db = new MovieDBContext();


        public ActionResult Index(string id)
        {
            ViewBag.id = id;
            return View();
        }


        [HttpPost]
        public ActionResult Create([Bind(Include = "OrderID,ShopID ,CustomerID,OrderPrice , OrderCount ,OrderTime ,OrderState")] Order order)
        {
            db.Orders.Add(order);
            db.SaveChanges();
        
            var iteminfo = (from c in db.OrderDetails where c.OrderID == order.OrderID select c);
            foreach (var iteml in iteminfo)
            {
                Item itemp = db.Items.Find(iteml.ItemID);
                itemp.ItemRemain = itemp.ItemRemain - 1;
                db.Entry(itemp).State = EntityState.Modified;
                db.SaveChanges();


                var cartinfo = (from j in db.Carts where j.CartID == iteml.ItemID && j.CustomerID == order.CustomerID select j);
                foreach (var cartitem in cartinfo)
                {
                    db.Carts.Remove(cartitem);
                    db.SaveChanges();
                }//删除购物车内的商品
            }
         
            Item item = db.Items.Find();
            return Content("success") ;
        }

        public ActionResult Query(string Orderid)
        {
            Order od = db.Orders.Find(Orderid);
            var iteminfo = (from c in db.OrderDetails where c.OrderID == Orderid select c);
            int number = 0;
            string idstring = "";
            string sumstring = "";
            foreach (var iteml in iteminfo)
            {
                number++;
                idstring = String.Join (idstring," ",iteml.ItemID);
                sumstring = String.Join(sumstring, " ", iteml.OrderDetailCount);
            }
            var P = new { number = number.ToString(), idstring = idstring, sumstring = sumstring };
                return Json(P);
        }
    }
}
using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcMovie.Controllers
{
    public class OrderController : Controller
    {
        OrderDBContext db = new OrderDBContext();
        ItemDBContext idb = new ItemDBContext();
        OrderItemDBContext oidb = new OrderItemDBContext();
        CartDBContext cdb = new CartDBContext();
      
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
        
            var iteminfo = (from c in oidb.OrderItems where c.OrderID == order.OrderID select c);
            foreach (var iteml in iteminfo)
            {
                Item itemp = idb.Items.Find(iteml.ItemID);
                itemp.ItemRemain = itemp.ItemRemain - 1;
                idb.Entry(itemp).State = EntityState.Modified;
                idb.SaveChanges();


                var cartinfo = (from j in cdb.Carts where j.CartID == iteml.ItemID && j.CustomerID == order.CustomerID select j);
                foreach (var cartitem in cartinfo)
                {
                    cdb.Carts.Remove(cartitem);
                    db.SaveChanges();
                }//删除购物车内的商品
            }
         
            Item item = idb.Items.Find();
            return Content("success") ;
        }

        public ActionResult Query(int Orderid)
        {
            Order od = db.Orders.Find(Orderid);
            var iteminfo = (from c in oidb.OrderItems where c.OrderID == Orderid select c);
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
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
namespace MvcMovie.Controllers
{
    public class CartController : Controller
    {
        OrderItemDBContext oidb = new OrderItemDBContext();
        OrderDBContext odb = new OrderDBContext();
        CartDBContext cdb = new CartDBContext();
        ItemDBContext idb = new ItemDBContext();
        // GET: Cart
        public ActionResult Index(string id)
        {
            ViewBag.id = id;
            return View();
        }
        
        public ActionResult ListID(string customerid)
        {
            var cartinfo = (from j in cdb.Carts where j.CustomerID == customerid select j);
            string idstring = "";
            foreach (var cartitem in cartinfo){
                idstring = String.Join(idstring, " ", cartitem.CartID.ToString());
            }
            return Content(idstring);
        }

        [HttpPost]
        public ActionResult Edit([Bind(Include = "CustomerID,CartID,ItemCount,CartPrice")] Cart cart)
        {
            if (cart.ItemCount == "0")
            {
                Cart c = cdb.Carts.Find(cart.CartID);
                cdb.Carts.Remove(c);
                cdb.SaveChanges();
            }
            else
            {
                cdb.Entry(cart).State = EntityState.Modified;
                cdb.SaveChanges();
            }
                return Content("Success");
           
        }

    }
}
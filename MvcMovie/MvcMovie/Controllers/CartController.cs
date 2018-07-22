using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using MvcMovie.DAL;
namespace MvcMovie.Controllers
{
    public class CartController : Controller
    {
        MovieDBContext db = new MovieDBContext();
        //Get: LOCLAHOSR:1236513/Cart/Index/asdf
        // GET: Cart
        public ActionResult Index(string id)
        {
            ViewBag.id = id;
            return View();
        }
        
        public ActionResult ListID(string customerid)
        {
            var cartinfo = (from j in db.Carts where j.CustomerID == customerid select j);
            string idstring = "";
            foreach (var cartitem in cartinfo){
                idstring = String.Join(idstring, " ", cartitem.CartID.ToString());
            }
            return Content(idstring);
        }

        [HttpPost]
        public ActionResult Edit([Bind(Include = "CartID,ItemCount,CartPrice")] Cart cart)
        {
            if (cart.ItemCount == 0)
            {
                Cart c = db.Carts.Find(cart.CartID);
                db.Carts.Remove(c);
                db.SaveChanges();
            }
            else
            {
                db.Entry(cart).State = EntityState.Modified;
                db.SaveChanges();
            }
                return Content("Success");
        }

    }
}
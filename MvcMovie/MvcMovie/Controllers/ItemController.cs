using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using Oracle.ManagedDataAccess.Client;
using MvcMovie.DAL;

namespace MvcMovie.Controllers

{
    public class ItemController : Controller
    {

        private MovieDBContext db = new MovieDBContext();

        // GET: /Item?id=xx
        public ActionResult Index(string id)
        {
            Item good = db.Items.Find(id);
            if (good == null) return HttpNotFound();
            return PartialView(good);
        }

        //GET: Goodsp/Add?ID=X&customerID&cnt=xx
        public ActionResult Add(string itemID,string customerID,int cnt)
        {
            Item good = db.Items.Find(itemID);
            if (good.ItemRemain < cnt) return Content("low_stock");//库存不足
            good.ItemRemain -= cnt;
            db.SaveChanges();
            Cart cart = db.Carts.Find(itemID, customerID);
            if(cart==null)
            {
                Cart newCart = new Cart()
                {
                    CustomerID = customerID,
                     CartID = itemID,
                     ItemCount=cnt,
                     CartPrice=good.ItemPrice*cnt,
                };
                db.SaveChanges();
             }
            else
            {
                cart.ItemCount += cnt;
                cart.CartPrice += good.ItemPrice * cnt;
                db.SaveChanges();
            }
            return Content("success");
            //else return Content("fail");
        }

    }

}


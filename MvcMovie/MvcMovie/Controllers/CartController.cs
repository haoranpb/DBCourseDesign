using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Mvc;
using MvcMovie.Models;
using MvcMovie.DAL;
namespace MvcMovie.Controllers
{
    public class CartController : Controller
    {
        MovieDBContext db = new MovieDBContext();

        //GET: LOCLAHOSR:1236513/Cart/Index/asdf
        public ActionResult Index(string customerID)
        {
            ViewBag.customerID = customerID;
            return View();
        }

        public ActionResult ListID(string customerid)
        {
            var cartinfo = (from j in db.Carts where j.CustomerID == customerid select j);
            string idstring = "";
            foreach (var cartitem in cartinfo)
            {
                idstring = String.Join(idstring, " ", cartitem.CartID.ToString());
            }
            return Content(idstring);
        }

        // 删除购物车中某商品的全部
        //GET: /Cart/DeletSome?ID=X&customerID
        public ActionResult DeleteSome()
        {
            string itemID = Request.QueryString["ID"];
            if (itemID == null) return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            string customerID = Request.QueryString["customerID"];
            if (customerID == null) return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Cart cart = db.Carts.Find(customerID, itemID);
            Item item = db.Items.Find(itemID);//要删除的商品

            if (cart == null) return HttpNotFound();
            else
            {
                cart.CartPrice -= item.ItemPrice * cart.ItemCount;//商品总价减 - 删除的商品数量 * 价格
                db.Carts.Remove(cart);
                db.SaveChanges();
            }
            //return RedirectToRoute("~/Cart/Index");
            return Content("success");
            //else return Content("fail");
        }

        // 删除购物车中某商品的一个
        // GET: /Cart/DeletOne?ID=X&customerID
        public ActionResult DeleteOne()
        {
            string itemID = Request.QueryString["ID"];
            if (itemID == null) return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            string customerID = Request.QueryString["customerID"];
            if (customerID == null) return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Cart cart = db.Carts.Find(customerID, itemID);
            Item item = db.Items.Find(itemID);//要删除的商品

            if (cart == null) return HttpNotFound();
            else if (cart.ItemCount == 1)//该商品只有一件 删完
            {
                cart.CartPrice -= item.ItemPrice;
                db.Carts.Remove(cart);
                db.SaveChanges();
            }
            else//否则商品数量减一
            {
                cart.CartPrice -= item.ItemPrice;
                cart.ItemCount -= 1;
                db.SaveChanges();
            }
            //return RedirectToRoute("~/Cart/Index");
            return Content("success");
            //else return Content("fail");
        }

        //添加商品在ItemController.cs中实现

        //结算
        //默认结算购物车内所有商品 所以前端直接向OrderController发送CustomerID即可
    }
}
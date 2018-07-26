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

        //GET: LOCLAHOSR:1236513/Cart/Index?id=XXX
        public ActionResult Index()
        {
            string customerID = Request.QueryString["id"];
            ViewBag.customerID = customerID;
            var cartinfo = (from j in db.Carts
                            where j.CustomerID == customerID
                            select j);
            string idstring = "";
            foreach (var cartitem in cartinfo)
            {
                idstring = idstring+ " "+ cartitem.CartID+"="+cartitem.ItemCount.ToString();
            }//idstring格式为
            //" cartid1=cardid1对应的数量 cartid2=cartid2对应的数量 ......"
            ViewBag.idstring = idstring;

            return PartialView();
        }
        
        // 删除购物车中商品的全部
        //GET: /Cart/DeletSome?ID=X&customerID
        public ActionResult DeleteSome()
        {
            string customerID = Request.QueryString["customerID"];
            var i = from j in db.Carts where j.CustomerID == customerID select j;
           
            foreach (var mas in i)
            {
                db.Carts.Remove(mas);
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

        // 从购物车加载订单
        public ActionResult ToOrder()
        {
            string id = Request.QueryString["user_id"];
            // string time = System.DateTime.Now.ToString();
            List<Item> list = new List<Item>();
            var cartinfo = (from c in db.Carts where c.CustomerID == id select c);
            foreach (var cartx in cartinfo)
            {
                Item item = db.Items.Find(cartx.CartID);
                if (item != null)
                    list.Add(item);
            }
            var p = list.GroupBy(a => a.ShopID).Select(g => new { shopid = g.Key });
            long pnum = p.Count();
            string s = "";
            foreach (var i in p)
            {
                s = s + " " + i.shopid;
                foreach (var it in list)
                {
                    if (it.ShopID == i.shopid)
                    {
                        s = s + "&" + it.ItemID;
                    }
                }
            }
            var json = new
            {
                ID = Request.QueryString["user_id"],
                Shopnumber_or_Ordernumber = (int)pnum,
                OrderString = s
            };
            // 查找购物车
            return Json(json,JsonRequestBehavior.AllowGet);
        }
    }



}
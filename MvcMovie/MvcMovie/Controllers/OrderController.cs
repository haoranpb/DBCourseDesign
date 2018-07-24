using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using MvcMovie.Models;
using Oracle.ManagedDataAccess.Client;
using MvcMovie.DAL;
using System.Data.Entity;

namespace MvcMovie.Controllers
{
    public class OrderController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // 从BuyNow加载订单
        public ActionResult Index1()
        {
            string time = System.DateTime.Now.ToString();
            ViewBag.Shopnumber_or_Ordernumber = -1;//如果这个值是-1代表是通过buynow加载的订单
            ViewBag.ID = Request.QueryString["user_id"];
            ViewBag.ItemID = Request.QueryString["item_id"];
            ViewBag.Orderid = time + ViewBag.ID + ViewBag.ItemID;
            ReceivingInfo p = db.ReceivingInfos.Find(ViewBag.ID);
            if (p != null)
            {
                ViewBag.address = p.Address;
                ViewBag.phone = p.ReceivingPhone;
            }
            else
            {
                ViewBag.address = " ";
                ViewBag.phone = " ";
            }
            return PartialView();
        }

        // 从购物车加载订单
        public ActionResult Index2()
        {
            string id = Request.QueryString["user_id"];
            // string time = System.DateTime.Now.ToString();
            string Shopid = Request.QueryString["shop_id"];
             List<Item> list = new List<Item>();
            var cartinfo = (from c in db.Carts where c.CustomerID == id select c);
            foreach (var cartx in cartinfo)
            {
                Item item = db.Items.Find(cartx.CartID);
                if (item != null)
                    list.Add(item);
            }
            string s = "";
            foreach (var it in list)
            {
                if (it.ShopID == Shopid)
                {
                    s = s + "&" + it.ItemID;
                    foreach(var j in cartinfo)
                    {
                        if(j.CartID == it.ItemID)
                        {
                            s = s + "?" + j.ItemCount;
                        }
                    }
                }
            }
            ViewBag.shopid = Shopid;
            ViewBag.id = id;
            ViewBag.s = s;//包括全部的itemid
            // 查找购物车
            return PartialView();
        }

        /*
        public ActionResult MyOrder()
        { 
            string user_id = ViewBag.ID;
            Order order = db.Orders.Find(user_id);
            if (order == null)
            {
                return HttpNotFound();
            }
            string url = string.Join("~/Order/Index", order.OrderID);
            return RedirectToRoute("~/Order/Index & ID = user_id");
        }*/

        // 从店铺创建订单
        public ActionResult ShopCreate()
        {
            string orderphone = Request.QueryString["OrderPhone"];
            string orderaddress = Request.QueryString["OrderAddress"];
            string itemID = Request.QueryString["itemID"];
            Item item = db.Items.Find(itemID);
            string ID = Request.QueryString["user_id"];
            // 获取订单生成时间
            string time = System.DateTime.Now.ToString();

            // 生成一个Order
            Order order = new Order();
            order.OrderID = time + item.ShopID + ID;
            order.ShopID = item.ShopID;
            order.CustomerID = ID;
            order.OrderPrice = item.ItemPrice;
            order.OrderCount = 1;
            order.OrderTime = Convert.ToDateTime(time);
            order.OrderState = "Ordered";
            order.OrderAddress = orderaddress;
            order.OrderPhone = orderphone;
            db.Orders.Add(order);
            db.SaveChanges();


            // 生成OrderDetail
            OrderDetail od = new OrderDetail();
            od.OrderDetailID = time + itemID + ID;
            od.OrderID = order.OrderID;
            od.ItemID = itemID;
            od.OrderDetailCount = 1;
            db.OrderDetails.Add(od);
            db.SaveChanges();
            
            var iteminfo = (from c in db.OrderDetails where c.OrderID == order.OrderID select c);
            foreach (var itemx in iteminfo)
            {
                // 修改Item数量
                Item itemp = db.Items.Find(itemx.ItemID);
                itemp.ItemRemain = itemp.ItemRemain - itemx.OrderDetailCount;
                if (itemp.ItemRemain < 0) return Content("failed");
                itemp.ItemSales = itemp.ItemSales + itemx.OrderDetailCount;
                db.Entry(itemp).State = EntityState.Modified;
                db.SaveChanges();

                /*// 删除购物车内的商品
                var cartinfo = (from j in db.Carts where j.CartID == iteml.ItemID && j.CustomerID == order.CustomerID select j);
                foreach (var cartitem in cartinfo)
                {
                    db.Carts.Remove(cartitem);
                    db.SaveChanges();
                }*/
            }
            return Content("success");
        }

        // 从购物车创建订单
        public ActionResult CartCreate()
        {
            string orderphone = Request.QueryString["OrderPhone"];
            string orderaddress = Request.QueryString["OrderAddress"];
            string id = Request.QueryString["user_id"];
            string shop_id = Request.QueryString["shop_id"];
            // string time = System.DateTime.Now.ToString();
            List<Item> list = new List<Item>();
            var cartinfo = (from c in db.Carts where c.CustomerID == id select c);
            foreach (var cartx in cartinfo)
            {
                Item item = db.Items.Find(cartx.CartID);
                if (item != null)
                    list.Add(item);
            }
            
            string s = "";
            string time = System.DateTime.Now.ToString();
           
                Order order = new Order();
                order.OrderID = time + shop_id + id;
                order.ShopID = shop_id;
                order.CustomerID = id;
                order.OrderPrice = 0;
                order.OrderCount = 0;
                order.OrderTime = Convert.ToDateTime(time);
                order.OrderAddress = orderaddress;
                order.OrderPhone = orderphone;
                order.OrderState = "Ordered";
                foreach (var it in list)
                {
                    if (it.ShopID == shop_id)
                    {
                        // 生成OrderDetail
                        OrderDetail od = new OrderDetail();
                        od.OrderDetailID = time + it.ItemID + id;
                        od.OrderID = order.OrderID;
                        od.ItemID = it.ItemID;
                        var a = (from j in cartinfo where j.CartID == it.ItemID select j).First();
                        od.OrderDetailCount = a.ItemCount;

                        //修改外循环的order
                        order.OrderCount += a.ItemCount;//ordercount是订单内物品总数而非总种类数
                        order.OrderPrice += a.CartPrice;//cartprice是对应项cartitem的单价与数量的乘积

                        //修改item表内数量
                        Item itemp = db.Items.Find(od.ItemID);
                        itemp.ItemRemain = itemp.ItemRemain - od.OrderDetailCount;
                        if (itemp.ItemRemain < 0) return Content("failed");
                        itemp.ItemSales = itemp.ItemSales + od.OrderDetailCount;
                        db.Entry(itemp).State = EntityState.Modified;

                        //删除购物车
                        db.Carts.Remove(a);
                        db.OrderDetails.Add(od);
                        db.SaveChanges();
                    }
                }
                db.Orders.Add(order);
                db.SaveChanges();
            
            return Content("success");
        }


        // 查找订单
        public ActionResult Query()
        {
            string Orderid = Request.QueryString["OrderID"];
            Order od = db.Orders.Find(Orderid);
            var iteminfo = (from c in db.OrderDetails where c.OrderID == Orderid select c);
            int number = 0;
            string idstring = "";
            string sumstring = "";
            foreach (var iteml in iteminfo)
            {
                number++;
                idstring = String.Join(idstring, " ", iteml.ItemID);
                sumstring = String.Join(sumstring, " ", iteml.OrderDetailCount);
            }
            var P = new { number = number.ToString(), idstring = idstring, sumstring = sumstring };
            return Json(P);
        }
    }
}
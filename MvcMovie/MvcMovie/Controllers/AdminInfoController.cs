using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Mvc;
using MvcMovie.Models;
using MvcMovie.DAL;
using System.Data.Entity;

namespace MvcMovie.Controllers
{
    public class AdminInfoController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: AdminInfo/Item?adminID=xxx
        public ActionResult Item( )
        {
            string adminID = Request.QueryString["ID"];
            
            var ItemList = db.Items.ToList();
            string itemidstring = "";
            string itemstring = "";
            foreach(var item in ItemList)
            {
                itemidstring = itemidstring + " " + item.ItemID;
                itemstring = itemstring + "%" + item.ShopID;
            }
            ViewBag.shopstring = itemstring;
            ViewBag.itemidstring = itemidstring;
            ViewBag.ID = adminID;
            return PartialView(); // finish redirect url in the front-end. Qustion: need to pass admin id through index func?
        }

        public ActionResult Itemsearch()
        {
            string id = Request.QueryString["itemid"];
            string adminID = Request.QueryString["ID"];
            ViewBag.itemidstring = " " + id;
            var j = db.Items.Find(id);
            ViewBag.shopstring = "%" + j.ShopID;
            ViewBag.ID = adminID;
            return PartialView("Item");
        }

        public ActionResult Order()
        {
            string adminID = Request.QueryString["ID"];

            var ItemList = db.Orders.ToList();
            string itemidstring = "";
            string itemtimestring = "";
            List<DateTime> i = new List<DateTime>();
            //直接对itemlist里面的每一个order根据时间进行排序
            foreach (var o in ItemList)
            {
                i.Add(o.OrderTime);
            }
            for (int k = 0; k < ItemList.Count()-1; k++) {
                for(int j = 0; j < ItemList.Count() - 1-k; j++)
                {
                    if (i[j]<i[j+1])
                    {
                        var s = i[j];
                        i[j] = i[j + 1];
                        i[j + 1] = s;
                        Order so = ItemList[j];
                        ItemList[j] = ItemList[j + 1];
                        ItemList[j + 1] = so;
                    }
                }
            }
            foreach (var item in ItemList)
            {
                itemidstring = itemidstring + "%" + item.OrderID;
                itemtimestring = itemtimestring + "%" + Convert.ToDateTime(item.OrderTime); ;
            }
            ViewBag.orderidstring = itemidstring;
            ViewBag.ordertimestring = itemtimestring;
            ViewBag.ID = adminID;
            return PartialView(); // finish redirect url in the front-end. Qustion: need to pass admin id through index func?
        }

        public ActionResult Ordersearch()
        {
            string id = Request.QueryString["orderid"];
            string adminID = Request.QueryString["ID"];
            ViewBag.orderidstring = "%" + id;
            ViewBag.ordertimestring = "%" + Convert.ToDateTime(db.Orders.Find(id).OrderTime);
            ViewBag.ID = adminID;
            return PartialView("Order");
        }

        public ActionResult Customer()
        {
            string adminID = Request.QueryString["ID"];

            var ItemList = db.Customers.ToList();
            string itemidstring = "";
            foreach (var item in ItemList)
            {
                itemidstring = itemidstring + " " + item.ID;
            }
            ViewBag.cusidstring = itemidstring;
            ViewBag.ID = adminID;
            return PartialView(); // finish redirect url in the front-end. Qustion: need to pass admin id through index func?
        }

        public ActionResult Customersearch()
        {
            string id = Request.QueryString["cusid"];
            string adminID = Request.QueryString["ID"];
            ViewBag.cusidstring = " " + id;
            ViewBag.ID = adminID;
            return PartialView("Customer");
        }

        public ActionResult Saler()
        {
            string adminID = Request.QueryString["ID"];

            var ItemList = db.Salers.ToList();
            string itemidstring = "";
            foreach (var item in ItemList)
            {
                itemidstring = itemidstring + " " + item.SalerID;
            }
            ViewBag.salerstring = itemidstring;
            ViewBag.ID = adminID;
            return PartialView(); // finish redirect url in the front-end. Qustion: need to pass admin id through index func?
        }

        public ActionResult Salersearch()
        {
            string id = Request.QueryString["salid"];
            string adminID = Request.QueryString["ID"];
            ViewBag.salerstring = " " + id;
            ViewBag.ID = adminID;
            return PartialView("Saler");
        }

        // GET: AdminInfo/AdminInfo?adminID=xxx
        //管理员信息
        public ActionResult AdminInfo(string adminID)
        {
            Admin admin = db.Admins.Find(adminID);
            if (admin == null) return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var AdminInfo = new
            {
                ID = admin.AdminID,
                Info = admin.AdminInfo,
            };
            return Json(AdminInfo);
        }



        // GET: AdminInfo/DeleteSaler?id
        public ActionResult DeleteSaler()
        {
            string id = Request.QueryString["id"];
            Saler saler = db.Salers.Find(id);
            db.Salers.Remove(saler);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteCustomer/id
        public ActionResult DeleteCustomer()
        {
            string id = Request.QueryString["id"];
            Customer customer = db.Customers.Find(id);
            db.Customers.Remove(customer);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteItem/id
        public ActionResult DeleteItem()
        {
            string id = Request.QueryString["id"];
            Item item = db.Items.Find(id);
            db.Items.Remove(item);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteOrder/id
        public ActionResult DeleteOrder()
        {
            string id = Request.QueryString["id"];
            Order order = db.Orders.Find(id);
            db.Orders.Remove(order);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET:  AdminInfo/SearchCustomer
        // 根据ID搜索
        public ActionResult SearchCustomer()
        {
            string ID = Request.QueryString["id"];
            Customer customer = db.Customers.Find(ID);
            Saler saler = db.Salers.Find(ID);
            Item item = db.Items.Find(ID);
            Order order = db.Orders.Find(ID);
            if (customer == null) return Content("no"); //没找到
            else return Content("success");
            // url重定向在前端实现 
        }



        // GET:  AdminInfo/SearchSaler/ID
        // 根据ID搜索
        public ActionResult SearchSaler() //搜索卖家
        {
            string ID1 = Request.QueryString["id"];
            Customer customer = db.Customers.Find(ID1);
            Saler saler = db.Salers.Find(ID1);
            Item item = db.Items.Find(ID1);
            Order order = db.Orders.Find(ID1);
            if (saler == null) return Content("no"); //没找到
            else return Content("success");
            // url重定向在前端实现 
        }


        // GET:  AdminInfo/SearchItem/ID
        // 根据ID搜索
        public ActionResult SearchItem() //搜索商品
        {
            string ID2 = Request.QueryString["id"];
            Customer customer = db.Customers.Find(ID2);
            Saler saler = db.Salers.Find(ID2);
            Item item = db.Items.Find(ID2);
            Order order = db.Orders.Find(ID2);
            if (item == null) return Content("no"); //没找到
            else return Content("success");
            // url重定向在前端实现 
        }

        // GET:  AdminInfo/SearchOrder/ID
        // 根据ID搜索

        public ActionResult SearchOrder() //搜索订单
        {
            string ID = Request.QueryString["id"];
            Customer customer = db.Customers.Find(ID);
            Saler saler = db.Salers.Find(ID);
            Item item = db.Items.Find(ID);
            Order order = db.Orders.Find(ID);
            if (order == null) return Content("no"); //没找到
            else return Content("success");
            // url重定向在前端实现 
        }




    }
}
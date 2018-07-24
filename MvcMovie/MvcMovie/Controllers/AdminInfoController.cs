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

        // GET: AdminInfo/Index?adminID=xxx
        public ActionResult Index(string adminID)
        {
            ViewBag.SalerList = db.Salers.ToList();
            ViewBag.CustomerList = db.Customers.ToList();
            ViewBag.ItemList = db.Items.ToList();
            ViewBag.OrderList = db.Orders.ToList();
            ViewBag.AdminID = adminID;
            return Content("success"); // finish redirect url in the front-end. Qustion: need to pass admin id through index func?
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



        // GET: AdminInfo/DeleteSaler/id
        public ActionResult DeleteSaler(string id)
        {
            Saler saler = db.Salers.Find(id);
            db.Salers.Remove(saler);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteCustomer/id
        public ActionResult DeleteCustomer(string id)
        {
            Customer customer = db.Customers.Find(id);
            db.Customers.Remove(customer);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteItem/id
        public ActionResult DeleteItem(string id)
        {
            Item item = db.Items.Find(id);
            db.Items.Remove(item);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET: AdminInfo/DeleteOrder/id
        public ActionResult DeleteOrder(string id)
        {
            Order order = db.Orders.Find(id);
            db.Orders.Remove(order);
            db.SaveChanges();
            return Content("success"); // redirect to index via front-end
        }

        // GET:  AdminInfo/SearchCustomer/ID
        // 根据ID搜索
        public ActionResult SearchCustomer(string ID)
        {
            Customer customer = db.Customers.Find(ID);
            Saler saler = db.Salers.Find(ID);
            Item item = db.Items.Find(ID);
            Order order = db.Orders.Find(ID);

            if (customer == null) return Content("not found"); //没找到
            else
            {
                var CustomerInfo = new
                {
                    ID = customer.ID,
                    Age = customer.CustomerAge,
                    Gender = customer.CustomerGender,
                    Phone = customer.CustomerPhone,
                    Credit = customer.CustomerCredit,
                };
                return Json(CustomerInfo);
            }
            // url重定向在前端实现 
        }



        // GET:  AdminInfo/SearchSaler/ID
        // 根据ID搜索
        public ActionResult SearchSaler(string ID) //搜索卖家
        {
            Saler saler = db.Salers.Find(ID);

            if (saler == null) return Content("not found"); //没找到
            else
            {
                var ShopIDs = from shops in db.Shops where shops.SalerID == ID select shops;
                var SalerInfo = new
                {
                    ID = saler.SalerID,
                    Info = saler.SalerInfo,
                    Phone = saler.SalerPhone,
                    ShopList = ShopIDs.ToList(),
                };
                return Json(SalerInfo);
            }
            // url重定向在前端实现 
        }


        // GET:  AdminInfo/SearchItem/ID
        // 根据ID搜索
        public ActionResult SearchItem(string ID) //搜索商品
        {
            Item item = db.Items.Find(ID);

            if (item == null) return Content("not found"); //没找到
            else
            {
                var ItemInfo = new
                {
                    ItemID = item.ItemID,
                    ShopID = item.ShopID,
                    Price = item.ItemPrice,
                    Name = item.ItemName,
                    Info = item.ItemInfo,
                    Pic = item.ItemPic,
                    Sales = item.ItemSales,
                    Remain = item.ItemRemain,

                };
                return Json(ItemInfo);
            }
            // url重定向在前端实现 
        }

        // GET:  AdminInfo/SearchOrder/ID
        // 根据ID搜索

        public ActionResult SearchOrder(string ID) //搜索订单
        {
            Item item = db.Items.Find(ID);

            var OrderIDs = from orders in db.Orders where orders.OrderID == ID select orders; //可能会有多个订单号相同     

            var orderlist = "";
            foreach (var order in OrderIDs)
            {
                orderlist = orderlist + "#" + order.OrderID + " " + order.ShopID + " " + order.CustomerID + " "
                            + order.OrderState + " " + order.OrderPrice + " " + order.OrderCount;
            }

            if (orderlist == null) return Content("not found");
            else return Content(orderlist);

            // url重定向在前端实现 
        }




    }
}
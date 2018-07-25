using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using System.Data.Entity;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class SalerController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: /Saler/Index?ID=xxx
        public ActionResult Index( )
        {
            string ID = Request.QueryString["ID"];
            //return saler info via viewbag
            //ViewBag里面加入两个
            //ViewBag.SalerName=名字
            //ViewBag.SalerCredit=credit对应的这个值 信用值？
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            //提取店铺信息
            var shopquery = from shops in db.Shops
                           where shops.SalerID == ID
                           select shops;

            //return shoplist of id
            string ShopIdString = "";
            foreach (var shop in shopquery)
            {
                ShopIdString = ShopIdString + " " + shop.ShopID;
            }
            ViewBag.shopidstring = ShopIdString;

            //return shop orderlist

            return PartialView();
        }

        public ActionResult Order()//向页面返回全部的shop内的全部order的id
        {
            var shopid1 = Request.QueryString["shopid1"];

            var shopid2 = Request.QueryString["shopid2"];

            var shopid3 = Request.QueryString["shopid3"];
            string p = "";
            var orderinfo1 = (from i in db.Orders where i.ShopID == shopid1 select i);
            var orderinfo2 = (from i in db.Orders where i.ShopID == shopid2 select i);
            var orderinfo3 = (from i in db.Orders where i.ShopID == shopid3 select i);
            if(orderinfo1.Count()!=0)
            foreach (var o in orderinfo1)
            {
                p = p + " " + o;
            }
            if (orderinfo2.Count() != 0)
                foreach (var o in orderinfo2)
            {
                p = p + " " + o;
            }
            if (orderinfo3.Count() != 0)
                foreach (var o in orderinfo3)
            {
                p = p + " " + o;
            }
            return Content(p);
        }

        public ActionResult Orderinfo()
        {
            string Orderid = Request.QueryString["Orderid"];
            Order order = db.Orders.Find(Orderid);
            string ordertime = order.OrderTime.ToString();
            string shopid = order.ShopID;
            var json = new
            {
                //这里还需要order的其他信息
                //OrderStatus=订单状态 完成或者未完成 用于设置订单的Finish按钮是否可用
                //OrderPhone=手机号
                //OrderAddress=地址
                //OrderPrice=价格
                OrderId = Orderid,
                OrderTime = ordertime,
                ShopId = shopid
            };
            return Json(json,JsonRequestBehavior.AllowGet);
        }

        // ShopDetail Page
        // GET: ../Saler/ShopDetail?shopid=100001
        public ActionResult ShopDetail()
        {
            string shopid = Request.QueryString["shopid"];
            Shop shop = db.Shops.Find(shopid);
            if (shop == null)
            {
                return Content("shop not exist");
            }
            else
            {
                ViewBag.shopid = shopid;
                ViewBag.ShopName = shop.ShopName; // what else to display?
                return PartialView();
            }
        }

        // create shop func finished in a pop up dialog
        // GET: /Saler/CreateShopPage?ID=xxx&shopid=xx
        public ActionResult CreateShopPage()
        {
            string ID = Request.QueryString["ID"]; // what this ID for?
            ViewBag.shopid = Request.QueryString["shopid"];
            //卖家基本信息通过viewbag传输
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            return PartialView();
        }


        //添加店铺 /Saler/CreateShop?ShopName=111&SalerCredit=111&SalerID=Lucas
        public ActionResult CreateShop()
        {
            //随机生成shopid
            string ShopName = Request.QueryString["ShopName"];
            string SalerCredit = Request.QueryString["SalerCredit"];
            string SalerID = Request.QueryString["SalerID"];

            Shop shop = new Shop();
            //shop.ShopID = ShopID; 生成一个shopid
            shop.ShopName = ShopName;
            shop.SalerCredit = SalerCredit;
            shop.SalerID = SalerID;

            if (ModelState.IsValid)
            {
                db.Shops.Add(shop);
                db.SaveChanges();
                return RedirectToAction("Index/"+shop.SalerID);
            }

            return Content("failure");
        }
        
        // delete shop button wait to add
        public ActionResult DeleteShop()
        {
            string ID = Request.QueryString["ID"];
            Shop shop = db.Shops.Find(ID);
            if(shop == null)
            {
                return Content("failure");
            }
            db.Shops.Remove(shop);
            db.SaveChanges();
            return RedirectToAction("Index/" + shop.SalerID);
        }

        //跳转至SalerInfo /Saler/SalerInfoPage
        public ActionResult SalerInfoPage(string ID)
        {
            //卖家基本信息通过viewbag传输
            Saler saler = db.Salers.Find(ID);
            ViewBag.Salerinfo = saler.SalerInfo;
            ViewBag.SalerPassword = saler.SalerPassword;
            ViewBag.ID = ID;
            ViewBag.SalerPhone = saler.SalerPhone;

            return View();
        }

        //修改卖家信息  /Saler/EditSalerInfo?ID=111&SalerPassword=qqq&SalerInfo=what&SalerPhone=123
        public ActionResult EditSalerInfo()
        {
            string ID = Request.QueryString["ID"];
            string SalerPassword = Request.QueryString["SalerPassword"];
            string SalerInfo = Request.QueryString["SalerInfo"];
            string SalerPhone = Request.QueryString["SalerPhone"];

            Saler saler = db.Salers.Find(ID);
            saler.SalerInfo = SalerInfo;
            saler.SalerPassword = SalerPassword;
            saler.SalerPhone = SalerPhone;

            if (ModelState.IsValid)
            {
                db.Entry(saler).State = EntityState.Modified;
                db.SaveChanges();
                return Content("success");
            }
            
            return Content("failed");
        }

        /*需要一个可以用来修改订单的函数
         *前端可以传回来修改之后的订单
         * 的价格，地址，手机号
         * 需要后端去修改数据库
         * 修改完之后比较好的操作我不太清楚应该怎么样
         * 因为我们这个订单修改完之后，其实在SalerAccount这个界面里是显示不出来的
         * 因为页面里只展示订单的ID，时间，店铺
         * 但是如果再次点击Edit那个按钮就会发现里面的内容没有变
         * 所以建议是后端这边
         * 去修改数据库
         * 完了之后重定向，就相当于把当前页面刷新一下
         * 这样子动态加载就会把里面的信息换掉了
         */
    }
}
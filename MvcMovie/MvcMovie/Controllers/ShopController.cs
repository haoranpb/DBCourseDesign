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
    public class ShopController : Controller
    {
        private MovieDBContext db = new MovieDBContext();

        // GET: Shop/Index?id=xxx&userid=xxx
        public ActionResult Index()
        {
            ViewBag.id = Request.QueryString["userid"];
            ViewBag.ShopID = Request.QueryString["id"];
            return PartialView();
        }

        // Return all items' ID in a shop
        // GET: Shop/ListID?shopid = xxx
        public ActionResult ListID()
        {
            string shopid = Request.QueryString["shopid"];
            var shopinfo = (from j in db.Items
                            where j.ShopID == shopid
                            select j);

            string itemIdlist = "";
            foreach (var shopitem in shopinfo)
            {
                itemIdlist = itemIdlist+ " " + shopitem.ItemID;
            }
            return Content(itemIdlist);
        }

        ////商店信息
        //// GET: Shop/ShopInfo?id=xxx
        public ActionResult ShopInfo()
        {
            string id = Request.QueryString["shopid"];
            string i = Request.QueryString["i"];
            Shop shop = db.Shops.Find(id);
            var ShopInfo = new
            {
                Name = shop.ShopName,
                ID = shop.ShopID,
                Saler = shop.SalerID,
                SalerCredit = shop.SalerCredit,
                i = i,
            };
            return Json(ShopInfo,JsonRequestBehavior.AllowGet);
        }

        // GET: Shop/SalerInfo/id
        //卖家信息
        public ActionResult SalerInfo(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Saler saler = db.Salers.Find(id);
            var SalerInfo = new
            {
                ID = saler.SalerID,
                Info = saler.SalerInfo,
            };
            return Json(saler.SalerInfo);
        }

        // GET: Shop/ItemInfo?itemid=xx&itemnum=xxx&itemcount=xxxx
        // Return item info
        public ActionResult ItemInfo()
        {
            string itemid = Request.QueryString["itemid"];
            string itemnum = Request.QueryString["itemnum"];
            string itemcount = Request.QueryString["itemcount"];

            Item item = db.Items.Find(itemid);
            if (item == null)
            {
                return HttpNotFound();
            }
            var json = new {
                ItemCount = itemcount,
                ItemID = item.ItemID,
                ItemInfo = item.ItemInfo,
                ItemName = item.ItemName,
                ItemPic = item.ItemPic,// id
                ItemPrice = item.ItemPrice,
                ItemRemain = item.ItemRemain,
                ItemSales = item.ItemSales,
                ShopID = item.ShopID,
                ItemNum = itemnum
            };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        //get:/Shop/Edititem?ItemId=xxx&ItemInfo=xxxx&ItemName=XXXX&ItemPic=&PATH=&ItemPrice=&ItemRemain=&ShopID=
        public ActionResult Edititem()
        {
            Item p = db.Items.Find(Request.QueryString["ItemId"]);
            p.ItemName = Request.QueryString["ItemName"];
            p.ItemPic = Request.QueryString["ItemPic"];
            string PATH = Request.QueryString["PATH"];
            
            //System.IO.File.Copy(PATH, "/Users/ludanxer/Downloads/DBCourseDesign/MvcMovie/MvcMovie/Images/img/images/" + p.ItemPic + ".jpg", true); // can not find path
            //前端看完下面这个注释记得删了，别让袁阿姨看见
            //这里注意一下，我们的逻辑上是，将图片从本地的一个地方移动道本地的服务器images文件夹下面，然后就可以调用图片了
            //所以演示时的图片名字最好不要带中文
            //然后要输入两个东西，一个是记录到数据库当中的图片名（没有后缀名），一次是图片所在文件夹
            //所以图片的路径=图片路径+名字+.jpg
            p.ItemPrice = int.Parse(Request.QueryString["ItemPrice"]);
            p.ItemRemain = int.Parse(Request.QueryString["ItemRemain"]);
            p.ShopID = Request.QueryString["ShopID"];
            //Itemsales不允许修改
            db.Entry(p).State = EntityState.Modified;
            db.SaveChanges();

            return Content("success");
        }
        //get:/Shop/Delitem? ItemId = xxx
        public ActionResult Delitem()
        {
            Item p = db.Items.Find(Request.QueryString["ItemId"]);
            db.Items.Remove(p);
            db.SaveChanges();
            return Content("success");
        }
        ///get:/Shop/Additem?ItemId=xxx&ItemInfo=xxxx&ItemName=XXXX&ItemPic=&PATH=&ItemPrice=&ItemRemain=&ShopID=
        public ActionResult Additem()
        {
            Item p = new Item();
            string itemid = "";
            while (true)
            {
                Random rd = new Random();
                itemid = rd.Next(1, 1000000).ToString();
                if (db.Shops.Find(itemid) == null)
                    break;
            }
            p.ItemInfo = Request.QueryString["ItemInfo"];
            p.ItemName = Request.QueryString["ItemName"];
            //p.ItemPic = Request.QueryString["ItemPic"];
            //string PATH = Request.QueryString["PATH"];
            //System.IO.File.Copy(PATH, "~/Images/img/images+" + p.ItemPic + ".jpg", true);
            //这里注释与上面edit那里的相同，先看这个的话记得把上面edit的也删了
            //前端看完下面这个注释记得删了，别让袁阿姨看见
            //这里注意一下，我们的逻辑上是，将图片从本地的一个地方移动道本地的服务器images文件夹下面，然后就可以调用图片了
            //所以演示时的图片名字最好不要带中文
            //然后要输入两个东西，一个是记录到数据库当中的图片名（没有后缀名），一次是图片所在文件夹
            //所以图片的路径=图片路径+名字+.jpg
            p.ItemPrice = int.Parse(Request.QueryString["ItemPrice"]);
            p.ItemRemain = int.Parse(Request.QueryString["ItemRemain"]);
            p.ShopID = Request.QueryString["ShopID"];
            p.ItemID = itemid;
            //Itemsales默认为0
            p.ItemSales = 0;
            db.Items.Add(p);
            db.SaveChanges();

            return Content("success");
        }
    }
    
}
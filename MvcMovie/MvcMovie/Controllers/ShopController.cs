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
            if(PATH!= ("D://MY_PROJECTS/CourseDesign/MvcMovie/MvcMovie/Images/img/images/" + p.ItemPic + ".jpg"))
                System.IO.File.Copy(PATH, "D://MY_PROJECTS/CourseDesign/MvcMovie/MvcMovie/Images/img/images/" + p.ItemPic + ".jpg", true);
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
            p.ItemPic = Request.QueryString["ItemPic"];
            string PATH = Request.QueryString["PATH"];
            System.IO.File.Copy(PATH, "D://MY_PROJECTS/CourseDesign/MvcMovie/MvcMovie/Images/img/images/" + p.ItemPic + ".jpg", true);
            
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
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

        // GET: /Item/Index?id=xxx
        public ActionResult Index()
        {
            //return PartialView();
            string id = Request.QueryString["id"];
            //string personId = Request.QueryString["personId"];


            //return PartialView();

            Item good = db.Items.Find(id);
            
            if (good == null) return HttpNotFound();
            ViewBag.name = good.ItemName;
            ViewBag.price = good.ItemPrice;
            ViewBag.ItemInfo = good.ItemInfo;
            ViewBag.id = "../Images/img/images/" + good.ItemID + ".jpg";
        
            //ViewBag.personId = personId;



            /*var query = from p in db.Comments
                        where p.ItemID == id
                        select p;

            string commentString = "";

            var commentList = query.ToList();
            for (int i = 0; i < commentList.Count; ++i)
            {
                commentString = commentString + "/ID:" + commentList[i].ItemID + "/Comment:" + commentList[i].CommentInfo
                    + "/Reply:" + commentList[i].Reply;
            }
            ViewBag.comment = commentString;//所有评论的字符串*/



            return PartialView();
            
        }




        //GET: /Item/Add?ID=X&customerID&cnt=xx
        //向购物车增加商品 cnt为数量
        public ActionResult Add()
        {
            string itemID = Request.QueryString["ID"];
            string customerID = Request.QueryString["customerID"];
            int cnt = int.Parse(Request.QueryString["cnt"]);
            Item good = db.Items.Find(itemID);
            if (good.ItemRemain < cnt) return Content("low_stock");//库存不足
            Cart cart = db.Carts.Find(customerID, itemID);
            if (cart == null)
            {
                Cart newCart = new Cart()
                {
                    CustomerID = customerID,
                    CartID = itemID,
                    ItemCount = cnt,
                    CartPrice = good.ItemPrice * cnt,
                };
                db.Carts.Add(newCart);
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


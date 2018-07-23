using MvcMovie.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.DAL;
//这个页面针对的是买家
namespace MvcMovie.Controllers
{
    public class PersonalinfoController : Controller
    {
        private MovieDBContext db = new MovieDBContext();
        // GET: Personalinfo/Index?ID=XXX&role=xxxxx
        public ActionResult Index(string ID)//获取买家信息
        {
            Customer cus = db.Customers.Find(ID);
            ViewBag.age = cus.CustomerAge;
            ViewBag.key = cus.CustomerPassword;
            ViewBag.id = ID;
            ViewBag.gender = cus.CustomerGender;
            ViewBag.credit = cus.CustomerCredit;
            ViewBag.phone = cus.CustomerPhone;
            return View();
        }

        public ActionResult ConfirmReceipt()//确认收货,传入订单ID
        {
            string orderID = Request.QueryString["orderID"];
            Order order = db.Orders.Find(orderID);
            order.OrderState = "Finished";
            db.SaveChanges();
            return Content("receipt");
        }

        public ActionResult AddComment()//添加评论，传入订单ID，商品ID，评论内容
        {
            string orderID = Request.QueryString["orderID"];//订单ID
            string itemID = Request.QueryString["itemID"];//商品ID
            string commentInfo = Request.QueryString["commentInfo"];//评论内容
            Comment comment = db.Comments.Find(orderID, itemID);
            if (comment == null)
            {
                Comment newComment = new Comment()
                {
                    ID = orderID,
                    ItemItemID = itemID,
                    CommentInfo = commentInfo,
                    Reply = "",
                };
                db.Comments.Add(newComment);
                db.SaveChanges();
            }
            else
            {
                comment.CommentInfo += commentInfo;
                db.SaveChanges();
            }

            return Content("done");
        }

        public ActionResult CancelOrder()//退货，传入订单ID
        {
            string orderID = Request.QueryString["orderID"];
            Order order = db.Orders.Find(orderID);
            order.OrderState = "Cancel";
            db.SaveChanges();
            return Content("cancel");
        }
        //get:/Personalinfo/EditCus?ID=222&CustomerAge=38&CustomerGender=girl&CustomerPassword=qqq&CustomerPhone=111
        public ActionResult EditCus()//编辑买家个人信息,传入买家ID，年龄，密码，性别，电话
        {
            string ID = Request.QueryString["ID"];
            string CustomerAge = Request.QueryString["CustomerAge"];
            string CustomerPassword = Request.QueryString["CustomerPassword"];
            string CustomerGender = Request.QueryString["CustomerGender"];
            string CustomerPhone = Request.QueryString["CustomerPhone"];
            Customer customer = db.Customers.Find(ID);
            customer.CustomerAge = int.Parse(CustomerAge);
            customer.CustomerPassword = CustomerPassword;
            customer.CustomerGender = CustomerGender;
            customer.CustomerPhone = CustomerPhone;
            db.SaveChanges();
            return Content("successEditing");
        }
    }

}
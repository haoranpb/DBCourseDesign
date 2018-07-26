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
        public ActionResult Index()//获取买家信息
        {
            ViewBag.card = "";
            string ID = Request.QueryString["id"];
            Customer cus = db.Customers.Find(ID);
            ViewBag.age = cus.CustomerAge;
            ViewBag.key = cus.CustomerPassword;
            ViewBag.id = ID;
            ViewBag.gender = cus.CustomerGender;
            ViewBag.credit = cus.CustomerCredit;
            ViewBag.phone = cus.CustomerPhone;
            var query = from credit in db.CreditCards
                        where credit.CustomerID == ID
                        select credit;
            foreach (var c in query)
            {
                ViewBag.card += c.CreditCardID;
                ViewBag.card += "*";
            }

            ViewBag.OrderID = "";
            ViewBag.Time = "";
            ViewBag.ShopID = "";

            var orderQuery = from order in db.Orders
                             where ID == order.CustomerID
                             select order;
            List<Order> orderQueryn = new List<Order>();
            foreach (var i in orderQuery)
            {
                orderQueryn.Add(i);
            }

            for (int k = 0; k < orderQuery.Count() - 1; k++)
            {
                for (int j = 0; j < orderQuery.Count() - 1 - k; j++)
                {
                    if (orderQueryn[j].OrderTime < orderQueryn[j + 1].OrderTime)
                    {
                        Order so = orderQueryn[j];
                        orderQueryn[j] = orderQueryn[j + 1];
                        orderQueryn[j + 1] = so;
                    }
                }
            }

            foreach (var cOrderQuery in orderQueryn)
            {
                ViewBag.OrderID += cOrderQuery.OrderID;
                ViewBag.OrderID += "*";
                //ViewBag.OrderID = String.Join(String.Join(ViewBag.OrderID, "*"), cOrderQuery.OrderID);
                ViewBag.Time += cOrderQuery.OrderTime;
                ViewBag.Time += "*";
                //ViewBag.Time = String.Join(String.Join(ViewBag.Time, "*"), cOrderQuery.OrderTime);
                ViewBag.ShopID += cOrderQuery.ShopID;
                ViewBag.ShopID += "*";
                //ViewBag.ShopID = String.Join(String.Join(ViewBag.ShopID, "*"), cOrderQuery.ShopID);
            }




            //CreditCard cuscard = db.CreditCards.Find(ID);
            //ViewBag.card = cuscard.CreditCardID;
            return PartialView();
        }

        public ActionResult DeletePerson()
        {
            string id = Request.QueryString["id"];
            Customer cd = db.Customers.Find(id);
            db.Customers.Remove(cd);
            db.SaveChanges();
            return Content(id);
        }

        public ActionResult ConfirmReceipt()//确认收货,传入订单ID
        {
            string orderID = Request.QueryString["orderID"];
            Order order = db.Orders.Find(orderID);
            order.OrderState = "Finished";
            db.SaveChanges();
            return Content(orderID);
        }

        public ActionResult EditAddress()
        {
            string customerID = Request.QueryString["id"];
            string address = Request.QueryString["addr"];
            //Customer cus = db.Customers.Find(customerID);

            return Content("Hello");
        }

        public ActionResult AddComment()//添加评论，传入订单ID，商品ID，评论内容
        {
            string orderID = Request.QueryString["orderID"];//订单ID
            //string itemID = Request.QueryString["itemID"];//商品ID
            string commentInfo = Request.QueryString["commentInfo"];//评论内容
            Comment comment = db.Comments.Find(orderID);
            if (comment == null)
            {
                Comment newComment = new Comment()
                {
                    ID = orderID,
                    ItemItemID = "11121",
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

            return Content(orderID);
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

        public ActionResult EditGender()
        {
            string ID = Request.QueryString["id"];
            string gender = Request.QueryString["ge"];
            Customer cus = db.Customers.Find(ID);
            cus.CustomerGender = gender;
            db.SaveChanges();
            return Content(gender);
        }

        public ActionResult EditPhone()
        {
            string ID = Request.QueryString["id"];
            string phone = Request.QueryString["ph"];
            Customer cus = db.Customers.Find(ID);
            cus.CustomerPhone = phone;
            db.SaveChanges();
            return Content(phone);
        }

        public ActionResult EditCard()
        {
            string pre = Request.QueryString["pre"];
            string fut = Request.QueryString["fut"];
            string id = Request.QueryString["id"];
            //var card = db.CreditCards.SingleOrDefault<CreditCard>(s => s.CustomerID == ID);
            CreditCard cd = db.CreditCards.Find(pre);
            db.CreditCards.Remove(cd);


            CreditCard newcd = new CreditCard()
            {
                CustomerID = id,
                CreditCardID = fut,
            };

            db.CreditCards.Add(newcd);
            db.SaveChanges();
            //card.CreditCardID = cardValue;
            //Oracle 修改外键
            //db.SaveChanges();   
            return Content(fut);
        }

        public ActionResult DeleteCard()
        {
            string del = Request.QueryString["del"];

            //var card = db.CreditCards.SingleOrDefault<CreditCard>(s => s.CustomerID == ID);
            CreditCard item = db.CreditCards.Find(del);
            db.CreditCards.Remove(item);



            db.SaveChanges();
            //card.CreditCardID = cardValue;
            //Oracle 修改外键
            //db.SaveChanges();   
            return Content(del);
        }

        //显示浏览历史 /Personalinfo/GetHistory?ID=test
        //返回字符串 *id*id*id* 且最多显示三个
        public ActionResult GetHistory()//获取
        {
            string ID = Request.QueryString["ID"];
            Customer cus = db.Customers.Find(ID);
            ViewBag.age = cus.CustomerAge;
            ViewBag.key = cus.CustomerPassword;
            ViewBag.id = ID;
            ViewBag.gender = cus.CustomerGender;
            ViewBag.credit = cus.CustomerCredit;
            ViewBag.phone = cus.CustomerPhone;
            var historyQuery = from item in db.Browsings
                               where item.ID == ID
                               orderby item.BrowsingTime descending
                               select item;

            //返回字符串 *id*id*
            string browsingString = "*";
            int count = 0;
            foreach (var item in historyQuery)
            {
                browsingString = browsingString + item.ItemID + "*";
                count++;
                if (count >= 3) break; //最多显示三个
            }


            return Content(browsingString);
        }

        public ActionResult SearchOrder()
        {
            ViewBag.card = "";
            string ID = Request.QueryString["id"];
            Customer cus = db.Customers.Find(ID);
            ViewBag.age = cus.CustomerAge;
            ViewBag.key = cus.CustomerPassword;
            ViewBag.id = ID;
            ViewBag.gender = cus.CustomerGender;
            ViewBag.credit = cus.CustomerCredit;
            ViewBag.phone = cus.CustomerPhone;
            var query = from credit in db.CreditCards
                        where credit.CustomerID == ID
                        select credit;
            foreach (var c in query)
            {
                ViewBag.card += c.CreditCardID;
                ViewBag.card += "*";
            }

            string order = Request.QueryString["orderid"];
            Order o = db.Orders.Find(order);
            if (o == null || o.CustomerID != ID) return HttpNotFound();
            ViewBag.OrderID = "";
            ViewBag.Time = "";
            ViewBag.ShopID = "";
            ViewBag.OrderID += o.OrderID;
            ViewBag.OrderID += "*";
            //ViewBag.OrderID = String.Join(String.Join(ViewBag.OrderID, "*"), cOrderQuery.OrderID);
            ViewBag.Time += o.OrderTime;
            ViewBag.Time += "*";
            //ViewBag.Time = String.Join(String.Join(ViewBag.Time, "*"), cOrderQuery.OrderTime);
            ViewBag.ShopID += o.ShopID;
            ViewBag.ShopID += "*";
            return PartialView("Index");
        }
    }

}
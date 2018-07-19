
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;

namespace MvcMovie.Controllers
{
    public class LoginController : Controller
    {
        private CustomerDBContext db = new CustomerDBContext();


        public ActionResult Create()//注册页面
        {
            return View();
        }
        public ActionResult ConfirmCreate(string id, string age, string psw, string gender, string phone, string credit)//传入注册的参数
        {

            //判断id是否重复
            //加入数据库
            ViewBag.id = id;
            return RedirectToAction("Main");//跳转到主界面

        }

        public ActionResult Login()//登录的界面
        {
            return View();
        }
        public ActionResult ConfirmLogin(string id, string psw)//登陆成功or失败
        {
            //localdb方法
            Customer customer = db.Customers.Find(id);//在数据库中查找id
            if (customer == null) return HttpNotFound();//没找到错误提示，登录失败
            if (psw == customer.CustomerPassword)
            {
                ViewBag.id = id;
                return RedirectToAction("Main");
            }//成功的话切换到主页面
            else return HttpNotFound();//密码错误？登录失败
        }

    }
}

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
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
    public class LoginController : Controller
    {
        private MovieDBContext db = new MovieDBContext();
        private int checkCode = 0;

        ///Login/Register
        public ActionResult Register()//注册页面
        {
            return View();
        }

        //get:/Login/ConfirmRegister?id=xx&age=xx&psw=xx&gender=xx&phone=xx&credit=xx
        public ActionResult ConfirmRegister(string id, int age, string psw, string gender, string phone, string credit)//传入注册的参数
        {

            //判断id是否重复
            Customer customer = db.Customers.Find(id);//在数据库中查找id
            if (customer != null) return HttpNotFound();//找到的话，以前注册过，注册失败
            //加入数据库
            Customer cus = new Customer()
            {
                ID = id,
                CustomerAge = age,
                CustomerPassword = psw,
                CustomerGender = gender,
                CustomerPhone = phone,
                CustomerCredit = credit,
            };
            db.Customers.Add(cus);
            db.SaveChanges();
            ViewBag.id = id;
            return RedirectToAction("Main");//跳转到主界面

        }

        ///Login
        public ActionResult Index()//返回登录的界面
        {
            return View();
        }

        //get:/Login/ConfirmLogin?id=xx&psw=xx
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
        
        /// Login/Edit
        public ActionResult Edit()//更改密码
        {
            return View();//返回编辑界面
        }

        // /Login/GetCheckCode
        public int GetCheckCode()//获取随机数
        {
            Random ran = new Random();
            checkCode = ran.Next(1234, 9876);
            return checkCode;//返回随机数
        }

        //get:/Login/ConfirmEdit?id=xx&newPsw1=xx&newPsw2=xx&inputCode=xx
        public ActionResult ConfirmEdit(string id,string newPsw1,string newPsw2,int inputCode)
        {
            if(checkCode!=inputCode )return Content("fail1");//验证码错误
            if(newPsw1!=newPsw2)return Content("fail2");//密码不匹配
            Customer customer = db.Customers.Find(id);//在数据库中查找id
            if(customer==null)return HttpNotFound();
            customer.CustomerPassword = newPsw1;
            db.SaveChanges();
            return RedirectToAction("Login");//成功返回登录界面
        }

    }
}
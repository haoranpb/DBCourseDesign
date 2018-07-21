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
        // GET: Goodsp
        public ActionResult Index()
        {
            return View();
        }

        // GET: Goodsp/Goodsinfo?id=X
        public ActionResult Goodsinfo(string id)
        {
            //这里连接数据库读取商品信息
            /* using (OracleConnection orcl = new OracleConnection("xxx"))
             {
                 string strSQL = "select * from goods where ID='" + ID + "';";
                 OracleDataAdapter da = new OracleDataAdapter(strSQL, orcl);
                 DataSet ds = new DataSet();
                 da.Fill(ds);
                 var goodsinfo = new { Price = 123455, Name = "sdf" };
                 return Json(goodsinfo);
             }*/
            //Oracle 方法
            Item good = db.Items.Find(id);
            var goodsinfo = new { Price = good.ItemPrice, Name = good.ItemName,Url = good.ItemPic};
            return Json(goodsinfo);
            //local方法
        }

        //GET: Goodsp/Add?ID=X
        public ActionResult Add(string ID)
        {
            //if 库存>1
            //连接数据库使商品库存-1，购物车增加对应商品
            return Content("success");
            //else return Content("fail");
        }

        
    }

}


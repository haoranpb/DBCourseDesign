using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcMovie.Models;
using MvcMovie.DAL;

namespace MvcMovie.Controllers
{
   
    public class CatalogController : Controller
    {
        MovieDBContext db = new MovieDBContext();
        // GET: Catalog/Index?id = xxxx&cata = 1 or 2 or 3 or 4 or 5  Catalog/Index?id=ludan&cata=2
        public ActionResult Index()
        {
            ViewBag.ID = Request.QueryString["id"];//user_id
            ViewBag.cata = Request.QueryString["cata"];
            return PartialView();
        }

        //GET:Catalog/Index?cata = 1 or 2 or 3 or 4 or 5
        public ActionResult ItemListForCata()
        {
            char cata = Request.QueryString["cata"][0]; //error
            //var catainfo = (from j in db.Items
            //                where j.ItemID[1] == cata 
            //                select j); //return table or tuple

            //string list = "";
            //foreach (var j in catainfo) // LINQ to Entities does not recognize the method 'Char get_Chars(Int32)' method
            //{
            //    list = list + " " + j.ItemID;
            //}
            var itemList = db.Items.ToList();

            var list = "";
            foreach(var item in itemList)
            {
                string id = item.ItemID;
                if (id[1] == cata)
                {
                    list = list + " " + id;
                }
            }

            return Content(list);
        }

    }
}
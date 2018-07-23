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
        // GET: Catalog/Index?id = xxxx&cata = 1 or 2 or 3 or 4 or 5 
        public ActionResult Index()
        {
            ViewBag.id = Request.QueryString["id"];
            ViewBag.cata = Request.QueryString["cata"];
            return PartialView();
        }

        //GET:Catalog/Index?cata = 1 or 2 or 3 or 4 or 5
        public ActionResult ItemListForCata()
        {
            int cata = int.Parse(Request.QueryString["cata"]);
            var catainfo = (from j in db.Items where j.ItemID[1] == cata select j);
            string list = "";
            foreach(Item j in catainfo)
            {
                list = list +" "+ j.ItemID;
             }
            return Content(list);
        }

    }
}
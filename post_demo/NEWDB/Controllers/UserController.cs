using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NEWDB.Controllers
{
    public class UserController : Controller
    {
        // GET: /User
        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult Success()
        {
            string id = Request.Form["ID"];
            string PW = Request.Form["PW"];
            Console.WriteLine(PW);
            string str = "ContentResultDemo!";
            Console.WriteLine(str);
            return Content("your id is "+id);
        }

    }
}

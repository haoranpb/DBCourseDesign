using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcMovie.Models
{
    public class Good
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public int shopID { get; set; }
        public int price { get; set; }
        public string intro { get; set; }
        public string url { get; set; }
        public int sale { get; set; }
        public int stock { get; set; }
    }

    public class GoodsDBContext : DbContext
    {
        public DbSet<Good> Goods { get; set; }
    }

}
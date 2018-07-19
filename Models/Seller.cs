using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcMovie.Models
{
    public class Seller
    {
        public string ID { get; set; }
        public string key { get; set; }
        public string province { get; set; }
        public string city { get; set; }
        public string district { get; set; }
        public string phone_number { get; set; }

    }

    public class SellerDBContext : DbContext
    {
        public DbSet<Seller> Sellers { get; set; }
    }
}
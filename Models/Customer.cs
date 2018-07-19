using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcMovie.Models
{
    public class Customer
    {
        public string ID { get; set; }
        public int age { get; set; }
        public string key { get; set; }
    }

    public class CustomerDBContext : DbContext
    {
        public DbSet<Customer> Customers{ get; set; }
    }
}
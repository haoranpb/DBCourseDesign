using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcMovie.Models
{
    public class Admin
    {
        public string ID { get; set; }
        public string key { get; set; }
    }

    public class AdminDBContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }
    }
}
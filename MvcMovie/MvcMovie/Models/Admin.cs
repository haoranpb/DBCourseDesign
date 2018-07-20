// 管理员

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class Admin
    {
        public string AdminID { get; set; }
        public string AdminPassword { get; set; }
        public string AdminInfo { get; set; }
    }

    public class AdminDBContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }
    }
}

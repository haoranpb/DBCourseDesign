// 卖家

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    public partial class Saler
    {
    
        public string SalerID { get; set; }
        public string SalerPassword { get; set; }
        public string SalerInfo { get; set; }
        public string SalerPhone { get; set; }
    }
    public class SalerDBContext : DbContext
    {
        public DbSet<Saler> Salers { get; set; }
    }
}

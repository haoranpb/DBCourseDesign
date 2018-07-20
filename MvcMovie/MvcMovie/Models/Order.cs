// 订单

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class Order
    {
        
        public int OrderID { get; set; }
        public string ShopID { get; set; }
        public string CustomerID { get; set; }
        public string OrderPrice { get; set; }
        public string OrderCount { get; set; }
        public System.TimeSpan OrderTime { get; set; }
        public string OrderState { get; set; }
    }
    public class OrderDBContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
    }
}

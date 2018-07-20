// 订单

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class Order
    {
        
        public string OrderID { get; set; }
        public string ShopID { get; set; }
        public string CustomerID { get; set; }
        public int OrderPrice { get; set; }
        public int OrderCount { get; set; }
        public DateTime OrderTime { get; set; }
        public string OrderState { get; set; }
    }
  
}

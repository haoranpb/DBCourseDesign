// 购物车

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    public partial class Cart
    {
        public string CustomerID { get; set; }
        public string CartID { get; set; }//itemid
        public int ItemCount { get; set; }
        public int CartPrice { get; set; }
    }
    
}

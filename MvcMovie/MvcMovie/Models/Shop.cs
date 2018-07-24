// 店铺

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    public partial class Shop
    {
        public string ShopID { get; set; }
        public string ShopName { get; set; }
        public string SalerCredit { get; set; }
        public string SalerID { get; set; }
    }
}

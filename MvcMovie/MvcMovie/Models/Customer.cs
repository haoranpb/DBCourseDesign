// 顾客

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class Customer
    {
    
        public string ID { get; set; }
        public int CustomerAge { get; set; }
        public string CustomerPassword { get; set; }
        public string CustomerGender { get; set; }
        public string CustomerPhone { get; set; }
        public string CustomerCredit { get; set; }
    }
   
}

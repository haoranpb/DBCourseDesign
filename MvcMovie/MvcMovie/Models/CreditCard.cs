// 信用卡

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class CreditCard
    {
        public string CustomerID { get; set; }
        public string CreditCardID { get; set; }
        public string ReceivingInfoCustomerID { get; set; }
   
    }
    
}

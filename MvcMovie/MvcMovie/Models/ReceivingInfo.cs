// 收货信息

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class ReceivingInfo
    {
        public string ID { get; set; }//customerid
        public string Address { get; set; }
        public string ReceivingName { get; set; }
        public string ReceivingPhone { get; set; }
        
      
    }
}

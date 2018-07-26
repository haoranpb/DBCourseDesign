// 浏览信息

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    public partial class Browsing
    {
        public string ID { get; set; }//CUSTOMERID
        public string ItemID { get; set; }
        public DateTime BrowsingTime { get; set; }
    }

    
}

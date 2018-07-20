// 商品

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;


    public partial class Item
    {
        public string ItemID { get; set; }
        public string ShopID { get; set; }
        public int ItemPrice { get; set; }
        public string ItemName { get; set; }
        public string ItemInfo { get; set; }
        public string ItemPic { get; set; }
        public int ItemSales { get; set; }
        public int ItemRemain { get; set; }
    

    }

    public class ItemDBContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
    }
}

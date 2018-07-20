// 评论

namespace MvcMovie.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;

    public partial class Comment
    {
        public string ID { get; set; }//ORDERID
        public string ItemItemID { get; set; }
        public string CommentInfo { get; set; }
        public string Reply { get; set; }
    }

    public class CommentDBContext : DbContext
    {
        public DbSet<Comment> Comments { get; set; }
    }
}

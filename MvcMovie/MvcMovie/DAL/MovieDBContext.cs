using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using MvcMovie.Models;

namespace MvcMovie.DAL
{
    public class MovieDBContext : DbContext
    {
        public MovieDBContext() : base("name=MovieDBContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("SYSTEM");
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Browsing> Browsings { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<CreditCard> CreditCards { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<ReceivingInfo> ReceivingInfos { get; set; }
        public DbSet<Saler> Salers { get; set; }
        public DbSet<Shop> Shops { get; set; }
    }

}
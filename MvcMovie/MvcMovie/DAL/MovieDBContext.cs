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

        public DbSet<Movie> Movies { get; set; }
    }

    public class MovieInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<MovieDBContext>
    {
        protected override void Seed(MovieDBContext context)
        {
            var movies = new List<Movie>
            {
            new Movie{ID=1,Title="Alexander",ReleaseDate=DateTime.Parse("2005-09-01"),Genre="f",Price=210},
            new Movie{ID=2,Title="Tom",ReleaseDate=DateTime.Parse("2018-09-01"),Genre="c",Price=110}
            };

            movies.ForEach(s => context.Movies.Add(s));
            context.SaveChanges();
        }
    }
}
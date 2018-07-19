using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vibranium.Models
{
    public class Customer
    {
        [Key]
        [MaxLength(128)]
        [Column(TypeName = "varchar2")]
        public string CustomerID { get; set; }

        public int Age { get; set;}

        [MaxLength(128)]
        [Column(TypeName = "varchar2")]
        public string Password { get; set; }

        public string Gender { get; set; }

        [MaxLength(128)]
        [Column(TypeName ="varchar2")]
        public string Telephone { get; set; }

        public int Credit { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace NetCoreCRUD.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PMId { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string CardOwnerName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string CardNumber { get; set; }

        [Required]
        [Column(TypeName = "varchar(5)")]
        public string ExpirationDate { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public string CW { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;
namespace backen.Models
{
    public class Accept
    {
        [Key]
        
        public int id {get;set;}
        public order order {get;set;}
        public int receive {get;set;}
    }
}
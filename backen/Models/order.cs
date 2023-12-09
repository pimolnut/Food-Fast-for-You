using System.ComponentModel.DataAnnotations;
namespace backen.Models
{
    public class order
    {
        [Key]
        public int id {get;set;}
        public user user {get;set;}= null!;
        public String munu {get;set;}
        public String restaurants {get;set;}
        public String count {get;set;}
        public String note {get;set;}
        public String address {get;set;}
        public int status {get;set;}
        public String receiver {get;set;}
        public String receivertel {get;set;}
    }
}
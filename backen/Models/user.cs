using System.ComponentModel.DataAnnotations;
namespace backen.Models
{
    public class user
    {
        [Key]
        public int id {get;set;}
        public string UserName {get; set;}= string.Empty;
        public string Email {get; set;} = string.Empty;
        public string Password {get; set;} = string.Empty;
        public string PhoneNumber {get; set;} = string.Empty;
        public string Name {get; set;} = string.Empty;
        public string LastName {get; set;} = string.Empty;
        public bool status {get; set;}
    }
}
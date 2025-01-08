using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace QuizApp.Entities
{
    [Index(nameof(Email), IsUnique = true)]
    public class UserAccount
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; } = "";
        public int Grade { get; set; } = 0;
        public string PasswordSalt { get; set; } // New column for salt
        public string PasswordHash { get; set; } // New column for hash

    }

}

using System.ComponentModel.DataAnnotations;

namespace QuizApp.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RememberMe { get; set; }    
    }
}

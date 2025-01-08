using System.ComponentModel.DataAnnotations;

namespace QuizApp.Models
{
    public class RegistrationViewModel
    {
        
        public string Name { get; set; }

       
        //[EmailAddress(ErrorMessage = "Please enter valid Email")]
        [RegularExpression(@"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Please enter valid Email.")]
        public string Email { get; set; }

        
        [DataType(DataType.Password)]
        public string Password { get; set; }

        
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        public bool AgreeTerms { get; set; }
    }
}

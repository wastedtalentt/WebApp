using QuizApp.Entities;
using QuizApp.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace QuizApp.Controllers
{
    public class AccountController : Controller
    {
        private readonly AppDbContext _context;

        public AccountController(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }


        //public void ConfigureServices(IServiceCollection services)
        //{
        //    services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        //        .AddCookie(options =>
        //        {
        //            options.LoginPath = "/Account/Login";
        //            options.AccessDeniedPath = "/Account/AccessDenied";
        //        });

        //    services.AddControllersWithViews();
        //}

        [Authorize] // Ensure only authenticated users can access this page
        public IActionResult Profile()
        {
            // Get the logged-in user's email from the claims
            var email = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;

            if (email == null)
            {
                return RedirectToAction("Registration"); // Redirect if no user is logged in
            }

            // Fetch user data from the database
            var user = _context.UserAccounts.FirstOrDefault(u => u.Email == email);

            if (user == null)
            {
                return RedirectToAction("Registration"); // Redirect if the user is not found
            }

            // Map the user entity to the view model
            var model = new RegistrationViewModel
            {
                Name = user.Name,
                Email = user.Email
            };

            // Pass the model to the view
            return View(model);
        }



        public IActionResult Quiz()
        {
            return View();
        }

        public IActionResult Information()
        {
            return View();
        }


        public IActionResult Quiz1()
        {
            return View();
        }
        public IActionResult Quiz2()
        {
            return View();
        }

        public IActionResult Quiz3()
        {
            return View("~/Views/Quizzes/Quiz3");
        }

  
        public IActionResult Quiz13()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View(_context.UserAccounts.ToList());
        }


        public IActionResult Registration()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Registration(RegistrationViewModel model)
        {
            if (ModelState.IsValid)
            {
                var (salt, hash) = HashPassword(model.Password);

                UserAccount account = new UserAccount
                {
                    Email = model.Email,
                    Name = model.Name,
                    PasswordSalt = salt, // Store the salt
                    PasswordHash = hash  // Store the hash
                };

                try
                {
                    _context.UserAccounts.Add(account);
                    _context.SaveChanges();

                    ModelState.Clear();
                    ViewBag.Message = $"{account.Name} registered successfully. Please Login.";
                }
                catch (DbUpdateException)
                {
                    ModelState.AddModelError("", "Please enter a unique Email or Password");
                    return View(model);
                }

                return View();
            }
            return View(model);
        }

        private (string Salt, string Hash) HashPassword(string password)
        {
            using var hmac = new System.Security.Cryptography.HMACSHA256();
            byte[] salt = hmac.Key; // Generate a unique salt
            byte[] hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

            return (Convert.ToBase64String(salt), Convert.ToBase64String(hash));
        }




        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Fetch the user by name
                var user = _context.UserAccounts.FirstOrDefault(x => x.Name == model.Name);

                if (user != null && VerifyPassword(model.Password, user.PasswordSalt, user.PasswordHash))
                {
                    // Create the claims for the authenticated user
                    var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email),
                new Claim("Name", user.Name),
                new Claim(ClaimTypes.Role, "User"),
            };

                    var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                    // Sign in the user
                    HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

                    return RedirectToAction("SecurePage");                                               //SecurePage
                }
                else
                {
                    // Add an error if the username or password is incorrect
                    ModelState.AddModelError("", "Name/Password is not correct");
                    return RedirectToAction("Login");
                }
            }
            return View("Login");
        }

        

        private bool VerifyPassword(string enteredPassword, string storedSalt, string storedHash)
        {
            byte[] salt = Convert.FromBase64String(storedSalt);
            byte[] expectedHash = Convert.FromBase64String(storedHash);

            using var hmac = new System.Security.Cryptography.HMACSHA256(salt);
            byte[] enteredHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(enteredPassword));

            // Compare the entered hash with the stored hash
            return enteredHash.SequenceEqual(expectedHash);
        }



            
        public IActionResult LogOut()
        {
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Registration");
        }

        [Authorize]
        public IActionResult SecurePage()
        {
            ViewBag.Name = HttpContext.User.Identity.Name;
            return View();
        }
    }
}

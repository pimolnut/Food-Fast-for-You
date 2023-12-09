using Microsoft.AspNetCore.Mvc;
using backen.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using backen.Controllers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
namespace backen.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController:ControllerBase
    {
        private readonly WebContext _DBContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly JwtSetting jwtSettings;
        public UserController(WebContext dBContext,IOptions<JwtSetting> options,IHttpContextAccessor httpContextAccessor)
        {
            this._DBContext = dBContext;
            this._httpContextAccessor = httpContextAccessor;
            this.jwtSettings = options.Value;
        }

        [HttpPost("Authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] login userCred)
        {
            var user = await this._DBContext.Users.FirstOrDefaultAsync(item => item.UserName == userCred.username && item.Password == userCred.password);
            if (user == null)
                return Unauthorized();
            var tokenhandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(this.jwtSettings.securitykey);
            var tokendesc = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[] { new Claim(ClaimTypes.Name, user.UserName) }
                ),
                Expires = DateTime.Now.AddSeconds(20),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256)
            };
            var token = tokenhandler.CreateToken(tokendesc);
            string finaltoken = tokenhandler.WriteToken(token);
            return Ok(finaltoken);
        }

        [HttpPost()]
        public IActionResult Add(Register temp)
        {
            var item = this._DBContext.Users.FirstOrDefault(o => o.UserName == temp.UserName);
            if (item == null)
            {
                var obj = new user();
                obj.UserName=temp.UserName;
                obj.Password=temp.Password;
                obj.Email=temp.Email;
                obj.PhoneNumber=temp.PhoneNumber;
                obj.LastName=temp.LastName;
                obj.Name=temp.Name;
                obj.status=false;
                this._DBContext.Users.Add(obj);
                this._DBContext.SaveChanges();
                return Ok(obj);
            }
            else
            {
                
                return NotFound("already used");
            }
        }
        [HttpGet("")]
        public IActionResult get()
        {
            var httpRequest = _httpContextAccessor.HttpContext.Request;
            var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
            if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
            {
                var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
                var handler = new JwtSecurityTokenHandler();
                var token = handler.ReadJwtToken(tokenString);
                // Access the claims in the token
                var username = token.Payload["unique_name"];
                var temp = this._DBContext.Users.FirstOrDefault(o => o.UserName == username);
                
                return Ok(temp);
            }
            return Ok("no found token");
        }

    }
}
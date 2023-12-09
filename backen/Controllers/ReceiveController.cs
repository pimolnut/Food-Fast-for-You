using Microsoft.AspNetCore.Mvc;
using backen.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;

namespace backen.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReceiveController: ControllerBase
    {
        private readonly WebContext _DBContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public ReceiveController(WebContext dBContext,IHttpContextAccessor httpContextAccessor)
        {
            this._DBContext = dBContext;
            this._httpContextAccessor = httpContextAccessor;
        }
        [HttpGet("{id}")]
        public IActionResult Getmyorder(int id)
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
                
                var receive = this._DBContext.Accepts.Include(x=>x.order).Include(x=>x.order.user).FirstOrDefault(x=>x.id==id);
                
                
                return Ok(receive);
            }
            return Ok("no found token");
        }
        [HttpPut("{id}")]
        public IActionResult update(int id)
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
                
                var oreder = this._DBContext.Orders.FirstOrDefault(x=>x.id==id);
                oreder.status+=1;
                this._DBContext.Update(oreder);
                this._DBContext.SaveChanges();
                return Ok();
            }
            return Ok("no found token");
        }
    }
}
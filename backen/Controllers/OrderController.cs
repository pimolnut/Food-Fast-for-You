using Microsoft.AspNetCore.Mvc;
using backen.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;

namespace backen.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController: ControllerBase
    {
        private readonly WebContext _DBContext;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public OrderController(WebContext dBContext,IHttpContextAccessor httpContextAccessor)
        {
            this._DBContext = dBContext;
            this._httpContextAccessor = httpContextAccessor;
        }
        [HttpPost()]
        public IActionResult Add(addorder obj)
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
                var item=new order();
                temp.status=true;
                item.address=obj.address;
                item.user=temp;
                item.count=obj.count;
                item.munu=obj.munu;
                item.note=obj.note;
                item.restaurants=obj.restaurants;
                item.receivertel="";
                item.receiver="";
                item.status=-1;
                this._DBContext.Orders.Add(item);
                this._DBContext.Update(temp);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("no found token");
        }
        [HttpGet()]
        public IActionResult Get()
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
                var oreders = this._DBContext.Orders.Include(x=>x.user).ToList();
                var item = new List<order>() ;
                foreach (var i in oreders)
                {
                    if(i.user.id!=temp.id&&i.status==-1)
                        item.Add(i);
                }
                return Ok(item);
            }
            return Ok("no found token");
        }
        [HttpDelete()]
        public IActionResult Delete()
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
                temp.status=false;
                var oreder = this._DBContext.Orders.Include(x=>x.user).FirstOrDefault(o=>o.user==temp);
                this._DBContext.Orders.Remove(oreder);
                this._DBContext.Update(temp);
                this._DBContext.SaveChanges();
                return Ok("success");
            }
            return Ok("no found token");
        }
        [HttpGet("{id}")]
        public IActionResult Take(int id)
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
                var oreder = this._DBContext.Orders.Include(x=>x.user).FirstOrDefault(o=>o.id==id);
                var item=new Accept();
                oreder.status=0;
                oreder.receivertel=temp.PhoneNumber;
                oreder.receiver=temp.Name;
                item.order=oreder;
                item.receive=temp.id;
                this._DBContext.Accepts.Add(item);
                this._DBContext.Update(oreder);
                this._DBContext.SaveChanges();
                
                return Ok(item);
            }
            return Ok("no found token");
        }
        [HttpGet("/status")]
        public IActionResult status()
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
                var oreder = this._DBContext.Orders.Include(x=>x.user).FirstOrDefault(o=>o.user==temp);
                return Ok(oreder);
            }
            return Ok("no found token");
        }
        [HttpGet("myorder")]
        public IActionResult Getmyorder()
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
                var receive = this._DBContext.Accepts.Include(x=>x.order).Include(x=>x.order.user).ToList();
                var item = new List<Accept>() ;
                foreach (var i in receive)
                {
                    if(i.receive==temp.id)
                        item.Add(i);
                }
                return Ok(item);
            }
            return Ok("no found token");
        }
        
    }
}
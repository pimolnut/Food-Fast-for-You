using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace backen.Models;

public partial class WebContext : DbContext
{
    public WebContext()
    {
        

    }

    public WebContext(DbContextOptions<WebContext> options)
        : base(options)
    {
        
    }
    public virtual DbSet<user> Users{get;set;}=null!;
    public virtual DbSet<order> Orders{get;set;}=null!;
    public virtual DbSet<Accept> Accepts{get;set;}=null!;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=MyConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        OnModelCreatingPartial(modelBuilder);
        
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

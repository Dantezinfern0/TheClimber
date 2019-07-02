﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using theclimber;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("theclimber.Models.Climb", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Directions");

                    b.Property<int>("Height");

                    b.Property<string>("Location");

                    b.Property<string>("Notes");

                    b.Property<string>("Rating");

                    b.Property<string>("RouteName");

                    b.Property<int>("Ticks");

                    b.HasKey("Id");

                    b.ToTable("Climbs");
                });

            modelBuilder.Entity("theclimber.Models.Equipment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("ATC");

                    b.Property<bool>("GriGri");

                    b.Property<bool>("SportGear");

                    b.Property<bool>("TradGear");

                    b.HasKey("Id");

                    b.ToTable("EquipList");
                });

            modelBuilder.Entity("theclimber.Models.RouteEquip", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClimbId");

                    b.Property<int>("EquipmentId");

                    b.HasKey("Id");

                    b.HasIndex("ClimbId");

                    b.HasIndex("EquipmentId");

                    b.ToTable("Relations");
                });

            modelBuilder.Entity("theclimber.Models.RouteEquip", b =>
                {
                    b.HasOne("theclimber.Models.Climb", "Climb")
                        .WithMany()
                        .HasForeignKey("ClimbId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("theclimber.Models.Equipment", "Equipment")
                        .WithMany()
                        .HasForeignKey("EquipmentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

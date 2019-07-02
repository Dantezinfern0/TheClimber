using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class changedroutedatamodelname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Relations_Routes_RouteId",
                table: "Relations");

            migrationBuilder.DropTable(
                name: "Routes");

            migrationBuilder.RenameColumn(
                name: "RouteId",
                table: "Relations",
                newName: "ClimbId");

            migrationBuilder.RenameIndex(
                name: "IX_Relations_RouteId",
                table: "Relations",
                newName: "IX_Relations_ClimbId");

            migrationBuilder.CreateTable(
                name: "Climbs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    RouteName = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Rating = table.Column<string>(nullable: true),
                    Height = table.Column<int>(nullable: false),
                    Notes = table.Column<string>(nullable: true),
                    Ticks = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Climbs", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Relations_Climbs_ClimbId",
                table: "Relations",
                column: "ClimbId",
                principalTable: "Climbs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Relations_Climbs_ClimbId",
                table: "Relations");

            migrationBuilder.DropTable(
                name: "Climbs");

            migrationBuilder.RenameColumn(
                name: "ClimbId",
                table: "Relations",
                newName: "RouteId");

            migrationBuilder.RenameIndex(
                name: "IX_Relations_ClimbId",
                table: "Relations",
                newName: "IX_Relations_RouteId");

            migrationBuilder.CreateTable(
                name: "Routes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Height = table.Column<int>(nullable: false),
                    Location = table.Column<string>(nullable: true),
                    Notes = table.Column<string>(nullable: true),
                    Rating = table.Column<string>(nullable: true),
                    RouteName = table.Column<string>(nullable: true),
                    Ticks = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Routes", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Relations_Routes_RouteId",
                table: "Relations",
                column: "RouteId",
                principalTable: "Routes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

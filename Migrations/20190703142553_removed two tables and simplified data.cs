using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class removedtwotablesandsimplifieddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Relations");

            migrationBuilder.DropTable(
                name: "EquipList");

            migrationBuilder.AddColumn<bool>(
                name: "SportGear",
                table: "Climbs",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "TradGear",
                table: "Climbs",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SportGear",
                table: "Climbs");

            migrationBuilder.DropColumn(
                name: "TradGear",
                table: "Climbs");

            migrationBuilder.CreateTable(
                name: "EquipList",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ATC = table.Column<bool>(nullable: false),
                    GriGri = table.Column<bool>(nullable: false),
                    SportGear = table.Column<bool>(nullable: false),
                    TradGear = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipList", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Relations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ClimbId = table.Column<int>(nullable: false),
                    EquipmentId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Relations_Climbs_ClimbId",
                        column: x => x.ClimbId,
                        principalTable: "Climbs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Relations_EquipList_EquipmentId",
                        column: x => x.EquipmentId,
                        principalTable: "EquipList",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Relations_ClimbId",
                table: "Relations",
                column: "ClimbId");

            migrationBuilder.CreateIndex(
                name: "IX_Relations_EquipmentId",
                table: "Relations",
                column: "EquipmentId");
        }
    }
}

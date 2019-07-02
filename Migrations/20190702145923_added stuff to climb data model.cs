using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class addedstufftoclimbdatamodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Climbs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Directions",
                table: "Climbs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Climbs");

            migrationBuilder.DropColumn(
                name: "Directions",
                table: "Climbs");
        }
    }
}

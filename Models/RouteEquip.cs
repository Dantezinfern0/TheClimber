using System;

namespace theclimber.Models
{
  public class RouteEquip
  {
    public int Id { get; set; }
    public int ClimbId { get; set; }
    public Climb Climb { get; set; }
    public int EquipmentId { get; set; }
    public Equipment Equipment { get; set; }
  }
}
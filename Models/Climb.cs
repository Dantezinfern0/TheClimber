using System;

namespace theclimber.Models
{
  public class Climb
  {
    public int Id { get; set; }
    public string RouteName { get; set; }
    public string Location { get; set; }
    public string Rating { get; set; }
    public int Height { get; set; }
    public string Directions { get; set; }
    public string Description { get; set; }
    public string Notes { get; set; }
    public bool SportGear { get; set; }
    public bool TradGear { get; set; }
    public int Ticks { get; set; }
  }
}
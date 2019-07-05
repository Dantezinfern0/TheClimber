using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using theclimber;
using theclimber.Models;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ClimbController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ClimbController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Climb
    [HttpGet("getall")]
    public async Task<ActionResult<List<Climb>>> GetAllClimbs()
    {
      return await _context.Climbs.ToListAsync();
    }

    // GET: api/Climb/5
    [HttpGet("getone/{route}")]
    public async Task<ActionResult<Climb>> GetClimb(string route)
    {
      var climb = await _context.Climbs.FirstOrDefaultAsync(f => f.RouteName == route);

      if (climb == null)
      {
        return NotFound();
      }

      return climb;
    }

    // PUT: api/Climb/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutClimb(int id, Climb climb)
    {
      if (id != climb.Id)
      {
        return BadRequest();
      }

      _context.Entry(climb).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ClimbExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Climb
    [HttpPost("add")]
    public async Task<ActionResult<Climb>> PostClimb([FromBody] Climb climb)
    {
      _context.Climbs.Add(climb);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetClimb", new { id = climb.Id }, climb);
    }

    // DELETE: api/Climb/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Climb>> DeleteClimb(int id)
    {
      var climb = await _context.Climbs.FindAsync(id);
      if (climb == null)
      {
        return NotFound();
      }

      _context.Climbs.Remove(climb);
      await _context.SaveChangesAsync();

      return climb;
    }

    private bool ClimbExists(int id)
    {
      return _context.Climbs.Any(e => e.Id == id);
    }
  }
}

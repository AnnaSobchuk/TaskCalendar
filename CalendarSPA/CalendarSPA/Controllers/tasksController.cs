using repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CalendarSPA.Controllers
{
    public class tasksController : ApiController
    {
        // GET api/tasks
        Entities dbContext;
        UnitOfWork uof;

        public tasksController()
        {
            dbContext = new Entities();
            uof = new UnitOfWork(dbContext);
        }
        public Task[] Get()
        {
            List<Task> names = new List<Task>();
            foreach (var i in uof.tasks.getTasks())
                names.Add(i);
            return names.ToArray();


        }

        // GET api/tasks/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/tasks
        public void Post([FromBody]string value)
        {
        }

        // PUT api/tasks/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/tasks/5
        public void Delete(int id)
        {
            uof.tasks.deleteTask(id);
        }
    }
}

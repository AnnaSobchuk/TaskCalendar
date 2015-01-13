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

        
        Entities dbContext;
        UnitOfWork uof;

        public tasksController()
        {
            dbContext = new Entities();
            uof = new UnitOfWork(dbContext);
        }
        // GET api/tasks
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
        public Task Post(Task item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            uof.tasks.addTask(item);
            uof.Commit();
            return item;
        }

        // PUT api/tasks/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/tasks/5
        public void Delete(int id)
        {
            uof.tasks.deleteTask(id);
            uof.Commit();
        }
    }
}

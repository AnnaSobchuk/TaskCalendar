using Ninject;
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
         public static IKernel AppKernel;
         UnitOfWork uof;
       
         

        public tasksController()
        {
            AppKernel = new StandardKernel(new MyNinjectModule());

           uof = AppKernel.Get<UnitOfWork>();
        }
        // GET api/tasks
        public Tasks[] Get()
        {
            List<Tasks> names = new List<Tasks>();
            foreach (var i in uof.tasks.getTasks())
                names.Add(i);
            return names.ToArray();


        }

        // GET api/tasks/5
        public Tasks Get(int id)
        {
            return uof.tasks.getID(id);
        }

        // POST api/tasks
        public Tasks Post(Tasks item)
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
        public Tasks Put(int id)
        {
            Tasks tmp = uof.tasks.getID(id);
            if (tmp.Done == false)
            {
            tmp.Done = true;
            }
            else
            {
                tmp.Done = false;
            }
          
            uof.tasks.updateTask(tmp);
            uof.Commit();
            return tmp;
        }

        // DELETE api/tasks/5
        public void Delete(int id)
        {
            uof.tasks.deleteTask(id);
            uof.Commit();
        }
    }
}

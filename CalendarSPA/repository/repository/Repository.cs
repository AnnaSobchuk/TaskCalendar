using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository
{
    public interface IRepository<T>:IDisposable 
    {
        IEnumerable<T> getTasks();
        T getID(int id);
        void addTask(T tsk);
        void deleteTask(int id);
        void updateTask(T task);
        void save();
    }

    public class Repository<T> : IRepository <T> where T:class
    {
        Entities cntxt;
        bool disposed = false;
        public Repository(Entities cont)
        {
            this.cntxt = cont;
            this.cntxt.Configuration.ProxyCreationEnabled = false;
        }
        public IEnumerable<T> getTasks()
        {
            return cntxt.Set<T>().ToList();
        }
   
        public T getID(int id)
        {
            return cntxt.Set<T>().Find(id);
        }
        public void addTask(T task)
        {
            cntxt.Set<T>().Add(task);
        }
        public void deleteTask(int id)
        {
            cntxt.Set<T>().Remove(getID(id));
        }
        public void updateTask(T task)
        {
            cntxt.Entry(task).State = System.Data.EntityState.Modified;
        }
        public void save()
        {
            cntxt.SaveChanges();
        }
        protected virtual void Dispose(bool disposd)
        {
            if (!this.disposed)
            {
                if (disposd)
                {
                    cntxt.Dispose();
                }

            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
             

    }
}

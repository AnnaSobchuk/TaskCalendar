using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Task> tasks { get; }
        void Commit();
    }
    public class UnitOfWork : IUnitOfWork 
    {
        Entities context;
        Repository<Task> tasksRepository;
        Repository<TaskCategory> categoriesRepository;
        public UnitOfWork()
        {
            context = new Entities();
        }
        public UnitOfWork(Entities context)
        {
            this.context = context;
        }
        public void Commit()
        {
            this.context.SaveChanges();
        }
        public IRepository<Task> tasks
        {
            get
            {
                if (this.tasksRepository == null)
                {
                    this.tasksRepository = new Repository<Task>(this.context);
                }
                return this.tasksRepository;

            }
        }
        public IRepository<TaskCategory> categories
        {
            get
            {
                if (this.categoriesRepository == null)
                {
                    this.categoriesRepository = new Repository<TaskCategory>(this.context);
                }
                return this.categoriesRepository;

            }
        }
        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.context != null)
                {
                    this.context.Dispose();
                }
            }
        }
        
        }
}

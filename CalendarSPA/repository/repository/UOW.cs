using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Tasks> tasks { get; }
        void Commit();
    }
    public class UnitOfWork : IUnitOfWork 
    {
       TodoEntities context;
        Repository<Tasks> tasksRepository;
        Repository<TaskCategories> categoriesRepository;
        public UnitOfWork()
        {
            context = new TodoEntities();
        }
        public UnitOfWork(TodoEntities context)
        {
            this.context = context;
        }
        public void Commit()
        {
            this.context.SaveChanges();
        }
        public IRepository<Tasks> tasks
        {
            get
            {
                if (this.tasksRepository == null)
                {
                    this.tasksRepository = new Repository<Tasks>(this.context);
                }
                return this.tasksRepository;

            }
        }
        public IRepository<TaskCategories> categories
        {
            get
            {
                if (this.categoriesRepository == null)
                {
                    this.categoriesRepository = new Repository<TaskCategories>(this.context);
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

using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository
{
  public class MyNinjectModule:NinjectModule
    {
      public override void Load()
      {
         this.Bind<IUnitOfWork>().To<UnitOfWork>();
      }
    }
}

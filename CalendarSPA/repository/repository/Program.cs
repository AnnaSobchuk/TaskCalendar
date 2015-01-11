using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository
{
    class Program
    {
        static void Main(string[] args)
        {
            string choise;
            Entities db = new Entities();
            UnitOfWork uof = new UnitOfWork(db);

            //do
            //{
                //Console.WriteLine("add task?");
                //choise = Console.ReadLine();
                //Console.WriteLine("inpput ID");
                //string id = Console.ReadLine();
                //Console.WriteLine("inpput NAme");
                //string name = Console.ReadLine();
                //Console.WriteLine("inpput catID");
                //string ctid = Console.ReadLine();
                //Task tsk = new Task()
                //{
                //    TaskName = name,
                //    TaskID = Convert.ToInt32(id),
                //    CategoryID = Convert.ToInt32(ctid),


                //};
                //uof.tasks.addTask(tsk);
                //uof.Commit();
                foreach (var i in uof.tasks.getTasks())
                {
                    Console.WriteLine(i.TaskName);
                }
                //if (choise == "n")
                //{
                //    break;
                //}
            //} while (choise != "n");
        }
    }
   

}

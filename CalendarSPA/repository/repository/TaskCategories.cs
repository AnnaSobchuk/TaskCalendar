//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace repository
{
    using System;
    using System.Collections.Generic;
    
    public partial class TaskCategories
    {
        public TaskCategories()
        {
            this.Tasks = new HashSet<Tasks>();
        }
    
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    
        public virtual ICollection<Tasks> Tasks { get; set; }
    }
}

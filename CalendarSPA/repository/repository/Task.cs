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
    
    public partial class Task
    {
        public int TaskID { get; set; }
        public int CategoryID { get; set; }
        public string TaskName { get; set; }
        public Nullable<System.DateTime> TaskTime { get; set; }
    
        public virtual TaskCategory TaskCategory { get; set; }
    }
}

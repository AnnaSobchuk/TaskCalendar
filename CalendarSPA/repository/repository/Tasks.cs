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
    
    public partial class Tasks
    {
        public int TaskID { get; set; }
        public int CategoryID { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public Nullable<bool> Done { get; set; }
        public string TaskDate { get; set; }
        public string CellPos { get; set; }
    
        public virtual TaskCategories TaskCategories { get; set; }
    }
}

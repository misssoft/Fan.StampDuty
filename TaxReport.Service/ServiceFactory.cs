using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxReport.Service
{
    public static class ServiceFactory
    {
        public static ReportingService CreateReportingService()
        {
            return new ReportingService(
                new Taxpayers(), 
                new ReportGenerator(), 
                new Emailer()
                );
        }
    }
}

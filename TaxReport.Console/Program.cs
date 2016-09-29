using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxReport.Service;

namespace TaxReport.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = ServiceFactory.CreateReportingService();
            service.GenerateBatchReport();
            System.Console.ReadLine();
        }
    }
}

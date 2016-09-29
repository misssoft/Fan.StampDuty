using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxReport.Common;

namespace TaxReport.Function
{
    public static class TaxReportFunction
    {
        public static void RunCustomerReportBatch( Func<IEnumerable<Taxpayer>> getTaxpayersForCustomerReport,
                                                   Func<Taxpayer, Report> generateCustomerReport,
                                                   Action<string, string> sendEmail)
        {
            var customers = getTaxpayersForCustomerReport();
            foreach (var customer in customers)
            {
                var report = generateCustomerReport(customer);
                sendEmail(report.TaxpayerEmail, report.ReportSummary);
            }
        }
    }
}

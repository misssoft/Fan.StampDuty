using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxReport.Common;

namespace TaxReport.Service
{
    public class ReportGenerator : IReportGenerator
    {
        public Report GenerateTaxReport(Taxpayer taxPayer)
        {
            return new Report(taxPayer.TaxPayerEmail, $"This is the report for {taxPayer.TaxPayerEmail}!");
        }
    }
}

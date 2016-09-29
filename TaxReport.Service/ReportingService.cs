using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxReport.Service
{
    public class ReportingService : IReportingService
    {
        public ITaxpayers Taxpayers { get;  }
        public IReportGenerator ReportGenerator { get;  }
        public IEmailer Emailer { get;  }

        public ReportingService(ITaxpayers taxpayers, IReportGenerator reportGenerator,IEmailer emailer)
        {
            Taxpayers = taxpayers;
            ReportGenerator = reportGenerator;
            Emailer = emailer;
        }

        public void GenerateBatchReport()
        {
            var taxpayers = Taxpayers.GetTaxPayerForTaxReport();

            foreach (var payers in taxpayers)
            {
                var report = ReportGenerator.GenerateTaxReport(payers);
                Emailer.Send(report.TaxpayerEmail, report.ReportSummary);
            }
        }
    }
}

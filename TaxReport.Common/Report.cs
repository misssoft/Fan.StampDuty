namespace TaxReport.Common
{
    public class Report
    {
        public string TaxpayerEmail { get; }

        public string ReportSummary { get; set; }

        public Report(string email, string reportSummary)
        {
            TaxpayerEmail = email;
            ReportSummary = reportSummary;
        }
    }
}
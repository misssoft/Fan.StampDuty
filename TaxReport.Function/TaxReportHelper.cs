
using System;

namespace TaxReport.Function
{
    using System.Collections.Generic;
    using TaxReport.Common;
    public static class TaxReportHelper
    {
        public static IEnumerable<Taxpayer> GetTaxPayerForTaxReport()
        {
            yield return new Taxpayer("taxpayer1@test.com");
            yield return new Taxpayer("taxpayer2@test.com");
            yield return new Taxpayer("taxpayer3@test.com");
        }

        public static Report CreateCustomerReport(Taxpayer taxpayer)
        {
            return new Report(taxpayer.TaxPayerEmail, $"This is the report for {taxpayer.TaxPayerEmail}!");
        }

        public static void SendEmail(string toAddress, string body)
        {
            // pretend to send an email here
            Console.Out.WriteLine("Sent Email to: {0}, Body: '{1}'", toAddress, body);
        }
    }
}

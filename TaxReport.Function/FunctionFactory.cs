using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxReport.Function
{
    class FunctionFactory
    {
        public static Action CreateFunctions()
        {
            return () => TaxReportFunction.RunCustomerReportBatch(
                TaxReportHelper.GetTaxPayerForTaxReport,
                TaxReportHelper.CreateCustomerReport,
                TaxReportHelper.SendEmail
            );
        }
    }
}

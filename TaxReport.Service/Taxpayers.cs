using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxReport.Common;

namespace TaxReport.Service
{
    public class Taxpayers : ITaxpayers
    {
        public IEnumerable<Taxpayer> GetTaxPayerForTaxReport()
        {
            yield return new Taxpayer("taxpayer1@test.com");
            yield return new Taxpayer("taxpayer2@test.com");
            yield return new Taxpayer("taxpayer3@test.com");
        }
    }
}

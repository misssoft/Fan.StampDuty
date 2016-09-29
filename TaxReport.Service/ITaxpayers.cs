using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxReport.Common;

namespace TaxReport.Service
{
    public interface ITaxpayers
    {
        IEnumerable<Taxpayer> GetTaxPayerForTaxReport();
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxReport.Service
{
    public interface IEmailer
    {
        void Send(string toAddress, string body);
    }
}

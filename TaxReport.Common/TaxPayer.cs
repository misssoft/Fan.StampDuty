using System.Security.Cryptography.X509Certificates;

namespace TaxReport.Common
{
    public class Taxpayer
    {
        public string TaxPayerEmail { get;}

        public string LastName { get; set; }

        public string FirstNames { get; set; }

        public Taxpayer(string email)
        {
            TaxPayerEmail = email;
        }
    }
}
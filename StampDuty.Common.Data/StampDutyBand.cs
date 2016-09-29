using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDuty.Common.Data
{
    public class StampDutyBand
    {
        public double MinValue { get; set; }
        public double MaxValue { get; set; }
        public double Percentage { get; set; }
        public double PayableSum { get; set; }
        public double Tax => PayableSum * Percentage;

        public override string ToString()
        {
            return ($"Tax Band: {MinValue} - {MaxValue}, " +
                    $"Payable Sum: £ {PayableSum}, " +
                    $"Percentage: {Percentage}, Tax: £ {Tax}");
        }
    }
}

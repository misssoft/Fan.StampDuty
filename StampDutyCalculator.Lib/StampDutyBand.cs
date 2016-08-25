using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyCalculator.Lib
{
    public class StampDutyBand
    {
        public double MinValue { get; set; }
        public double MaxValue { get; set; }
        public double Percentage { get; set; }
        public double PayableSum { get; set; }
        public double Tax {
            get {
                return PayableSum * Percentage;
            } }

        
     }
}

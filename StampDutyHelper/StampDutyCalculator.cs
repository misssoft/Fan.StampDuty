using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyHelper
{
    public static class StampDutyCalculator
    {
        public static double Calculate(string type)
        {
            if (type == "1")
            {
                return CalculateResidential();
            }
            else
            {
                return CalculateNonResidential();
            }   
        }

        private static double CalculateNonResidential()
        {
            
        }

        private static double CalculateResidential()
        {
            return 1000;
        }
    }
}

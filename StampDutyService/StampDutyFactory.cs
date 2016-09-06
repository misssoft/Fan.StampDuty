using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyService
{
    public static class StampDutyFactory
    {
        public static StampDutyBaseCalculator CreateStampDuty(string type)
        {
            if (type == "1")
                return new ResidentialStampDutyCalculator();
            else
                return new NonResidentialStampDutyCalculator();
        }
    }
}


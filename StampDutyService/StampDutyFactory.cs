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
            switch (type)
            {
                case "R":
                case "r":
                    var residential = new ResidentialStampDutyCalculator();
                    return residential;
                case "N":
                case "n":
                    var nonResidential = new NonResidentialStampDutyCalculator();
                    return nonResidential;
                default:
                    throw new Exception("Type is not supported");
            }
                
        }
    }
}

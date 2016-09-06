using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyService
{
    public static class StampDutyFactory
    {
        public static StampDutyBase CreateStampDuty(string type)
        {
            switch (type)
            {
                case "R":
                case "r":
                    var residential = new ResidentialStampDuty();
                    return residential;
                case "N":
                case "n":
                    var nonResidential = new NonResidentialStampDuty();
                    return nonResidential;
                default:
                    throw new Exception("Type is not supported");
            }
                
        }
    }
}

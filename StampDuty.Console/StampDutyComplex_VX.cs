
using StampDuty.Common.Data;

namespace StampDuty.Console
{
    using System;
    using System.Collections.Generic;

    public static class StampDutyComplex_VX
    {
        public static IEnumerable<StampDutyBand> CalculateStampDuty(double price)
        {
            return StampDutyCalculatorHelper.CalculateResidentialHome(price);
        }

        public static IEnumerable<StampDutyBand> CalculateStampDuty(double price, bool isSecondHome)
        {
            if (isSecondHome)
            {
                return StampDutyCalculatorHelper.CalculateResidentialSecondHome(price);
            }
            return StampDutyCalculatorHelper.CalculateResidentialHome(price);
        }

        public static IEnumerable<StampDutyBand> CalculateStampDuty(double price, bool isSecondHome, bool isReplacing)
        {
            if (isSecondHome)
            {
                if (isReplacing)
                {
                    return StampDutyCalculatorHelper.CalculateResidentialHome(price);
                }
                return StampDutyCalculatorHelper.CalculateResidentialSecondHome(price);
            }
            return StampDutyCalculatorHelper.CalculateResidentialHome(price);
        }
    }
}

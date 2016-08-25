using System.Collections.Generic;

namespace StampDutyCalculator.Lib
{
    public interface IStampDutyCalculator
    {
        double[] CalculateStampDuty(double price);
        IEnumerable<StampDutyBand> CalculateFullStampDuty(double price);
    }
}
namespace StampDuty.Console
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Common.Data;
    public static class StampDutyCalculatorHelper
    {
        public static IEnumerable<StampDutyBand> CalculateTax(double price, StampDutyBand[] appliedDutyBands)
        {
            var payBands = new List<StampDutyBand>();

            var bands = appliedDutyBands.Where(x => x.MinValue < price).ToList();

            foreach (var band in bands)
            {
                if (price < band.MaxValue)
                {
                    band.PayableSum = price - band.MinValue;
                }
                else
                {
                    band.PayableSum = band.MaxValue - band.MinValue;
                }

                payBands.Add(band);
            }
            return payBands;
        }

        public static IEnumerable<StampDutyBand> CalculateResidentialFirstHome(double price)
        {
            var firsthomeBands = new StampDutyBand[5]{
                new StampDutyBand() {MinValue = 0.0, MaxValue = 125000.0, Percentage=0.0 },
                new StampDutyBand() {MinValue = 125000.0, MaxValue = 250000, Percentage=0.02 },
                new StampDutyBand() {MinValue = 250000.0, MaxValue = 925000.0, Percentage=0.05 },
                new StampDutyBand() {MinValue = 925000.0, MaxValue = 1500000.0, Percentage=0.10 },
                new StampDutyBand() {MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage=0.12 }};

            return CalculateTax(Convert.ToDouble(price),firsthomeBands);
        }

        public static IEnumerable<StampDutyBand> CalculateResidentialSecondHome(double price)
        {
            var secondhomeBands = new StampDutyBand[5]{
                     new StampDutyBand() { MinValue = 0.0, MaxValue = 125000.0, Percentage = 0.03 },
                     new StampDutyBand() { MinValue = 125000.0, MaxValue = 250000, Percentage = 0.05 },
                     new StampDutyBand() { MinValue = 250000.0, MaxValue = 925000.0, Percentage = 0.08 },
                     new StampDutyBand() { MinValue = 925000.0, MaxValue = 1500000.0, Percentage = 0.13 },
                     new StampDutyBand() { MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage = 0.15 }};
            return CalculateTax(price,secondhomeBands);
        }

        public static IEnumerable<StampDutyBand> CalculateNonResidentialPropertyFreehold(double price)
        {
            var nonresidentialBands = new StampDutyBand[3]{
                     new StampDutyBand() {MinValue = 0.0, MaxValue = 150000.0, Percentage=0.0 },
                     new StampDutyBand() {MinValue = 150000.0, MaxValue = 250000, Percentage=0.02 },
                     new StampDutyBand() {MinValue = 250000.0, MaxValue = double.MaxValue, Percentage=0.05 }
            };

            return CalculateTax(price,nonresidentialBands);
        }

        public static IEnumerable<StampDutyBand> CalculateNonResidentialPropertyLeasehold(double price)
        {
            var nonresidentialBands = new StampDutyBand[3]{
                     new StampDutyBand() {MinValue = 0.0, MaxValue = 100000.0, Percentage=0.0 },
                     new StampDutyBand() {MinValue = 100000.0, MaxValue = 200000, Percentage=0.02 },
                     new StampDutyBand() {MinValue = 200000.0, MaxValue = double.MaxValue, Percentage=0.05 }
            };

            return CalculateTax(price, nonresidentialBands);
        }
    }
}

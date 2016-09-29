using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
namespace StampDuty.PropertyService
{
    using Common.Data;
    public abstract class PropertyBase 
    {
        public double Price { get; set; }
        public bool IsFreehold { get; set; }
        protected abstract StampDutyBand[] GetBands();
        public IEnumerable<StampDutyBand> CalculateStampDuty()
        {
            var bands = GetBands();
            return CalcuateCore(bands);
        }

        private IEnumerable<StampDutyBand> CalcuateCore(StampDutyBand[] propertyBands)
        {
            var price = Price;
            var payBands = new List<StampDutyBand>();
            var bands = propertyBands.Where(x => x.MinValue < price).ToList();
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
    }
}

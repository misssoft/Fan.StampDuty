using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyService
{
    public abstract class StampDutyBaseCalculator
    {
        protected abstract PropertyInfo GetPropertyInfo();
        protected abstract StampDutyBand[] GetBands();

        public IEnumerable<StampDutyBand> Tax { get {
                var info = GetPropertyInfo();
                var bands = GetBands();
                return CalcuateCore(info, bands);
            } }

        public void PrintOutTax()
        {
            foreach (var band in Tax)
            {
                System.Console.WriteLine(band.ToString());
            }
            System.Console.WriteLine($"================================= The total stampduty to pay =========== £ {Tax.Sum(x => x.Tax).ToString()}");
        }

        private IEnumerable<StampDutyBand> CalcuateCore(PropertyInfo info, StampDutyBand[] propertyBands)
        {
            var price = info.Price;

            var payBands = new List<StampDutyBand>();

            var bands = propertyBands.Where(x => x.MinValue < price).ToList();

            for (int i = 0; i < bands.Count; i++)
            {
                var band = bands[i];

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

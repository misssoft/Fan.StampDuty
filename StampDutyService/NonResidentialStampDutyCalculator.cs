using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyService
{
    public class NonResidentialStampDutyCalculator : StampDutyBaseCalculator
    {
        protected override StampDutyBand[] GetBands(PropertyInfo info)
        {
            return new StampDutyBand[3]{
                     new StampDutyBand() {MinValue = 0.0, MaxValue = 150000.0, Percentage=0.0 },
                     new StampDutyBand() {MinValue = 150000.0, MaxValue = 250000, Percentage=0.02 },
                     new StampDutyBand() {MinValue = 250000.0, MaxValue = double.MaxValue, Percentage=0.05 }
            };
        }

        protected override PropertyInfo GetPropertyInfo()
        {
            Console.WriteLine("Non-Residential Property Value:");
            var propertyValue = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Is property Freehold? (1) Freehold (2) Leasehold ");
            Console.WriteLine("(1) Freehold");
            Console.WriteLine("(2) Leasehold");

            var freehold = (Console.ReadLine() == "1");
            NonResidentailPropertyInfo info = new NonResidentailPropertyInfo(propertyValue, freehold);

            var settings = info.GetType().GetProperties();

            foreach (var setting in settings)
            {
                Console.WriteLine($"{setting.Name} :  {setting.GetValue(info)}");
            }

            return info;
        }
    }
}

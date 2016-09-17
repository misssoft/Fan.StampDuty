using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyService
{
    public class ResidentialStampDutyCalculator : StampDutyBaseCalculator
    {
        protected override PropertyInfo GetPropertyInfo()
        {
            Console.WriteLine("Residential Property Value:");
            var propertyValue = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Is property Freehold?");
            Console.WriteLine("(1) Freehold  ");
            Console.WriteLine("(2) Leasehold ");
            var freehold = Convert.ToInt16(Console.ReadLine());

            Console.WriteLine("Is property Joined Owned? ");
            Console.WriteLine("(1) Joined ");
            Console.WriteLine("(2) Not Joined ");

            var joined = Convert.ToInt16(Console.ReadLine());

            Console.WriteLine("Is property SecondHome?");
            Console.WriteLine("(1) FirstHome");
            Console.WriteLine("(2) SecondHome ");

            var secondHome = Convert.ToInt16(Console.ReadLine());

            ResidentailPropertyInfo  info = new ResidentailPropertyInfo(propertyValue, freehold == 1, joined== 1, secondHome == 1);

            var settings = info.GetType().GetProperties();

            foreach (var setting in settings)
            {
                Console.WriteLine($"{setting.Name} : {setting.GetValue(info)}");
            }

            return info;
        }

        protected override StampDutyBand[] GetBands(PropertyInfo info)
        {
            var residentialInfo = info as ResidentailPropertyInfo;

            if (residentialInfo.IsSecondHome)
            {
                return new StampDutyBand[5]{
                     new StampDutyBand() { MinValue = 0.0, MaxValue = 125000.0, Percentage = 0.03 },
                     new StampDutyBand() { MinValue = 125000.0, MaxValue = 250000, Percentage = 0.05 },
                     new StampDutyBand() { MinValue = 250000.0, MaxValue = 925000.0, Percentage = 0.08 },
                     new StampDutyBand() { MinValue = 925000.0, MaxValue = 1500000.0, Percentage = 0.13 },
                     new StampDutyBand() { MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage = 0.15 }};
             }
            return new StampDutyBand[5]{
                new StampDutyBand() {MinValue = 0.0, MaxValue = 125000.0, Percentage=0.0 },
                new StampDutyBand() {MinValue = 125000.0, MaxValue = 250000, Percentage=0.02 },
                new StampDutyBand() {MinValue = 250000.0, MaxValue = 925000.0, Percentage=0.05 },
                new StampDutyBand() {MinValue = 925000.0, MaxValue = 1500000.0, Percentage=0.10 },
                new StampDutyBand() {MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage=0.12 }};
        }
    }
}

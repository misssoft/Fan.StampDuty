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
            var freehold = (Console.ReadLine() == "1");

            Console.WriteLine("Is property Joined Owned? ");
            Console.WriteLine("(1) Joined ");
            Console.WriteLine("(2) Not Joined ");

            var joined = (Console.ReadLine() == "1");

            ResidentailPropertyInfo  info = new ResidentailPropertyInfo(propertyValue, freehold, joined);
            
            return info;
        }

        protected override StampDutyBand[] GetBands()
        {
            Console.WriteLine("Is property SecondHome?");
            Console.WriteLine("(1) FirstHome");
            Console.WriteLine("(2) SecondHome ");

            var secondHome = (Console.ReadLine() == "2");

            if (secondHome)
            {
                return new StampDutyBand[5]{
                       new StampDutyBand() { MinValue = 0.0, MaxValue = 125000.0, Percentage = 0.03 },
                     new StampDutyBand() { MinValue = 125000.0, MaxValue = 250000, Percentage = 0.05 },
                     new StampDutyBand() { MinValue = 250000.0, MaxValue = 925000.0, Percentage = 0.08 },
                     new StampDutyBand() { MinValue = 925000.0, MaxValue = 1500000.0, Percentage = 0.13 },
                     new StampDutyBand() { MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage = 0.15 }};
             }
           else
            {
                return new StampDutyBand[5]{
                     new StampDutyBand() {MinValue = 0.0, MaxValue = 125000.0, Percentage=0.0 },
                     new StampDutyBand() {MinValue = 125000.0, MaxValue = 250000, Percentage=0.02 },
                     new StampDutyBand() {MinValue = 250000.0, MaxValue = 925000.0, Percentage=0.05 },
                     new StampDutyBand() {MinValue = 925000.0, MaxValue = 1500000.0, Percentage=0.10 },
                     new StampDutyBand() {MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage=0.12 }};
            }
        }
    }
}

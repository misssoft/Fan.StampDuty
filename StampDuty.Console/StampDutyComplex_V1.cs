using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDuty.Console
{
    public class StampDutyComplex_V1
    {
        public static void Start()
        {
            while (true)
            {
                System.Console.WriteLine("Residential or Non-Residential");
                System.Console.WriteLine("1: Residential. ");
                System.Console.WriteLine("2: Non-Residential");
                var type = System.Console.ReadLine();
                StampDutyService.StampDutyBaseCalculator calculator = StampDutyService.StampDutyFactory.CreateStampDuty(type);
                calculator.PrintOutTax();
                System.Console.WriteLine("Another Property...");
            }
        }
    }
}

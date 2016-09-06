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
                System.Console.WriteLine("R/r: Residential. ");
                System.Console.WriteLine("N/n: Non-Residential");
                var type = System.Console.ReadLine();
                var calculator = StampDutyService.StampDutyFactory.CreateStampDuty(type);
                calculator.PrintTax();
            }
        }
    }
}

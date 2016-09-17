using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StampDutyService;

namespace StampDuty.Console
{
    public class StampDutyComplex_V2
    {
        public static void Start()
        {
            while (true)
            {
                System.Console.WriteLine("Residential or Non-Residential");
                System.Console.WriteLine("1: Residential. ");
                System.Console.WriteLine("2: Non-Residential");
                var type = System.Console.ReadLine();
                if (type == "1")
                {
                    var calculator = new ResidentialStampDutyCalculator();
                    calculator.PrintOutTax();
                }
                else
                {
                    var calculator = new NonResidentialStampDutyCalculator();
                    calculator.PrintOutTax();
                }
               System.Console.WriteLine("Another Property...");
            }
        }
    }
}

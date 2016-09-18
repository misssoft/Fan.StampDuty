

using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Policy;
using StampDuty.Common.Data;

namespace StampDuty.Console
{
    using System;
    using StampDuty.PropertyService;
    public class StampDutyComplex_V2
    {
        public static void Start()
        {
            while (true)
            {
                Console.WriteLine("Residential or Non-Residential");
                Console.WriteLine("1: Residential. ");
                Console.WriteLine("2: Non-Residential");
                var msg = $"[Enter option number:] (1 or 2)";
                var type = StampDutyHelper.GetInputFromConsole(1, 2, msg);
                if (type == 1)
                {
                    var property= new ResidentialProperty();
                    Console.WriteLine("What is the value of the property?");
                    property.Price = Convert.ToDouble(Console.ReadLine());
                    Console.WriteLine("Is property Freehold?");
                    Console.WriteLine("(1) Freehold  ");
                    Console.WriteLine("(2) Leasehold ");
                    property.IsFreehold = StampDutyHelper.GetInputFromConsole(1, 2, msg) == 1;

                    Console.WriteLine("Is property Joined Owned? ");
                    Console.WriteLine("(1) Joined ");
                    Console.WriteLine("(2) Not Joined ");
                    property.IsJoinedOwned = StampDutyHelper.GetInputFromConsole(1, 2, msg) == 1;

                    Console.WriteLine("Is property second home?");
                    Console.WriteLine("(1) FirstHome");
                    Console.WriteLine("(2) SecondHome ");
                    property.IsAdditionalProperty = StampDutyHelper.GetInputFromConsole(1, 2, msg) == 2;

                    var stampDuty = property.CalculateStampDuty();
                    StampDutyHelper.PrintTax(stampDuty);
                }
                else
                {
                    var property = new NonResidentialProperty();
                    Console.WriteLine("What is the value of the property?");
                    property.Price = Convert.ToDouble(Console.ReadLine());
                    Console.WriteLine("Is property Freehold?");
                    Console.WriteLine("(1) Freehold  ");
                    Console.WriteLine("(2) Leasehold ");
                    property.IsFreehold = StampDutyHelper.GetInputFromConsole(1, 2, msg) == 1;

                    var stampDuty = property.CalculateStampDuty();
                    StampDutyHelper.PrintTax(stampDuty);
                }
               System.Console.WriteLine("Another Property...");
            }
        }
    }
}

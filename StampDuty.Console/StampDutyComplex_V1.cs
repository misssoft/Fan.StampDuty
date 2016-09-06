
namespace StampDuty.Console
{
    using System;
    public class StampDutyComplex_V1
    {
        public static void Start()
        {
            while (true)
            {
                Console.WriteLine("Residential or Non-Residential");
                Console.WriteLine("1: Residential. ");
                Console.WriteLine("2: Non-Residential");
                var type = System.Console.ReadLine();
                if (type == "1")
                {
                    Console.WriteLine("Residential Property Value:");
                    var propertyValue = Convert.ToDouble(System.Console.ReadLine());

                    Console.WriteLine("Is property Freehold?");
                    Console.WriteLine("(1) Freehold  ");
                    Console.WriteLine("(2) Leasehold ");
                    var freehold = (System.Console.ReadLine() == "1");

                    Console.WriteLine("Is property Joined Owned? ");
                    Console.WriteLine("(1) Joined ");
                    Console.WriteLine("(2) Not Joined ");

                    var joined = (System.Console.ReadLine() == "1");

                    Console.WriteLine("Is property SecondHome?");
                    Console.WriteLine("(1) FirstHome");
                    Console.WriteLine("(2) SecondHome ");

                    var secondHome = (System.Console.ReadLine() == "2");

                    if (secondHome)
                    {
                        CalculateSecondHomeStampDuty();
                    }
                    else {
                        CalculateFirstHomeStampDuty();
                    }

                }
                else
                {
                    Console.WriteLine("Non-Residential Property Value:");
                    var propertyValue = Convert.ToDouble(Console.ReadLine());

                    Console.WriteLine("Is property Freehold? (1) Freehold (2) Leasehold ");
                    Console.WriteLine("(1) Freehold");
                    Console.WriteLine("(2) Leasehold");

                    var freehold = (Console.ReadLine() == "1");

                    CalculateNonResidentialStampDuty();
                }
                System.Console.WriteLine("Another Property...");
            }
        }

        private static void CalculateNonResidentialStampDuty()
        {
            CalculateStampDuty();
        }

        private static void CalculateFirstHomeStampDuty()
        {
            CalculateStampDuty();
        }

        private static void CalculateSecondHomeStampDuty()
        {
            CalculateStampDuty();
        }

        private static void CalculateStampDuty()
        {
            var random = new Random(100000);
            Console.WriteLine($"The StampDuty is: {random.Next()}");
        }
    }
}

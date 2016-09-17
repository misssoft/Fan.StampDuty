
using System.Collections.Generic;
using System.Globalization;

namespace StampDuty.Console
{
    using System;
    public class StampDutyComplexV1
    {
        public static void Start()
        {
            while (true)
            {
                Console.WriteLine("Is the property Residential or Non-Residential");
                Console.WriteLine("1: Residential. ");
                Console.WriteLine("2: Non-Residential");
                var type = System.Console.ReadLine();
                if (type == "1")
                {
                    var residentialPropertyInfo = new List<KeyValuePair<string, string>>();
                    Console.WriteLine("What is the Residential Property Value:");
                    var propertyValue = Convert.ToDouble(System.Console.ReadLine());
                    residentialPropertyInfo.Add(new KeyValuePair<string, string>("Value", propertyValue.ToString(CultureInfo.InvariantCulture)));

                    Console.WriteLine("Is property Freehold?");
                    Console.WriteLine("(1) Freehold  ");
                    Console.WriteLine("(2) Leasehold ");
                    var freehold = (System.Console.ReadLine() == "1");
                    residentialPropertyInfo.Add(freehold ? new KeyValuePair<string, string>("Holding", "Freehold") : new KeyValuePair<string, string>("Holding", "Leasehold"));

                    Console.WriteLine("Is property Joined Owned? ");
                    Console.WriteLine("(1) Joined ");
                    Console.WriteLine("(2) Not Joined ");
                    var joined = (System.Console.ReadLine() == "1");
                    residentialPropertyInfo.Add(joined ? new KeyValuePair<string, string>("Ownership", "Joined") : new KeyValuePair<string, string>("Ownership", "Sole Owner"));

                    Console.WriteLine("Is property SecondHome?");
                    Console.WriteLine("(1) FirstHome");
                    Console.WriteLine("(2) SecondHome ");

                    var secondHome = (System.Console.ReadLine() == "2");
                    if (secondHome)
                    {
                        var value = residentialPropertyInfo.Find(x => x.Key == "Value").Value.ToString();
                        var result = StampDutyHelper.CalculateResidentialSecondHome(Convert.ToDouble(value));
                        residentialPropertyInfo.Add(new KeyValuePair<string, string>("Additonal Property", "Yes"));
                        StampDutyHelper.PrintTax(result);
                    }
                    else
                    {
                        var value = residentialPropertyInfo.Find(x => x.Key == "Value").Value.ToString();
                        var result = StampDutyHelper.CalculateResidentialFirstHome(Convert.ToDouble(value));
                        residentialPropertyInfo.Add(new KeyValuePair<string, string>("Ownership", "No"));
                        StampDutyHelper.PrintTax(result);
                    }
                }
                else
                {
                    var nonresidentialPropertyInfo = new List<KeyValuePair<string, string>>();

                    Console.WriteLine("Non-Residential Property Value:");
                    var propertyValue = Convert.ToDouble(Console.ReadLine());
                    nonresidentialPropertyInfo.Add(new KeyValuePair<string, string>("Value", propertyValue.ToString(CultureInfo.InvariantCulture)));

                    Console.WriteLine("Is property Freehold? (1) Freehold (2) Leasehold ");
                    Console.WriteLine("(1) Freehold");
                    Console.WriteLine("(2) Leasehold");

                    var freehold = (Console.ReadLine() == "1");
                    if (freehold)
                    {
                        nonresidentialPropertyInfo.Add(new KeyValuePair<string, string>("Holding", "Freehold"));
                        var value = nonresidentialPropertyInfo.Find(x => x.Key == "Value").Value.ToString();
                        var result = StampDutyHelper.CalculateNonResidentialPropertyFreehold(Convert.ToDouble(value));
                        StampDutyHelper.PrintTax(result);
                    }
                    else
                    {
                        nonresidentialPropertyInfo.Add(new KeyValuePair<string, string>("Holding", "Leasehold"));
                        var value = nonresidentialPropertyInfo.Find(x => x.Key == "Value").Value.ToString();
                        var result = StampDutyHelper.CalculateNonResidentialPropertyLeasehold(Convert.ToDouble(value));
                        StampDutyHelper.PrintTax(result);
                    }
                }
                System.Console.WriteLine("Another Property...");
            }
        }
    }
}

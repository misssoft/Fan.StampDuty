using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace StampDutyCalculator.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                var price = GetInput();
                System.Console.WriteLine();
                CalculateFullStampDuty(price);
            }
        }

        private static double GetInput()
        {
            System.Console.WriteLine();
            System.Console.Write("Please input the price of your property: ");

            var input = System.Console.ReadLine();
            var result = 0.0;
            try
            {
                result = Convert.ToDouble(input);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex.Message);
                return 0;
            }

            if (result < 0)
            {
                System.Console.WriteLine($"The input is not a valid price");
                return 0;
            }

            return result;
        }

        private static void CalculateFullStampDuty(double price)
        {
            var calculator = new Lib.StampDutyCalculator();

            var bands = calculator.CalculateFullStampDuty(price);

            foreach (var band in calculator.Bands)
            {
                var maxValue = (band.MaxValue == Double.MaxValue)? "Max": band.MaxValue.ToString();
                System.Console.WriteLine($"Tax Band: {band.MinValue} - {maxValue}, Payable Sum: £ {band.PayableSum}, Percentage: {band.Percentage}, Tax: £ {band.Tax}");
            }

            System.Console.WriteLine($"============================================ The total stampduty to pay: £ {bands.Sum(x => x.Tax).ToString()}");
        }
    }
}

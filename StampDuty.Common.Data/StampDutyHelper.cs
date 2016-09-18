using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDuty.Common.Data
{
    public class StampDutyHelper
    {
        public static void PrintTax(IEnumerable<StampDutyBand> tax)
        {
            var stampDutyBands = tax as IList<StampDutyBand> ?? tax.ToList();
            foreach (var band in stampDutyBands)
            {
                System.Console.WriteLine(band.ToString());
            }
            System.Console.WriteLine($"================================= The total stampduty to pay =========== £ {stampDutyBands.Sum(x => x.Tax).ToString()}");
        }

        public static int GetInputFromConsole(int min, int max, string message)
        {
            Console.Write(message);
            string enteredValueString = Console.ReadLine();
            int value;
            while (!int.TryParse(enteredValueString, out value) || value < min || value > max)
            {
                Console.Write(message);
                enteredValueString = Console.ReadLine();
            }
            int enteredValue = Convert.ToInt32(enteredValueString);
            return enteredValue;
        }
    }
}

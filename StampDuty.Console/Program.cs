using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDuty.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                var price = 0.0;
                System.Console.WriteLine("Freehold or LeaseHold");
                System.Console.WriteLine("1. Freehold");
                System.Console.WriteLine("2. Leasehold");
                var isFreehold = System.Console.ReadLine();

                if (isFreehold == "1")
                #region FreeHold
                {
                    System.Console.WriteLine("Residential or Non-residential");
                    System.Console.WriteLine("1. Residential");
                    System.Console.WriteLine("2. Non-residential");
                    var isResidential = System.Console.ReadLine();

                    if (isResidential == "1")
                    {
                        #region Residential
                        System.Console.WriteLine("Transaction Date");
                        System.Console.WriteLine("1. After 01/04/2016");
                        System.Console.WriteLine("2. Before 01/04/2016");
                        var transactionDate = System.Console.ReadLine();

                        if (transactionDate == "1")
                        {
                        #region After2016
                            System.Console.WriteLine("Individual or Joined");
                            System.Console.WriteLine("1. Individual");
                            System.Console.WriteLine("2. Joined");
                            var isIndividual = System.Console.ReadLine();

                            if (isIndividual == "1")
                            {
                                #region Individual
                                System.Console.WriteLine("Second Home");
                                System.Console.WriteLine("1. Yes");
                                System.Console.WriteLine("2. No");
                                var isSecond = System.Console.ReadLine();

                                if (isSecond == "1")
                                {
                                    #region SecondHome
                                    System.Console.WriteLine("Replacing main property");
                                    System.Console.WriteLine("1. Yes");
                                    System.Console.WriteLine("2. No");
                                    var isReplacing = System.Console.ReadLine();

                                    if (isReplacing == "1")
                                    {
                                        #region replacingmainhome
                                        System.Console.WriteLine("Property Price:");
                                        price = Convert.ToDouble(System.Console.ReadLine());
                                        System.Console.WriteLine($"Price: {price}");
                                        System.Console.WriteLine($"Replacing main property: {isReplacing}");
                                        System.Console.WriteLine($"Second Home: {isSecond}");
                                        System.Console.WriteLine($"Individual: {isIndividual}");
                                        System.Console.WriteLine($"TransactionDate: {transactionDate}");
                                        System.Console.WriteLine($"Residential: {isResidential}");
                                        System.Console.WriteLine($"Freehold: {isFreehold}");
                                        #endregion
                                    }
                                    else
                                    {
                                        #region keepasSecond
                                        System.Console.WriteLine("Property Price:");
                                        price = Convert.ToDouble(System.Console.ReadLine());
                                        System.Console.WriteLine($"Price: {price}");
                                        System.Console.WriteLine($"Replacing main property: {isReplacing}");
                                        System.Console.WriteLine($"Second Home: {isSecond}");
                                        System.Console.WriteLine($"Individual: {isIndividual}");
                                        System.Console.WriteLine($"TransactionDate: {transactionDate}");
                                        System.Console.WriteLine($"Residential: {isResidential}");
                                        System.Console.WriteLine($"Freehold: {isFreehold}");
                                        #endregion
                                    }
                                    #endregion
                                }
                                else
                                {
                                    #region FirstTimeBuyer
                                    System.Console.WriteLine("Property Price:");
                                    price = Convert.ToDouble(System.Console.ReadLine());
                                    System.Console.WriteLine($"Price: {price}");
                                    System.Console.WriteLine($"Second Home: {isSecond}");
                                    System.Console.WriteLine($"Individual: {isIndividual}");
                                    System.Console.WriteLine($"TransactionDate: {transactionDate}");
                                    System.Console.WriteLine($"Residential: {isResidential}");
                                    System.Console.WriteLine($"Freehold: {isFreehold}");
                                    #endregion
                                }
                                #endregion
                            }
                            else
                            {
                                #region organisation
                                System.Console.WriteLine("Property Price:");
                                price = Convert.ToDouble(System.Console.ReadLine());
                                System.Console.WriteLine($"Price: {price}");
                                System.Console.WriteLine($"Individual: {isIndividual}");
                                System.Console.WriteLine($"TransactionDate: {transactionDate}");
                                System.Console.WriteLine($"Residential: {isResidential}");
                                System.Console.WriteLine($"Freehold: {isFreehold}");
                                #endregion
                            }
                            #endregion
                        }
                        else
                        {
                        #region Before2016
                            System.Console.WriteLine("Property Price:");
                            price = Convert.ToDouble(System.Console.ReadLine());
                            System.Console.WriteLine($"Price: {price}");
                            System.Console.WriteLine($"TransactionDate: {transactionDate}");
                            System.Console.WriteLine($"Residential: {isResidential}");
                            System.Console.WriteLine($"Freehold: {isFreehold}");
                            #endregion
                        }
                        #endregion
                    }
                    else
                    {
                        #region Non-Residential
                        System.Console.WriteLine("Property Price:");
                        price = Convert.ToDouble(System.Console.ReadLine());
                        System.Console.WriteLine($"Price: {price}");
                        System.Console.WriteLine($"Residential: {isResidential}");
                        System.Console.WriteLine($"Freehold: {isFreehold}");
                        #endregion   
                    }
                #endregion
                }
                else
                {
                #region Leasehold
                    System.Console.WriteLine("Property Price:");
                    price = Convert.ToDouble(System.Console.ReadLine());
                    System.Console.WriteLine($"Price: {price}");
                    System.Console.WriteLine($"Freehold: {isFreehold}");
                    #endregion
                }
                CalculateFullStampDuty(price);
                System.Console.ReadLine();
            }
        }

        private static void CalculateFullStampDuty(double price)
        {
            var calculator = new StampDutyCalculator.Lib.StampDutyCalculator();

            var bands = calculator.CalculateFullStampDuty(price);

            foreach (var band in calculator.Bands)
            {
                var maxValue = (band.MaxValue == Double.MaxValue) ? "Max" : band.MaxValue.ToString();
                System.Console.WriteLine($"Tax Band: {band.MinValue} - {maxValue}, Payable Sum: £ {band.PayableSum}, Percentage: {band.Percentage}, Tax: £ {band.Tax}");
            }

            System.Console.WriteLine($"============================================ The total stampduty to pay: £ {bands.Sum(x => x.Tax).ToString()}");
        }
    }
}


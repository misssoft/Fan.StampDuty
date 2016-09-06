namespace StampDuty.Console
{
    using System;
    public static class StampDutyComplex_V0
    {
        public static void Start() {
            while (true)
            {
                var price = 0.0;
                Console.WriteLine("Freehold or LeaseHold");
                Console.WriteLine("1. Freehold");
                Console.WriteLine("2. Leasehold");
                var isFreehold = Console.ReadLine();

                if (isFreehold == "1")
                #region FreeHold
                {
                    Console.WriteLine("Residential or Non-residential");
                    Console.WriteLine("1. Residential");
                    Console.WriteLine("2. Non-residential");
                    var isResidential = Console.ReadLine();

                    if (isResidential == "1")
                    {
                        #region Residential
                        Console.WriteLine("Transaction Date");
                        Console.WriteLine("1. After 01/04/2016");
                        Console.WriteLine("2. Before 01/04/2016");
                        var transactionDate = Console.ReadLine();

                        if (transactionDate == "1")
                        {
                            #region After2016
                            Console.WriteLine("Individual or Joined");
                            Console.WriteLine("1. Individual");
                            Console.WriteLine("2. Joined");
                            var isIndividual = Console.ReadLine();

                            if (isIndividual == "1")
                            {
                                #region Individual
                                Console.WriteLine("Second Home");
                                Console.WriteLine("1. Yes");
                                Console.WriteLine("2. No");
                                var isSecond = Console.ReadLine();

                                if (isSecond == "1")
                                {
                                    #region SecondHome
                                    Console.WriteLine("Replacing main property");
                                    Console.WriteLine("1. Yes");
                                    Console.WriteLine("2. No");
                                    var isReplacing = Console.ReadLine();

                                    if (isReplacing == "1")
                                    {
                                        #region replacingmainhome
                                        Console.WriteLine("Property Price:");
                                        price = Convert.ToDouble(Console.ReadLine());
                                        Console.WriteLine($"Price: {price}");
                                        Console.WriteLine($"Replacing main property: {isReplacing}");
                                        Console.WriteLine($"Second Home: {isSecond}");
                                        Console.WriteLine($"Individual: {isIndividual}");
                                        Console.WriteLine($"TransactionDate: {transactionDate}");
                                        Console.WriteLine($"Residential: {isResidential}");
                                        Console.WriteLine($"Freehold: {isFreehold}");
                                        #endregion
                                    }
                                    else
                                    {
                                        #region keepasSecond
                                        Console.WriteLine("Property Price:");
                                        price = Convert.ToDouble(Console.ReadLine());
                                        Console.WriteLine($"Price: {price}");
                                        Console.WriteLine($"Replacing main property: {isReplacing}");
                                        Console.WriteLine($"Second Home: {isSecond}");
                                        Console.WriteLine($"Individual: {isIndividual}");
                                        Console.WriteLine($"TransactionDate: {transactionDate}");
                                        Console.WriteLine($"Residential: {isResidential}");
                                        Console.WriteLine($"Freehold: {isFreehold}");
                                        #endregion
                                    }
                                    #endregion
                                }
                                else
                                {
                                    #region FirstTimeBuyer
                                    Console.WriteLine("Property Price:");
                                    price = Convert.ToDouble(Console.ReadLine());
                                    Console.WriteLine($"Price: {price}");
                                    Console.WriteLine($"Second Home: {isSecond}");
                                    Console.WriteLine($"Individual: {isIndividual}");
                                    Console.WriteLine($"TransactionDate: {transactionDate}");
                                    Console.WriteLine($"Residential: {isResidential}");
                                    Console.WriteLine($"Freehold: {isFreehold}");
                                    #endregion
                                }
                                #endregion
                            }
                            else
                            {
                                #region organisation
                                Console.WriteLine("Property Price:");
                                price = Convert.ToDouble(Console.ReadLine());
                                Console.WriteLine($"Price: {price}");
                                Console.WriteLine($"Individual: {isIndividual}");
                                Console.WriteLine($"TransactionDate: {transactionDate}");
                                Console.WriteLine($"Residential: {isResidential}");
                                Console.WriteLine($"Freehold: {isFreehold}");
                                #endregion
                            }
                            #endregion
                        }
                        else
                        {
                            #region Before2016
                            Console.WriteLine("Property Price:");
                            price = Convert.ToDouble(Console.ReadLine());
                            Console.WriteLine($"Price: {price}");
                            Console.WriteLine($"TransactionDate: {transactionDate}");
                            Console.WriteLine($"Residential: {isResidential}");
                            Console.WriteLine($"Freehold: {isFreehold}");
                            #endregion
                        }
                        #endregion
                    }
                    else
                    {
                        #region Non-Residential
                        Console.WriteLine("Property Price:");
                        price = Convert.ToDouble(Console.ReadLine());
                        Console.WriteLine($"Price: {price}");
                        Console.WriteLine($"Residential: {isResidential}");
                        Console.WriteLine($"Freehold: {isFreehold}");
                        #endregion   
                    }
                    #endregion
                }
                else
                {
                    #region Leasehold
                    Console.WriteLine("Property Price:");
                    price = Convert.ToDouble(Console.ReadLine());
                    Console.WriteLine($"Price: {price}");
                    Console.WriteLine($"Freehold: {isFreehold}");
                    #endregion
                }
                CalculateFullStampDuty(price);
                Console.ReadLine();
            }
        }

        private static void CalculateFullStampDuty(double price)
        {
            var random = new Random(100000);
            Console.WriteLine($"The StampDuty is: {random.Next()}");
        }
    }
}

using System;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace StampDutyService.Tests
{
    [TestFixture]
    public class SecondResidentialStampDutyServiceTests
    {
        [Test]
        public void SecondResidentialStampDutyService_Constructed_WithPrice()
        {
            
        }

        [TestCase(95000.0, 2850.0)]
        [TestCase(150000.0, 5000.0)]
        [TestCase(300000.0, 14000.0)]
        [TestCase(1000000.0, 73750.0)]
        [TestCase(2000000.0, 213750.0)]
        [TestCase(3000000.0, 363750.0)]
        public void SecondResidentialStampDutyService_Calculate_ReturnCorrectTax(double price, double expectedTax)
        {
          
        }

    }
}

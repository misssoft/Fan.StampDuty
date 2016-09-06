using System;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace StampDutyService.Tests
{
    [TestFixture]
    public class ResidentialStampDutyServiceTests
    {
        [Test]
        public void ResidentialStampDutyService_Constructed_WithPrice()
        {
           
        }

        [TestCase(95000.0, 0.0)]
        [TestCase(150000.0, 500.0)]
        [TestCase(300000.0, 5000.0)]
        [TestCase(1000000.0, 43750.0)]
        [TestCase(2000000.0, 153750.0)]
        [TestCase(3000000.0, 273750.0)]
        public void ResidentialStampDutyService_Calculate_ReturnCorrectTax(double price, double expectedTax)
        {
            //arrange
            
        }

    }
}

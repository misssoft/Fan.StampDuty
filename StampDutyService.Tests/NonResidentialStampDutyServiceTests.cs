using System;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace StampDutyService.Tests
{
    [TestFixture]
    public class NonResidentialStampDutyServiceTests
    {
        [Test]
        public void NonResidentialStampDutyService_Constructed_WithPrice()
        {
           
        }

        [TestCase(95000.0, 4750.0)]
        [TestCase(150000.0, 8250.0)]
        [TestCase(300000.0, 21250.0)]
        [TestCase(1000000.0, 95000.0)]
        [TestCase(2000000.0, 260000.0)]
        [TestCase(3000000.0, 440000.0)]
        public void NonResidentialStampDutyService_Calculate_ReturnCorrectTax(double price, double expectedTax)
        {
           
        }

    }
}

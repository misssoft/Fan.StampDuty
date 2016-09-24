using System;
using System.Linq;
using NUnit.Framework;

namespace StampDuty.PropertyService.Tests
{
    [TestFixture]
    public class NonResidentialPropertyTests
    {
        [TestCase(95000.0, 0.0)]
        [TestCase(150000.0, 0.0)]
        [TestCase(300000.0, 1000.0)]
        [TestCase(1000000.0, 30000.0)]
        [TestCase(2000000.0, 80000.0)]
        [TestCase(3000000.0, 130000.0)]
        public void CalculateTax_Return_CorrectTax(double price, double expectedTax)
        {
            //arrange
            var property = new NonResidentialProperty();
            property.Price = price;
            //act
            var band = property.CalculateStampDuty();
            var sum = band.Sum(x => x.Tax);
            //assert
            Assert.AreEqual(expectedTax,sum);
        }
    }
}

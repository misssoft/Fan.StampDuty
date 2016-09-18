using System;
using System.Linq;
using NUnit.Framework;

namespace StampDuty.PropertyService.Tests
{
    [TestFixture]
    public class ResidentialPropertyTests
    {
        [TestCase(95000.0, 0.0)]
        [TestCase(150000.0, 500.0)]
        [TestCase(300000.0, 5000.0)]
        [TestCase(1000000.0, 43750.0)]
        [TestCase(2000000.0, 153750.0)]
        [TestCase(3000000.0, 273750.0)]
        public void CalculateTax_Return_CorrectTax(double price, double expectedTax)
        {
            //arrange
            var property = new ResidentialProperty();
            property.Price = price;
            //act
            var band = property.CalculateStampDuty();
            var sum = band.Sum(x => x.Tax);
            //assert
            Assert.AreEqual(expectedTax, sum);
        }
    }
}

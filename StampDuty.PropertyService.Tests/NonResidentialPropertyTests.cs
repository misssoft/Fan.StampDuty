using System;
using System.Linq;
using NUnit.Framework;

namespace StampDuty.PropertyService.Tests
{
    [TestFixture]
    public class NonResidentialPropertyTests
    {
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

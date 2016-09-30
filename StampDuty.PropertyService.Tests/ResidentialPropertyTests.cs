using System;
using System.Linq;
using NUnit.Framework;

namespace StampDuty.PropertyService.Tests
{
    [TestFixture]
    public class ResidentialPropertyTests
    {
        [TestCase(0.0, false, 0.0)]
        [TestCase(125000.0, false, 0.0)]
        [TestCase(150000.0, false, 500.0)]
        [TestCase(300000.0, false, 5000.0)]
        [TestCase(500000.0, false, 15000.0)]
        [TestCase(1000000.0, false, 43750.0)]
        [TestCase(2000000.0, false, 153750.0)]
        [TestCase(3000000.0, false, 273750.0)]
        [TestCase(5000000.0, false, 513750.0)]
        [TestCase(95000.0, true, 2850.0)]
        [TestCase(150000.0, true, 5000.0)]
        [TestCase(300000.0, true, 14000.0)]
        [TestCase(500000.0, true, 30000.0)]
        [TestCase(1000000.0, true, 73750.0)]
        [TestCase(2000000.0, true, 213750.0)]
        [TestCase(3000000.0, true, 363750.0)]
        [TestCase(5000000.0, true, 663750.0)]
        public void CalculateTax_Return_CorrectTax(double price, bool additionalProperty, double expectedTax)
        {
            //arrange
            var property = new ResidentialProperty
            {
                Price = price,
                IsAdditionalProperty = additionalProperty
            };
            //act
            var band = property.CalculateStampDuty();
            var sum = band.Sum(x => x.Tax);
            //assert
            Assert.AreEqual(expectedTax, sum);
        }

        [TestCase(0.0, 0.0)]
        [TestCase(125000.0, 0.0)]
        [TestCase(250000.0, 2500.0)]
        [TestCase(300000.0, 5000.0)]
        [TestCase(500000.0, 15000.0)]
        [TestCase(1000000.0, 43750.0)]
        [TestCase(2000000.0, 153750.0)]
        [TestCase(3000000.0, 273750.0)]
        public void CalculateTaxProcedure_Return_CorrectTax(double price, double expectedTax)
        {
            //arrange
            //act
            var tax = StampDutyCalculator.CalculateResidential(price);
            //assert
            Assert.AreEqual(expectedTax, tax);
        }

        [TestCase(0.0, false, 0.0)]
        [TestCase(125000.0, false, 0.0)]
        [TestCase(150000.0, false,500.0)]
        [TestCase(300000.0, false, 5000.0)]
        [TestCase(500000.0, false, 15000.0)]
        [TestCase(1000000.0, false, 43750.0)]
        [TestCase(2000000.0, false, 153750.0)]
        [TestCase(3000000.0, false,273750.0)]
        [TestCase(5000000.0,false, 513750.0)]
        [TestCase(95000.0, true, 2850.0)]
        [TestCase(150000.0, true, 5000.0)]
        [TestCase(300000.0, true, 14000.0)]
        [TestCase(500000.0, true, 30000.0)]
        [TestCase(1000000.0, true, 73750.0)]
        [TestCase(2000000.0, true, 213750.0)]
        [TestCase(3000000.0, true, 363750.0)]
        [TestCase(5000000.0, true, 663750.0)]
        public void CalculateTaxProcedureWithRate_Return_CorrectTax(double price, bool highrate,double expectedTax)
        {
            //arrange
            //act
            var tax = StampDutyCalculator.CalculateResidentialwithRate(price, highrate);
            //assert
            Assert.AreEqual(expectedTax, tax);
        }
    }
}

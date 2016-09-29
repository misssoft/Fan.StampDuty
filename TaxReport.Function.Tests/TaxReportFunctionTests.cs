using System;
using System.Collections.Generic;
using NUnit.Framework;
using TaxReport.Common;

//using NUnit.Framework;

namespace TaxReport.Function.Tests
{
    [TestFixture]
    public class TaxReportFunctionTests
    {
        [Test]
        public void GenerateBatchReport_Create_Reports()
        {
            // arrange
            var expectedCustomer = new Taxpayer("test@test.com");
            var expectedReportBody = "the report body";

            Func<IEnumerable<Taxpayer>> getCustomersForCustomerReport = () => new[] { expectedCustomer };

            Func<Taxpayer, Report> createCustomerReport = customer => new Report(expectedCustomer.TaxPayerEmail, expectedReportBody);

            var actualToAddress = "";
            var actualBody = "";

            Action<string, string> sendEmail = (toAddress, body) =>
            {
                actualToAddress = toAddress;
                actualBody = body;
            };

            // act
            TaxReportFunction.RunCustomerReportBatch(getCustomersForCustomerReport, createCustomerReport, sendEmail);

            // assert
            Assert.AreEqual(expectedCustomer.TaxPayerEmail, actualToAddress);
            Assert.AreEqual(expectedReportBody, actualBody);
        }
    }
}
using System;
using NUnit.Framework;
using Rhino.Mocks;
using TaxReport.Common;

namespace TaxReport.Service.Tests
{
    [TestFixture]
    public class ReportingServiceTests
    {
        [Test]
        public void GenerateBatchReport_Create_Reports()
        {
            // Arrange
            var taxpayersMock = MockRepository.GenerateMock<ITaxpayers>();
            var reportGeneratorMock = MockRepository.GenerateMock<IReportGenerator>();
            var emailerMock = MockRepository.GenerateMock<IEmailer>();

            var expectedTaxpayer = new Taxpayer("fist@sea.com");
            var expectedReportSummary = "Report summary";

            taxpayersMock.Stub(x => x.GetTaxPayerForTaxReport()).Return(new[] {expectedTaxpayer});

            reportGeneratorMock.Stub(x => x.GenerateTaxReport(expectedTaxpayer))
                .Return(new Report(expectedTaxpayer.TaxPayerEmail, expectedReportSummary));
            
            //Act
            var service = new ReportingService(taxpayersMock,reportGeneratorMock,emailerMock);

            // Act
            service.GenerateBatchReport();

            // Assert
            emailerMock.AssertWasCalled(x=>x.Send(expectedTaxpayer.TaxPayerEmail,expectedReportSummary));
        }
    }
}
namespace StampDuty.PropertyService
{
    using Common.Data;
    public class NonResidentialProperty : PropertyBase
    {
       protected override StampDutyBand[] GetBands()
        {
            if (IsFreehold)
            return new StampDutyBand[3]{
                     new StampDutyBand() {MinValue = 0.0, MaxValue = 150000.0, Percentage=0.0 },
                     new StampDutyBand() {MinValue = 150000.0, MaxValue = 250000, Percentage=0.02 },
                     new StampDutyBand() {MinValue = 250000.0, MaxValue = double.MaxValue, Percentage=0.05 }
            };
            return new StampDutyBand[3]
            {
                new StampDutyBand() {MinValue = 0.0, MaxValue = 250000.0, Percentage=0.0 },
                new StampDutyBand() {MinValue = 250000.0, MaxValue = 500000, Percentage=0.02 },
                new StampDutyBand() {MinValue = 500000.0, MaxValue = double.MaxValue, Percentage=0.05 }
            };
        }
    }
}

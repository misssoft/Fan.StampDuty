namespace StampDuty.PropertyService
{
    using Common.Data;
    public class ResidentialProperty : PropertyBase
    {
        public bool IsJoinedOwned { get; set; }

        public bool IsAdditionalProperty { get; set; }

        public ResidentialProperty()
        {
            IsJoinedOwned = false;
            IsAdditionalProperty = false;
        }

        protected override StampDutyBand[] GetBands()
        {
            if (IsAdditionalProperty)

                return new StampDutyBand[5]{
                     new StampDutyBand() { MinValue = 0.0, MaxValue = 125000.0, Percentage = 0.03 },
                     new StampDutyBand() { MinValue = 125000.0, MaxValue = 250000, Percentage = 0.05 },
                     new StampDutyBand() { MinValue = 250000.0, MaxValue = 925000.0, Percentage = 0.08 },
                     new StampDutyBand() { MinValue = 925000.0, MaxValue = 1500000.0, Percentage = 0.13 },
                     new StampDutyBand() { MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage = 0.15 }};

            return new StampDutyBand[5]{
                new StampDutyBand() {MinValue = 0.0, MaxValue = 125000.0, Percentage=0.0 },
                new StampDutyBand() {MinValue = 125000.0, MaxValue = 250000, Percentage=0.02 },
                new StampDutyBand() {MinValue = 250000.0, MaxValue = 925000.0, Percentage=0.05 },
                new StampDutyBand() {MinValue = 925000.0, MaxValue = 1500000.0, Percentage=0.10 },
                new StampDutyBand() {MinValue = 1500000.0, MaxValue = double.MaxValue, Percentage=0.12 }};
        }
    }
}

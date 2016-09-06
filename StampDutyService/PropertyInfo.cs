using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StampDutyService
{
    public class PropertyInfo
    {
        public double Price { get; set; }

        public bool IsFreehold { get; set; }

        public PropertyInfo (double price, bool isFreehold)
        {
            Price = price;
            IsFreehold = isFreehold;
        }
    }

    public class NonResidentailPropertyInfo : PropertyInfo
    {
        public NonResidentailPropertyInfo(double price, bool isFreehold) : base(price, isFreehold)
        {
        }
    }

    public class ResidentailPropertyInfo : PropertyInfo
    {
        public bool IsJoinedOwned { get; set; }

        public ResidentailPropertyInfo(double price, bool isFreehold, bool isJoinedOwned) : base(price, isFreehold)
        {
            IsJoinedOwned = isJoinedOwned;
        }
    }

    
}

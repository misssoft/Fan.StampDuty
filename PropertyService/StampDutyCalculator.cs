using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StampDuty.Common.Data;

namespace StampDuty.PropertyService {
    public static class StampDutyCalculator {
        public static double CalculateResidential(double price) {
            var tax = 0.0;
            if (price > 125000) {
                price = price - 125000;
                if (price > 125000) {
                    tax = tax + 125000 * 0.02;
                    price = price - 125000;
                    if (price > 675000) {
                        tax = tax + 675000 * 0.05;
                        price = price - 675000;

                        if (price > 575000) {
                            tax = tax + 575000 * 0.1;
                            price = price - 575000;
                            if (price > 0) {
                                tax = tax + price * 0.12;
                            }
                        }
                        else {
                            tax = tax + price * 0.1;
                        }
                    }
                    else {
                        tax = tax + price * 0.05;
                    }
                }
                else {
                    tax = tax + price * 0.02;
                }
            }
            else {
                return tax;
            }
            return tax;
        }

        public static double CalculateResidentialwithRate(double price, bool highrate) {
            var tax = 0.0;
            if (price > 125000) {
                if (highrate) {
                    tax = tax + 125000 * 0.03;
                }
                price = price - 125000;
                if (price > 125000) {
                    if (highrate) {
                        tax = tax + 125000 * 0.05;
                    }
                    else {
                        tax = tax + 125000 * 0.02;
                    }
                    price = price - 125000;
                    if (price > 675000) {
                        if (highrate) {
                            tax = tax + 675000 * 0.08;
                        }
                        else {
                            tax = tax + 675000 * 0.05;
                        }
                        price = price - 675000;

                        if (price > 575000) {
                            if (highrate) {
                                tax = tax + 575000 * 0.13;
                            }
                            else {
                                tax = tax + 575000 * 0.1;
                            }
                            price = price - 575000;
                            if (price > 0) {
                                if (highrate) {
                                    tax = tax + price * 0.15;
                                }
                                else {
                                    tax = tax + price * 0.12;
                                }
                            }
                        }
                        else {
                            if (highrate) {
                                tax = tax + price * 0.13;
                            }
                            else {
                                tax = tax + price * 0.1;
                            }
                        }
                    }
                    else {
                        if (highrate) {
                            tax = tax + price * 0.08;
                        }
                        else {
                            tax = tax + price * 0.05;
                        }
                    }
                }
                else {
                    if (highrate) {
                        tax = tax + price * 0.05;
                    }
                    else {
                        tax = tax + price * 0.02;
                    }
                }
            }
            else {
                if (highrate) {
                    tax = tax + price * 0.03;
                }
                return tax;
            }
            return tax;
        }
    }
}

! function (e) {
    function t(r) {
        if (a[r]) return a[r].exports;
        var n = a[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }
    var a = {};
    return t.m = e, t.c = a, t.p = "", t(0)
}([function (e, t, a) {
    e.exports = a(1)
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(2);
        a(4), window.name = "NG_DEFER_BOOTSTRAP!", e.element().ready(function () {
            e.bootstrap(document, ["calc"])
        })
    }()
}, function (e, t, a) {
    ! function () {
        this.__angular_wrapper_loaded__ || (this.__angular_wrapper_loaded__ = !0, a(3)), e.exports = angular
    }()
}, function (e, t) {
    e.exports = angular
}, function (e, t, a) {
    ! function () {
        "use strict";
        var t = a(2);
        a(5), a(8), a(33), a(52), e.exports = t.module("calc", ["calc.services", "calc.routes", "calc.filters", "calc.controllers", "calc-templates"])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        a(6)
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(7);
        e.config(["$routeProvider", function (e) {
            e.when("/intro", {
                title: "Calculate Stamp Duty Land Tax (SDLT)",
                templateUrl: "intro.html",
                controller: "introController",
                reloadOnSearch: !1
            }).when("/holding", {
                title: "Freehold or leasehold",
                templateUrl: "holding.html",
                controller: "holdingController",
                reloadOnSearch: !1
            }).when("/property", {
                title: "Residential or non-residential",
                templateUrl: "property.html",
                controller: "propertyController",
                reloadOnSearch: !1
            }).when("/date", {
                title: "Effective date of transaction",
                templateUrl: "date.html",
                controller: "dateController",
                reloadOnSearch: !1
            }).when("/purchase-price", {
                title: "Purchase price",
                templateUrl: "purchase-price.html",
                controller: "purchasePriceController",
                reloadOnSearch: !1
            }).when("/purchaser", {
                title: "Status of purchaser",
                templateUrl: "purchaser.html",
                controller: "purchaserController",
                reloadOnSearch: !1
            }).when("/additional-property", {
                title: "Additional residential properties",
                templateUrl: "additional-property.html",
                controller: "additionalPropertyController",
                reloadOnSearch: !1
            }).when("/lease-dates", {
                title: "Lease dates",
                templateUrl: "lease-dates.html",
                controller: "leaseDatesController",
                reloadOnSearch: !1
            }).when("/premium", {
                title: "Lease premium",
                templateUrl: "premium.html",
                controller: "premiumController",
                reloadOnSearch: !1
            }).when("/rent", {
                title: "Rent",
                templateUrl: "rent.html",
                controller: "rentController",
                reloadOnSearch: !1
            }).when("/exchange-contracts", {
                title: "Exchange of contracts",
                templateUrl: "exchange-contracts.html",
                controller: "exchangeContractsController",
                reloadOnSearch: !1
            }).when("/relevant-rent", {
                title: "Relevant rental figure",
                templateUrl: "relevant-rent.html",
                controller: "relevantRentController",
                reloadOnSearch: !1
            }).when("/summary", {
                title: "Check your answers",
                templateUrl: "summary.html",
                controller: "summaryController",
                reloadOnSearch: !1
            }).when("/result", {
                title: "Result",
                templateUrl: "result.html",
                controller: "resultController",
                reloadOnSearch: !1
            }).when("/detail", {
                title: "Detailed calculation",
                templateUrl: "detail.html",
                controller: "detailController",
                reloadOnSearch: !1
            }).when("/print", {
                title: "Summary",
                templateUrl: "print.html",
                controller: "printController",
                reloadOnSearch: !1
            }).otherwise({
                redirectTo: "/intro"
            })
        }]), e.run(["$rootScope", function (e) {
            e.$on("$routeChangeSuccess", function (t, a, r) {
                void 0 !== a.$$route && (e.title = a.$$route.title)
            })
        }])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var t = a(2);
        e.exports = t.module("calc.routes", ["ngRoute"])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        a(9), a(11), a(13), a(14), a(16), a(17), a(19), a(21), a(22), a(23), a(24), a(25), a(26), a(27), a(29), a(31), a(32)
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t) {
                var a = !1;
                e.jumpTo = function (e) {
                    var t = "#" + e;
                    $(t).focus()
                }, e.optionalHelp = {}, e.toggleHelp = function (a, r) {
                    var n = e.optionalHelp[a] || !1,
                        i = n ? "hide" : "show";
                    e.optionalHelp[a] = !n, t.logEvent("help", i, r)
                }, e.displayHelp = function (t) {
                    return e.optionalHelp[t]
                }, e.getHelpGA = function () {
                    var e = a ? "hide" : "show";
                    t.logEvent("getHelp", e, "/calculate-stamp-duty-land-tax/" + document.location.href.split("/").pop()), a = !a
                }, e.addFocusToLabel = function () {
                    var e = $(this).closest("label")[0];
                    $(e).addClass("add-focus selected")
                }, e.removeFocusFromLabel = function () {
                    $(this).closest("label").removeClass("add-focus"), $(this).is(":checked") || $(this).closest("label").removeClass("selected")
                }, e.toggleFocus = function () {
                    "radio" === $(this).attr("type") && $(this).closest("label").siblings().removeClass("add-focus selected"), $(this).closest("label").toggleClass("add-focus selected", $(this).prop("checked"))
                }, $("#main").on("focus click", "label.block-label input[type=radio], label.block-label input[type=checkbox]", e.addFocusToLabel).on("change", "label.block-label input[type=radio], label.block-label input[type=checkbox]", e.toggleFocus).on("blur", "label.block-label input[type=radio], label.block-label input[type=checkbox]", e.removeFocusFromLabel)
            };
        e.controller("mainController", ["$scope", "loggingService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var t = a(2);
        e.exports = t.module("calc.controllers", [])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = a(12);
                d(e, t, r, "additional-property", n, i, o), e.beforeUpdateModel = function () {
                    "No" === e.data.twoOrMoreProperties ? l.logEvent("decision", "submit", "AdditonalProperty.SingleProperty") : "Yes" === e.data.replaceMainResidence ? l.logEvent("decision", "submit", "AdditonalProperty.MultiplePoperties.MainResidence") : l.logEvent("decision", "submit", "AdditonalProperty.MultiplePoperties.NotMainResidence")
                }
            };
        e.controller("additionalPropertyController", ["$scope", "$location", "$anchorScroll", "dataService", "additionalPropertyValidationService", "navigationService", "loggingService", t])
    }()
}, function (e, t) {
    ! function () {
        "use strict";
        e.exports = function (e, t, a, r, n, i, o) {
            o.logView(r), e.data = n.getModel(), e.state = {
                isValid: !0,
                hasError: function () {
                    return ""
                }
            }, e.jumpTo = function (e) {
                t.hash() !== e && t.hash(e), a(), $("#" + e).focus()
            }, $("#pageErrors").hide(), e.submit = function () {
                e.state = i.validate(e.data), e.state.isValid ? (angular.isDefined(e.beforeUpdateModel) && e.beforeUpdateModel(), n.updateModel(e.data), o.next(r, e.data, t)) : $("#pageErrors").show().focus()
            }
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = a(12);
                d(e, t, r, "exchange-contracts", n, i, o), e.beforeUpdateModel = function () {
                    "No" === e.data.contractPre201603 ? l.logEvent("decision", "submit", "ExchangeContracts.Post20160316") : "Yes" === e.data.contractVariedPost201603 ? l.logEvent("decision", "submit", "ExchangeContracts.Pre20160317.VariedAfter") : l.logEvent("decision", "submit", "ExchangeContracts.Pre20160317.NotVariedAfter")
                }
            };
        e.controller("exchangeContractsController", ["$scope", "$location", "$anchorScroll", "dataService", "exchangeContractsValidationService", "navigationService", "loggingService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(12);
                l(e, t, r, "date", n, i, o);
                var d = a(15);
                e.updateEffectiveDate = function () {
                    e.data.effectiveDate = d.parseUIDate(e.data.effectiveDateYear, e.data.effectiveDateMonth, e.data.effectiveDateDay)
                }
            };
        e.controller("dateController", ["$scope", "$location", "$anchorScroll", "dataService", "dateValidationService", "navigationService", t])
    }()
}, function (e, t) {
    ! function () {
        "use strict";

        function t(e, t, a, r) {
            var n, i, o = /^\d{4}$/;
            return n = isNaN(e), i = "Invalid Date" == e, n || i ? !1 : o.test(t) ? e.getFullYear() === parseInt(t) && e.getMonth() === parseInt(a) - 1 && e.getDate() === parseInt(r) : !1
        }
        var a = function (e, a, r) {
            var n, i;
            return e = e || "empty", a = a || "empty", r = r || "empty", n = e + a + r, "emptyemptyempty" === n ? "" : (i = new Date(e, a - 1, r), t(i, e, a, r) ? i : "bad date")
        },
            r = function (e, t, a) {
                function r(e, t) {
                    var a = new Date(e.getFullYear() + t, e.getMonth(), e.getDate());
                    return a.setDate(a.getDate() - 1), a
                }
                var n = t;
                e > t && (n = e);
                var i = a,
                    o = 0,
                    l = 0,
                    d = 0;
                o = 1;
                for (var s = r(n, o) ; i >= s;) o++, s = r(n, o);
                for (o--, l = 1, s = r(n, o), s.setDate(s.getDate() + 1) ; i >= s;) l += 1, s.setDate(s.getDate() + 1);
                if (l--, l > 0) {
                    var c = r(n, o + 1);
                    for (s = r(n, o), d = 1, s.setDate(s.getDate() + 1) ; c >= s;) d += 1, s.setDate(s.getDate() + 1);
                    d--
                }
                var u = {
                    years: o,
                    days: l,
                    daysInPartialYear: d
                };
                return u
            };
        e.exports = {
            parseUIDate: a,
            calculateTermOfLease: r
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = a(12);
                d(e, t, r, "holding", n, i, o), e.beforeUpdateModel = function () {
                    l.logEvent("decision", "submit", e.data.holdingType)
                }
            };
        e.controller("holdingController", ["$scope", "$location", "$anchorScroll", "dataService", "holdingValidationService", "navigationService", "loggingService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i) {
                var o = a(18);
                o(e, t, r, "intro", n, i), e.startNow = function () {
                    n.updateModel({}), i.startNow(t)
                }
            };
        e.controller("introController", ["$scope", "$location", "$anchorScroll", "dataService", "navigationService", t])
    }()
}, function (e, t) {
    ! function () {
        "use strict";
        e.exports = function (e, t, a, r, n, i) {
            i.logView(r), e.data = n.getModel(), e.jumpTo = function (e) {
                t.hash() !== e && t.hash(e), a(), $("#" + e).focus()
            }, e.submit = function () {
                i.next(r, e.data, t)
            }
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                function l(t) {
                    t.displayYearOneRent || (e.data.year1Rent = void 0), t.displayYearTwoRent || (e.data.year2Rent = void 0), t.displayYearThreeRent || (e.data.year3Rent = void 0), t.displayYearFourRent || (e.data.year4Rent = void 0), t.displayYearFiveRent || (e.data.year5Rent = void 0)
                }
                var d = a(12);
                d(e, t, r, "lease-dates", n, i, o);
                var s = a(15);
                e.updateStartDate = function () {
                    e.data.startDate = s.parseUIDate(e.data.startDateYear, e.data.startDateMonth, e.data.startDateDay)
                }, e.updateEndDate = function () {
                    e.data.endDate = s.parseUIDate(e.data.endDateYear, e.data.endDateMonth, e.data.endDateDay)
                };
                var c = a(20);
                e.beforeUpdateModel = function () {
                    e.data.leaseTerm = s.calculateTermOfLease(e.data.effectiveDate, e.data.startDate, e.data.endDate);
                    var t = c().getFunctions(e.data);
                    l(t)
                }
            };
        e.controller("leaseDatesController", ["$scope", "$location", "$anchorScroll", "dataService", "leaseDatesValidationService", "navigationService", t])
    }()
}, function (e, t) {
    ! function () {
        "use strict";
        e.exports = function () {
            var e = function (e) {
                return void 0 !== e.holdingType && "Leasehold" === e.holdingType && void 0 !== e.leaseTerm
            },
                t = function (t) {
                    var a = e(t),
                        r = e(t) && (t.leaseTerm.years > 1 || 1 == t.leaseTerm.years && t.leaseTerm.days > 0),
                        n = e(t) && (t.leaseTerm.years > 2 || 2 == t.leaseTerm.years && t.leaseTerm.days > 0),
                        i = e(t) && (t.leaseTerm.years > 3 || 3 == t.leaseTerm.years && t.leaseTerm.days > 0),
                        o = e(t) && (t.leaseTerm.years > 4 || 4 == t.leaseTerm.years && t.leaseTerm.days > 0);
                    return {
                        displayYearOneRent: a,
                        displayYearTwoRent: r,
                        displayYearThreeRent: n,
                        displayYearFourRent: i,
                        displayYearFiveRent: o
                    }
                },
                a = function (e) {
                    var a = t(e.data);
                    e.displayYearOneRent = a.displayYearOneRent, e.displayYearTwoRent = a.displayYearTwoRent, e.displayYearThreeRent = a.displayYearThreeRent, e.displayYearFourRent = a.displayYearFourRent, e.displayYearFiveRent = a.displayYearFiveRent
                };
            return {
                getFunctions: t,
                addFunctionsToScope: a
            }
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(12);
                l(e, t, r, "premium", n, i, o), "Residential" === e.data.propertyType ? e.showPremiumHelp = !0 : "Non-residential" === e.data.propertyType && e.data.effectiveDate >= new Date(2016, 2, 17) ? e.showPremiumHelp = !0 : e.showPremiumHelp = !1
            };
        e.controller("premiumController", ["$scope", "$location", "$anchorScroll", "dataService", "premiumValidationService", "navigationService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = a(12);
                d(e, t, r, "property", n, i, o), e.beforeUpdateModel = function () {
                    l.logEvent("decision", "submit", e.data.holdingType + "." + e.data.propertyType)
                }
            };
        e.controller("propertyController", ["$scope", "$location", "$anchorScroll", "dataService", "propertyValidationService", "navigationService", "loggingService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(12);
                l(e, t, r, "purchase-price", n, i, o)
            };
        e.controller("purchasePriceController", ["$scope", "$location", "$anchorScroll", "dataService", "purchasePriceValidationService", "navigationService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = a(12);
                d(e, t, r, "purchaser", n, i, o), e.beforeUpdateModel = function () {
                    l.logEvent("decision", "submit", e.data.purchaserType)
                }
            };
        e.controller("purchaserController", ["$scope", "$location", "$anchorScroll", "dataService", "purchaserValidationService", "navigationService", "loggingService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(12);
                l(e, t, r, "relevant-rent", n, i, o)
            };
        e.controller("relevantRentController", ["$scope", "$location", "$anchorScroll", "dataService", "relevantRentValidationService", "navigationService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(12);
                l(e, t, r, "rent", n, i, o);
                var d = a(20);
                d = d(), d.addFunctionsToScope(e), e.displayYearOneRent || t.path("summary")
            };
        e.controller("rentController", ["$scope", "$location", "$anchorScroll", "dataService", "rentValidationService", "navigationService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = a(18);
                d(e, t, r, "result", n, o), e.viewDetails = function (a, r) {
                    e.data.resultIndex = a, e.data.taxCalcIndex = r, n.updateModel(e.data), o.viewDetails(e.data, t)
                }, e.printView = function () {
                    o.printView(e.data, t)
                }, e.effDateOnOrAfter = function (t) {
                    return e.data.effectiveDate >= t
                }, e.isAdditionalProperty = function () {
                    return "Yes" === e.data.twoOrMoreProperties && "No" === e.data.replaceMainResidence
                };
                var s = a(28)(),
                    c = s.checkAllRentsBelow2000(e.data),
                    u = !1,
                    p = a(20);
                if (p = p().getFunctions(e.data), i.validate(e.data).isModelValid) {
                    var f = {};
                    if ("Freehold" === e.data.holdingType) f = "Residential" === e.data.propertyType ? e.effDateOnOrAfter(new Date(2016, 3, 1)) && "Yes" === e.data.individual && e.isAdditionalProperty() ? l.calcFreeResPremAddProp_201604_Undef(e.data.premium, !0) : e.effDateOnOrAfter(new Date(2016, 3, 1)) && "No" === e.data.individual ? l.calcFreeResPremAddProp_201604_Undef(e.data.premium, !1) : e.effDateOnOrAfter(new Date(2014, 11, 4)) ? l.calcFreeResPrem_201412_Undef(e.data.premium) : l.calcFreeResPrem_201203_201412(e.data.premium) : e.effDateOnOrAfter(new Date(2016, 2, 17)) ? l.calcFreeNonResPrem_201603_Undef(e.data.premium) : l.calcFreeNonResPrem_201203_201603(e.data.premium);
                    else {
                        var v = [parseFloat(e.data.year1Rent), p.displayYearTwoRent ? parseFloat(e.data.year2Rent) : 0, p.displayYearThreeRent ? parseFloat(e.data.year3Rent) : 0, p.displayYearFourRent ? parseFloat(e.data.year4Rent) : 0, p.displayYearFiveRent ? parseFloat(e.data.year5Rent) : 0],
                            h = l.calculateNPV(e.data.leaseTerm.years, e.data.leaseTerm.days, e.data.leaseTerm.daysInPartialYear, v);
                        if (e.data.npv = h, "Residential" === e.data.propertyType) f = e.effDateOnOrAfter(new Date("April 1, 2016")) && "Yes" === e.data.individual && e.isAdditionalProperty() ? l.calcLeaseResPremAndRentAddProp_201604_Undef(e.data.premium, e.data.npv, !0) : e.effDateOnOrAfter(new Date("April 1, 2016")) && "No" === e.data.individual ? l.calcLeaseResPremAndRentAddProp_201604_Undef(e.data.premium, e.data.npv, !1) : e.effDateOnOrAfter(new Date("December 4, 2014")) ? l.calcLeaseResPremAndRent_201412_Undef(e.data.premium, e.data.npv) : l.calcLeaseResPremAndRent_201203_201412(e.data.premium, e.data.npv);
                        else {
                            var m = !1;
                            e.data.premium < 15e4 && c && e.data.relevantRent < 1e3 && (m = !0), e.effDateOnOrAfter(new Date("March 17, 2016")) ? ((e.data.premium >= 15e4 || !c || c && "Yes" === e.data.contractPre201603 && "No" === e.data.contractVariedPost201603) && (u = !0), f = l.calcLeaseNonResPremAndRent_201603_Undef(e.data.premium, e.data.npv, m, u)) : f = l.calcLeaseNonResPremAndRent_201203_201603(e.data.premium, e.data.npv, m)
                        }
                    }
                    e.data.result = f, n.updateModel(e.data)
                } else t.path("summary")
            };
        e.controller("resultController", ["$scope", "$location", "$anchorScroll", "dataService", "modelValidationService", "navigationService", "calculationService", t])
    }()
}, function (e, t) {
    ! function () {
        "use strict";
        e.exports = function () {
            var e = /^[0-9]+$/,
                t = /^(\d+)?([.]?\d{0,2})?$/,
                a = /^-?[0-9]+(\.[0-9]{0,2})?$/,
                r = function (e) {
                    return !n(e)
                },
                n = function (e) {
                    return "" === e || void 0 === e || e.length < 1
                },
                i = function (e) {
                    return isNaN(e)
                },
                o = function (t) {
                    return isNaN(t) || !t.match(e)
                },
                l = function (e) {
                    return isNaN(e) || !e.match(t)
                },
                d = function (e) {
                    return isNaN(e) || !e.match(a)
                },
                s = function (e) {
                    return parseFloat(e).toFixed(1) != parseFloat(e)
                },
                c = function (e) {
                    return parseFloat(e).toFixed(2) != parseFloat(e)
                },
                u = function (e) {
                    return "bad date" === e
                },
                p = function (e, t, a) {
                    return parseInt(e) < parseInt(t) || parseInt(e) > parseInt(a)
                },
                f = function (e, t, a) {
                    return parseFloat(e) < parseFloat(t) || parseFloat(e) > parseFloat(a)
                },
                v = function (e, t) {
                    return parseInt(e) < parseInt(t)
                },
                h = function (e, t) {
                    return parseFloat(e) < parseFloat(t)
                },
                m = function (e, t) {
                    return new Date(e) < new Date(t)
                },
                y = function (e, t) {
                    return new Date(e) >= new Date(t)
                },
                D = function (e, t) {
                    return parseInt(e) > parseInt(t)
                },
                g = function (e, t) {
                    return parseFloat(e) > parseFloat(t)
                },
                x = function (e) {
                    return e.year1Rent >= 2e3 ? !1 : e.year2Rent >= 2e3 ? !1 : e.year3Rent >= 2e3 ? !1 : e.year4Rent >= 2e3 ? !1 : !(e.year5Rent >= 2e3)
                };
            return {
                isPopulated: r,
                isNotPopulated: n,
                isNotANumber: i,
                isInvalidInteger: o,
                isInvalidFloat: l,
                isInvalidPosOrNegFloat: d,
                isInvalidFloatOneDecimal: s,
                isInvalidFloatTwoDecimal: c,
                isInvalidParsedDate: u,
                isOutsideIntegerRange: p,
                isOutsideFloatRange: f,
                isLessThanInteger: v,
                isLessThanFloat: h,
                isLessThanDate: m,
                isGreaterThanOrEqualToDate: y,
                isGreaterThanInteger: D,
                isGreaterThanFloat: g,
                checkAllRentsBelow2000: x
            }
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o, l) {
                var d = (a(28)(), a(18));
                d(e, t, r, "summary", n, o);
                var s = a(20);
                s = s(), s.addFunctionsToScope(e);
                var c = parseFloat("0");
                e.displayYearOneRent && c < parseFloat(e.data.year1Rent) && (c = e.data.year1Rent), e.displayYearTwoRent && c < parseFloat(e.data.year2Rent) && (c = e.data.year2Rent), e.displayYearThreeRent && c < parseFloat(e.data.year3Rent) && (c = e.data.year3Rent), e.displayYearFourRent && c < parseFloat(e.data.year4Rent) && (c = e.data.year4Rent), e.displayYearFiveRent && c < parseFloat(e.data.year5Rent) && (c = e.data.year5Rent), e.data.highestRent = c, e.validatedModel = i.validate(e.data);
                var u = a(30);
                e.data.summary = u.summaryHelper(e, e.validatedModel), n.updateModel(e.data), e.submit = function () {
                    o.next("result", e.data, t)
                }, e.logEvent = l.logEvent
            };
        e.controller("summaryController", ["$scope", "$location", "$anchorScroll", "dataService", "modelValidationService", "navigationService", "loggingService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var t = a(28),
            r = new t,
            n = function (e) {
                return void 0 === e ? !1 : "Freehold" === e.holdingType
            },
            i = function (e) {
                return void 0 === e ? !1 : "Leasehold" === e.holdingType
            },
            o = function (e) {
                return void 0 === e ? !1 : i(e) && void 0 !== e.leaseTerm
            },
            l = function (e) {
                if (void 0 === e) return !1;
                var t = r.checkAllRentsBelow2000(e);
                return "Leasehold" === e.holdingType && "Non-residential" === e.propertyType && e.premium < 15e4 && t && r.isGreaterThanOrEqualToDate(e.effectiveDate, new Date(2016, 2, 17))
            },
            d = function (e) {
                return void 0 === e ? !1 : l(e) && "Yes" === e.contractPre201603
            },
            s = function (e) {
                if (void 0 === e) return !1;
                var t = r.checkAllRentsBelow2000(e),
                    a = "Leasehold" === e.holdingType && "Non-residential" === e.propertyType && e.premium < 15e4 && t;
                return a && r.isLessThanDate(e.effectiveDate, new Date(2016, 2, 17)) ? !0 : !(!a || !r.isGreaterThanOrEqualToDate(e.effectiveDate, new Date(2016, 2, 17)) || "Yes" !== e.contractPre201603 || "No" !== e.contractVariedPost201603)
            },
            c = function (e) {
                return void 0 === e ? !1 : "Residential" === e.propertyType && r.isGreaterThanOrEqualToDate(e.effectiveDate, new Date(2016, 3, 1))
            },
            u = function (e) {
                return void 0 === e ? !1 : c(e) && "Yes" === e.individual
            },
            p = function (e) {
                return void 0 === e ? !1 : u(e) && "Yes" === e.twoOrMoreProperties
            },
            f = function (e) {
                return void 0 === e || "undefined" === e || "" === e ? "-" : e
            },
            v = function (e, t) {
                for (var a = [{
                    question: "Freehold / leasehold",
                    answer: void 0 !== e.data ? f(e.data.holdingType) : void 0,
                    link: "#holding",
                    id: "holdingType",
                    isValid: t.isHoldingValid,
                    hiddenText: "Is property freehold or leasehold?"
                }, {
                    question: "Property type",
                    answer: void 0 !== e.data ? f(e.data.propertyType) : void 0,
                    link: "#property",
                    id: "propertyType",
                    isValid: t.isPropertyValid,
                    hiddenText: "Is property residential or non-residential?"
                }, {
                    question: "Effective date of transaction",
                    answer: void 0 !== e.data ? f(e.data.effectiveDate) : void 0,
                    link: "#date",
                    id: "effectiveDate",
                    isValid: t.isEffectiveDateValid,
                    hiddenText: "Effective date of your transaction?",
                    type: "Date"
                }, {
                    question: c(e.data) ? "Are you an individual?" : void 0,
                    answer: void 0 !== e.data ? f(e.data.individual) : void 0,
                    link: "#purchaser",
                    id: "individual",
                    isValid: t.isIndividualValid,
                    hiddenText: "Are you purchasing the property as an individual?"
                }, {
                    question: u(e.data) ? "Additional residential property" : void 0,
                    answer: void 0 !== e.data ? e.data.twoOrMoreProperties : void 0,
                    link: "#additional-property",
                    id: "twoOrMoreProperties",
                    isValid: t.isTwoOrMorePropertiesValid,
                    hiddenText: "Will you own two or more properties?"
                }, {
                    question: p(e.data) ? "Replacing main residence" : void 0,
                    answer: void 0 !== e.data ? e.data.replaceMainResidence : void 0,
                    link: "#additional-property",
                    id: "replaceMainResidence",
                    isValid: t.isReplaceMainResidenceValid,
                    hiddenText: "Are you replacing a main residence?"
                }, {
                    question: n(e.data) ? "Purchase price" : void 0,
                    answer: n(e.data) ? e.data.premium : void 0,
                    link: "#purchase-price",
                    id: "purchasePrice",
                    isValid: t.isPurchasePriceValid,
                    hiddenText: "Purchase price?",
                    type: "Currency"
                }, {
                    question: i(e.data) ? "Start date as specified in lease" : void 0,
                    answer: i(e.data) ? e.data.startDate : void 0,
                    link: "#lease-dates",
                    id: "leaseStartDate",
                    isValid: t.isStartDateValid,
                    hiddenText: "Start date as specified in lease?",
                    type: "Date"
                }, {
                    question: i(e.data) ? "End date as specified in lease" : void 0,
                    answer: i(e.data) ? e.data.endDate : void 0,
                    link: "#lease-dates",
                    id: "leaseEndDate",
                    isValid: t.isEndDateValid,
                    hiddenText: "End date as specified in lease?",
                    type: "Date"
                }, {
                    question: o(e.data) ? "Term of lease" : void 0,
                    answer: o(e.data) ? f(e.data.leaseTerm.years) + " years " + f(e.data.leaseTerm.days) + " days" : void 0,
                    link: void 0,
                    id: "leaseTerm",
                    isValid: "",
                    hiddenText: void 0
                }, {
                    question: i(e.data) ? "Total premium payable" : void 0,
                    answer: i(e.data) ? e.data.premium : void 0,
                    link: "#premium",
                    id: "premium",
                    isValid: t.isPremiumValid,
                    hiddenText: "Total premium payable?",
                    type: "Currency"
                }, {
                    question: e.displayYearOneRent ? "Year 1 rent" : void 0,
                    answer: e.displayYearOneRent ? e.data.year1Rent : void 0,
                    link: "#rent",
                    id: "year1Rent",
                    isValid: t.isYear1RentValid,
                    hiddenText: "Year 1 rent?",
                    type: "Currency"
                }, {
                    question: e.displayYearTwoRent ? "Year 2 rent" : void 0,
                    answer: e.displayYearTwoRent ? e.data.year2Rent : void 0,
                    link: "#rent",
                    id: "year2Rent",
                    isValid: t.isYear2RentValid,
                    hiddenText: "Year 2 rent?",
                    type: "Currency"
                }, {
                    question: e.displayYearThreeRent ? "Year 3 rent" : void 0,
                    answer: e.displayYearThreeRent ? e.data.year3Rent : void 0,
                    link: "#rent",
                    id: "year3Rent",
                    isValid: t.isYear3RentValid,
                    hiddenText: "Year 3 rent?",
                    type: "Currency"
                }, {
                    question: e.displayYearFourRent ? "Year 4 rent" : void 0,
                    answer: e.displayYearFourRent ? e.data.year4Rent : void 0,
                    link: "#rent",
                    id: "year4Rent",
                    isValid: t.isYear4RentValid,
                    hiddenText: "Year 4 rent?",
                    type: "Currency"
                }, {
                    question: e.displayYearFiveRent ? "Year 5 rent" : void 0,
                    answer: e.displayYearFiveRent ? e.data.year5Rent : void 0,
                    link: "#rent",
                    id: "year5Rent",
                    isValid: t.isYear5RentValid,
                    hiddenText: "Year 5 rent?",
                    type: "Currency"
                }, {
                    question: i(e.data) ? "Highest 12 monthly rent" : void 0,
                    answer: i(e.data) ? e.data.highestRent : void 0,
                    link: void 0,
                    id: "highestRent",
                    isValid: "",
                    hiddenText: void 0,
                    type: "Currency"
                }, {
                    question: l(e.data) ? "Exchange of contracts before 17 March 2016" : void 0,
                    answer: l(e.data) ? e.data.contractPre201603 : void 0,
                    link: "#exchange-contracts",
                    id: "contractPre201603",
                    isValid: t.isContractPre201603Valid,
                    hiddenText: "Exchange of contracts before 17 March 2016?"
                }, {
                    question: d(e.data) ? "Contract changed on or after 17 March 2016" : void 0,
                    answer: d(e.data) ? e.data.contractVariedPost201603 : void 0,
                    link: "#exchange-contracts",
                    id: "contractVariedPost201603",
                    isValid: t.isContractVariedPost201603Valid,
                    hiddenText: "Contract changed on or after 17 March 2016?"
                }, {
                    question: s(e.data) ? "Relevant rental figure" : void 0,
                    answer: s(e.data) ? e.data.relevantRent : void 0,
                    link: "#relevant-rent",
                    id: "relevantRent",
                    isValid: t.isRelevantRentValid,
                    hiddenText: "Relevant rental figure?",
                    type: "Currency"
                }], r = [], v = 0; v < a.length; v++) void 0 !== a[v].question && r.push(a[v]);
                return r
            };
        e.exports = {
            summaryHelper: v
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(28)(),
                    d = a(18);
                d(e, t, r, "detail", n, o), i.validate(e.data).isModelValid || t.path("summary"), e.printView = function () {
                    o.printView(e.data, t)
                }, e.isAdditionalProperty = function () {
                    return "Residential" === e.data.propertyType && l.isGreaterThanOrEqualToDate(e.data.effectiveDate, new Date(2016, 3, 1)) && "Yes" == e.data.twoOrMoreProperties && "No" == e.data.replaceMainResidence
                }
            };
        e.controller("detailController", ["$scope", "$location", "$anchorScroll", "dataService", "modelValidationService", "navigationService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(10),
            t = function (e, t, r, n, i, o) {
                var l = a(28)(),
                    d = a(18);
                if (d(e, t, r, "print", n, o), i.validate(e.data).isModelValid) {
                    var s = a(20);
                    s = s(), s.addFunctionsToScope(e)
                } else t.path("summary");
                e.displayExchangeContracts = function () {
                    var t = l.checkAllRentsBelow2000(e.data);
                    return "Leasehold" === e.data.holdingType && "Non-residential" === e.data.propertyType && e.data.premium < 15e4 && t && l.isGreaterThanOrEqualToDate(e.data.effectiveDate, new Date(2016, 2, 17))
                }, e.displayContractVaried = function () {
                    return e.displayExchangeContracts() && "Yes" === e.data.contractPre201603
                }, e.displayRelevantRent = function () {
                    var t = l.checkAllRentsBelow2000(e.data),
                        a = "Leasehold" === e.data.holdingType && "Non-residential" === e.data.propertyType && e.data.premium < 15e4 && t;
                    return a && l.isLessThanDate(e.data.effectiveDate, new Date(2016, 2, 17)) ? !0 : !(!a || !l.isGreaterThanOrEqualToDate(e.data.effectiveDate, new Date(2016, 2, 17)) || "Yes" !== e.data.contractPre201603 || "No" !== e.data.contractVariedPost201603)
                }, e.displayAdditionalProperty = function () {
                    return "Residential" === e.data.propertyType && l.isGreaterThanOrEqualToDate(e.data.effectiveDate, new Date(2016, 3, 1))
                }, e.displayReplaceMainResidence = function () {
                    return e.displayAdditionalProperty() && "Yes" === e.data.twoOrMoreProperties
                }
            };
        e.controller("printController", ["$scope", "$location", "$anchorScroll", "dataService", "modelValidationService", "navigationService", t])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        a(34), a(36), a(37), a(38), a(39), a(41), a(42), a(43), a(44), a(45), a(46), a(47), a(48), a(49), a(50), a(51)
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("dataService", function () {
            var e = {},
                t = function (t) {
                    e = angular.copy(t)
                },
                a = function () {
                    return angular.copy(e)
                };
            return {
                updateModel: t,
                getModel: a
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var t = a(2);
        e.exports = t.module("calc.services", [])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("calculationService", function () {
            function e(e, t) {
                return Math.floor(Math.floor(e) * t / 100)
            }

            function t(e, t, a, r) {
                for (var n = 0, i = 1.035, o = 1, l = 0, d = 0, s = 0; 4 >= s; s++) o *= i, n += Math.floor(1e3 * r[s] / o) / 1e3, r[s] > l && (l = r[s]);
                if (e > 5)
                    for (var c = 6; e >= c; c++) o *= i, n += Math.floor(1e3 * l / o) / 1e3;
                return e >= 5 && t > 0 && (o *= i, d = l * t / a, n += Math.floor(d / o)), Math.floor(n)
            }
            var a = "1 April 2016",
                r = "26 November 2015",
                n = "17 March 2016",
                i = "Results based on SDLT rules before ",
                o = "Results based on SDLT rules from ",
                l = "If you dispose of your previous main residence within 3 years you may be eligible for a refund of £",
                d = "You may be entitled to pay SDLT using the old rules if you exchanged contracts before ",
                s = " based on the rules from ",
                c = " based on the rules before ",
                u = i + n,
                p = o + n,
                f = i + a,
                v = o + a,
                h = d + r + ".",
                m = d + n + ".",
                y = "This is a breakdown of how the total amount of SDLT was calculated",
                D = "This is a breakdown of how the amount of SDLT on the rent was calculated",
                g = "This is a breakdown of how the amount of SDLT on the premium was calculated",
                x = y + s + n,
                R = D + s + n,
                T = g + s + n,
                P = D + c + n,
                w = y + s + a,
                S = D + s + a,
                F = g + s + a,
                V = y + c + a,
                b = D + c + a,
                Y = g + c + a,
                C = "Premium bands (£)",
                H = "Purchase price bands (£)",
                $ = "Rent bands (£)",
                O = "Total SDLT due",
                M = "SDLT due on the premium",
                N = "SDLT due on the rent",
                E = function (e) {
                    var t = [{
                        threshold: 2e6,
                        rate: 7
                    }, {
                        threshold: 1e6,
                        rate: 5
                    }, {
                        threshold: 5e5,
                        rate: 4
                    }, {
                        threshold: 25e4,
                        rate: 3
                    }, {
                        threshold: 125e3,
                        rate: 1
                    }, {
                        threshold: -1,
                        rate: 0
                    }],
                        a = j(e, t),
                        r = {
                            taxType: "premium",
                            calcType: "slab",
                            taxDue: 0,
                            rate: 0
                        };
                    r.taxDue = a.taxDue, r.rate = a.rate;
                    var n = [r],
                        i = {};
                    return i.totalTax = a.taxDue, i.taxCalcs = n, [i]
                },
                _ = function (e) {
                    var t = [{
                        from: 0,
                        to: 125e3,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: 25e4,
                        rate: 2,
                        taxDue: -1
                    }, {
                        from: 25e4,
                        to: 925e3,
                        rate: 5,
                        taxDue: -1
                    }, {
                        from: 925e3,
                        to: 15e5,
                        rate: 10,
                        taxDue: -1
                    }, {
                        from: 15e5,
                        to: -1,
                        rate: 12,
                        taxDue: -1
                    }],
                        a = z(e, t),
                        r = {
                            taxType: "premium",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    r.detailHeading = y, r.bandHeading = H, r.detailFooter = O, r.taxDue = a.taxDue, r.slices = a.slices;
                    var n = [r],
                        i = {};
                    return i.totalTax = a.taxDue, i.taxCalcs = n, [i]
                },
                A = function (e, t) {
                    var a = _(e),
                        r = a[0];
                    r.resultHeading = f, r.resultHint = h, r.taxCalcs[0].detailHeading = V;
                    var n = [{
                        from: 0,
                        to: 125e3,
                        rate: 3,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: 25e4,
                        rate: 5,
                        taxDue: -1
                    }, {
                        from: 25e4,
                        to: 925e3,
                        rate: 8,
                        taxDue: -1
                    }, {
                        from: 925e3,
                        to: 15e5,
                        rate: 13,
                        taxDue: -1
                    }, {
                        from: 15e5,
                        to: -1,
                        rate: 15,
                        taxDue: -1
                    }];
                    4e4 > e && (e = 0);
                    var i = z(e, n),
                        o = {
                            taxType: "premium",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    o.detailHeading = w, o.bandHeading = H, o.detailFooter = O, o.taxDue = i.taxDue, o.slices = i.slices;
                    var d = [o],
                        s = {};
                    return s.resultHeading = v, t && o.taxDue > r.taxCalcs[0].taxDue && (s.resultHint = l + (o.taxDue - r.taxCalcs[0].taxDue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "."), s.totalTax = i.taxDue, s.taxCalcs = d, [s, r]
                },
                L = function (e) {
                    var t = [{
                        threshold: 5e5,
                        rate: 4
                    }, {
                        threshold: 25e4,
                        rate: 3
                    }, {
                        threshold: 15e4,
                        rate: 1
                    }, {
                        threshold: -1,
                        rate: 0
                    }],
                        a = j(e, t),
                        r = {
                            taxType: "premium",
                            calcType: "slab",
                            taxDue: 0,
                            rate: 0
                        };
                    r.taxDue = a.taxDue, r.rate = a.rate;
                    var n = [r],
                        i = {};
                    return i.totalTax = a.taxDue, i.taxCalcs = n, [i]
                },
                k = function (e) {
                    var t = [{
                        from: 0,
                        to: 15e4,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 15e4,
                        to: 25e4,
                        rate: 2,
                        taxDue: -1
                    }, {
                        from: 25e4,
                        to: -1,
                        rate: 5,
                        taxDue: -1
                    }],
                        a = z(e, t),
                        r = {
                            taxType: "premium",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    r.detailHeading = x, r.bandHeading = H, r.detailFooter = O, r.taxDue = a.taxDue, r.slices = a.slices;
                    var n = [r],
                        i = {};
                    i.resultHeading = p, i.totalTax = a.taxDue, i.taxCalcs = n;
                    var o = L(e),
                        l = o[0];
                    return l.resultHeading = u, l.resultHint = m, [i, l]
                },
                I = function (e, t) {
                    var a = [{
                        from: 0,
                        to: 125e3,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: -1,
                        rate: 1,
                        taxDue: -1
                    }],
                        r = z(t, a),
                        n = {
                            taxType: "rent",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    n.detailHeading = D, n.bandHeading = $, n.detailFooter = N, n.taxDue = r.taxDue, n.slices = r.slices;
                    var i = [{
                        threshold: 2e6,
                        rate: 7
                    }, {
                        threshold: 1e6,
                        rate: 5
                    }, {
                        threshold: 5e5,
                        rate: 4
                    }, {
                        threshold: 25e4,
                        rate: 3
                    }, {
                        threshold: 125e3,
                        rate: 1
                    }, {
                        threshold: -1,
                        rate: 0
                    }],
                        o = j(e, i),
                        l = {
                            taxType: "premium",
                            calcType: "slab",
                            taxDue: 0,
                            rate: 0
                        };
                    l.taxDue = o.taxDue, l.rate = o.rate;
                    var d = [n, l],
                        s = {};
                    return s.totalTax = n.taxDue + l.taxDue, s.npv = t, s.taxCalcs = d, [s]
                },
                U = function (e, t) {
                    var a = [{
                        from: 0,
                        to: 125e3,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: -1,
                        rate: 1,
                        taxDue: -1
                    }],
                        r = z(t, a),
                        n = {
                            taxType: "rent",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    n.detailHeading = D, n.bandHeading = $, n.detailFooter = N, n.taxDue = r.taxDue, n.slices = r.slices;
                    var i = [{
                        from: 0,
                        to: 125e3,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: 25e4,
                        rate: 2,
                        taxDue: -1
                    }, {
                        from: 25e4,
                        to: 925e3,
                        rate: 5,
                        taxDue: -1
                    }, {
                        from: 925e3,
                        to: 15e5,
                        rate: 10,
                        taxDue: -1
                    }, {
                        from: 15e5,
                        to: -1,
                        rate: 12,
                        taxDue: -1
                    }],
                        o = z(e, i),
                        l = {
                            taxType: "premium",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    l.detailHeading = g, l.bandHeading = C, l.detailFooter = M, l.taxDue = o.taxDue, l.slices = o.slices;
                    var d = [n, l],
                        s = {};
                    return s.totalTax = n.taxDue + l.taxDue, s.npv = t, s.taxCalcs = d, [s]
                },
                q = function (e, t, a) {
                    var r = U(e, t),
                        n = r[0];
                    n.resultHeading = f, n.resultHint = h, n.taxCalcs[0].detailHeading = b, n.taxCalcs[1].detailHeading = Y;
                    var i = [{
                        from: 0,
                        to: 125e3,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: -1,
                        rate: 1,
                        taxDue: -1
                    }],
                        o = z(t, i),
                        d = {
                            taxType: "rent",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    d.detailHeading = S, d.bandHeading = $, d.detailFooter = N, d.taxDue = o.taxDue, d.slices = o.slices;
                    var s = [{
                        from: 0,
                        to: 125e3,
                        rate: 3,
                        taxDue: -1
                    }, {
                        from: 125e3,
                        to: 25e4,
                        rate: 5,
                        taxDue: -1
                    }, {
                        from: 25e4,
                        to: 925e3,
                        rate: 8,
                        taxDue: -1
                    }, {
                        from: 925e3,
                        to: 15e5,
                        rate: 13,
                        taxDue: -1
                    }, {
                        from: 15e5,
                        to: -1,
                        rate: 15,
                        taxDue: -1
                    }];
                    4e4 > e && (e = 0);
                    var c = z(e, s),
                        u = {
                            taxType: "premium",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    u.detailHeading = F, u.bandHeading = C, u.detailFooter = M, u.taxDue = c.taxDue, u.slices = c.slices;
                    var p = [d, u],
                        m = {};
                    return m.resultHeading = v, a && u.taxDue > n.taxCalcs[1].taxDue && (m.resultHint = l + (u.taxDue - n.taxCalcs[1].taxDue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "."), m.totalTax = d.taxDue + u.taxDue, m.npv = t, m.taxCalcs = p, [m, n]
                },
                B = function (e, t, a) {
                    var r = [{
                        from: 0,
                        to: 15e4,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 15e4,
                        to: -1,
                        rate: 1,
                        taxDue: -1
                    }],
                        n = z(t, r),
                        i = {
                            taxType: "rent",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    i.detailHeading = D, i.bandHeading = $, i.detailFooter = N, i.taxDue = n.taxDue, i.slices = n.slices;
                    var o = [{
                        threshold: 5e5,
                        rate: 4
                    }, {
                        threshold: 25e4,
                        rate: 3
                    }, {
                        threshold: -1,
                        rate: 1
                    }],
                        l = {
                            taxType: "premium",
                            calcType: "slab",
                            taxDue: 0,
                            rate: 0
                        };
                    if (!a) {
                        var d = j(e, o);
                        l.taxDue = d.taxDue, l.rate = d.rate
                    }
                    var s = [i, l],
                        c = {};
                    return c.totalTax = i.taxDue + l.taxDue, c.npv = t, c.taxCalcs = s, [c]
                },
                G = function (e, t, a, r) {
                    var n = [{
                        from: 0,
                        to: 15e4,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 15e4,
                        to: 5e6,
                        rate: 1,
                        taxDue: -1
                    }, {
                        from: 5e6,
                        to: -1,
                        rate: 2,
                        taxDue: -1
                    }],
                        i = z(t, n),
                        o = {
                            taxType: "rent",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    o.detailHeading = R, o.bandHeading = $, o.detailFooter = N, o.taxDue = i.taxDue, o.slices = i.slices;
                    var l = [{
                        from: 0,
                        to: 15e4,
                        rate: 0,
                        taxDue: -1
                    }, {
                        from: 15e4,
                        to: 25e4,
                        rate: 2,
                        taxDue: -1
                    }, {
                        from: 25e4,
                        to: -1,
                        rate: 5,
                        taxDue: -1
                    }],
                        d = z(e, l),
                        s = {
                            taxType: "premium",
                            calcType: "slice",
                            detailHeading: "",
                            bandHeading: "",
                            detailFooter: "",
                            taxDue: 0,
                            slices: []
                        };
                    s.detailHeading = T, s.bandHeading = C, s.detailFooter = M, s.taxDue = d.taxDue, s.slices = d.slices;
                    var c = [o, s],
                        f = {};
                    if (f.resultHeading = p, f.totalTax = o.taxDue + s.taxDue, f.npv = t, f.taxCalcs = c, r) {
                        var v = B(e, t, a),
                            h = v[0];
                        return h.resultHeading = u, h.resultHint = m, h.taxCalcs[0].detailHeading = P, [f, h]
                    }
                    return [f]
                },
                j = function (t, a) {
                    for (var r = -1, n = -1, i = 0; i < a.length; i++)
                        if (t > a[i].threshold) {
                            r = a[i].rate, n = e(t, a[i].rate);
                            break
                        }
                    var o = {
                        rate: r,
                        taxDue: n
                    };
                    return o
                },
                z = function (t, a) {
                    for (var r = -1, n = -1, i = 0, o = 0; o < a.length; o++) -1 == a[o].to ? t > a[o].from ? (r = t - a[o].from, n = e(r, a[o].rate), a[o].taxDue = n, i += n) : a[o].taxDue = 0 : t > a[o].to ? (r = a[o].to - a[o].from, n = e(r, a[o].rate), a[o].taxDue = n, i += n) : t <= a[o].from ? a[o].taxDue = 0 : (r = t - a[o].from, n = e(r, a[o].rate), a[o].taxDue = n, i += n);
                    var l = {
                        taxDue: i,
                        slices: a
                    };
                    return l
                };
            return {
                calculateNPV: t,
                calcFreeResPrem_201203_201412: E,
                calcFreeResPrem_201412_Undef: _,
                calcFreeResPremAddProp_201604_Undef: A,
                calcFreeNonResPrem_201203_201603: L,
                calcFreeNonResPrem_201603_Undef: k,
                calcLeaseResPremAndRent_201203_201412: I,
                calcLeaseResPremAndRent_201412_Undef: U,
                calcLeaseResPremAndRentAddProp_201604_Undef: q,
                calcLeaseNonResPremAndRent_201203_201603: B,
                calcLeaseNonResPremAndRent_201603_Undef: G
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35),
            t = function () {
                function e(e, t) {
                    "Freehold" === e.holdingType ? o(t, "purchase-price") : "Leasehold" === e.holdingType ? o(t, "lease-dates") : i(t)
                }
                var t = a(28)(),
                    r = function (e) {
                        return ga("set", "page", "/calculate-stamp-duty-land-tax/" + e), ga("send", "pageview", {
                            anonymizeIp: !0
                        }), e
                    },
                    n = function (e) {
                        e.path("holding")
                    },
                    i = function (e) {
                        e.path("summary")
                    },
                    o = function (e, t) {
                        e.hash(null).path(t)
                    },
                    l = function (e, t) {
                        t.path("print")
                    },
                    d = function (e, t) {
                        t.path("detail")
                    },
                    s = function (r, n, i) {
                        if ("holding" === r) o(i, "property");
                        else if ("property" === r) o(i, "date");
                        else if ("date" === r)
                            if ("Residential" === n.propertyType) {
                                var l = a(15),
                                    d = l.parseUIDate(n.effectiveDateYear, n.effectiveDateMonth, n.effectiveDateDay);
                                t.isLessThanDate(d, new Date(2016, 3, 1)) ? e(n, i) : o(i, "purchaser")
                            } else e(n, i);
                        else if ("purchase-price" === r) o(i, "summary");
                        else if ("purchaser" === r) "Yes" === n.individual ? o(i, "additional-property") : e(n, i);
                        else if ("additional-property" === r) e(n, i);
                        else if ("lease-dates" === r) o(i, "premium");
                        else if ("premium" === r) o(i, "rent");
                        else if ("rent" === r) {
                            var s = t.checkAllRentsBelow2000(n);
                            "Non-residential" === n.propertyType && n.premium < 15e4 && s ? n.effectiveDate > new Date(2016, 2, 16) ? o(i, "exchange-contracts") : o(i, "relevant-rent") : o(i, "summary")
                        } else "exchange-contracts" === r ? "Yes" === n.contractPre201603 && "No" === n.contractVariedPost201603 ? o(i, "relevant-rent") : o(i, "summary") : "relevant-rent" === r ? o(i, "summary") : o(i, "result")
                    };
                return {
                    logView: r,
                    startNow: n,
                    next: s,
                    printView: l,
                    viewDetails: d
                }
            };
        e.service("navigationService", t)
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35),
            t = function () {
                var e = function (e, t, a) {
                    ga("send", "event", e, t, a)
                };
                return {
                    logEvent: e
                }
            };
        e.service("loggingService", t)
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("additionalPropertyValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.twoOrMoreProperties) && (t.twoOrMoreProperties = "Provide an answer to continue. Select 'Yes' or 'No'"), "Yes" === e.twoOrMoreProperties && n.isNotPopulated(e.replaceMainResidence) && (t.replaceMainResidence = "Provide an answer to continue. Select 'Yes' or 'No'"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t) {
    ! function () {
        "use strict";
        e.exports = function (e) {
            function t() {
                for (var t in e) return !e.hasOwnProperty(t);
                return !0
            }
            var a = function (t) {
                return e[t] ? "form-field--error" : ""
            },
                r = function (t) {
                    return e[t] || ""
                },
                n = t();
            return {
                isValid: n,
                hasError: a,
                validationMessage: r
            }
        }
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("exchangeContractsValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.contractPre201603) && (t.contractPre201603 = "Provide an answer to continue. Select 'Yes' or 'No'"), "Yes" === e.contractPre201603 && n.isNotPopulated(e.contractVariedPost201603) && (t.contractVariedPost201603 = "Provide an answer to continue. Select 'Yes' or 'No'"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("dateValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.effectiveDate) ? t.effectiveDate = "You must complete the effective date field" : n.isInvalidParsedDate(e.effectiveDate) ? t.effectiveDate = "Enter a valid date" : "Residential" === e.propertyType && n.isLessThanDate(e.effectiveDate, new Date(2012, 2, 22)) && (t.effectiveDate = "Date can't be earlier than 22/3/2012"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("holdingValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.holdingType) && (t.holdingType = "Provide an answer to continue. Select 'Freehold' or 'Leasehold'"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("leaseDatesValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = !1,
                    n = a(40),
                    i = a(28)();
                return i.isNotPopulated(e.startDate) ? t.startDate = "Enter a start date" : i.isInvalidParsedDate(e.startDate) ? t.startDate = "Enter a valid date" : r = !0, i.isNotPopulated(e.endDate) ? t.endDate = "Enter an end date" : i.isInvalidParsedDate(e.endDate) ? t.endDate = "Enter a valid date" : r && i.isLessThanDate(e.endDate, e.startDate) ? t.endDate = "End date can't be before the start date" : e.effectiveDate && i.isLessThanDate(e.endDate, e.effectiveDate) && (t.endDate = "End date can't be before the effective date"), n(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("premiumValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.premium) ? t.premium = "You must complete this box. Enter your Premium" : n.isInvalidFloat(e.premium) && (t.premium = "Enter the premium again - don't use any letters or characters including £"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("propertyValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.propertyType) && (t.propertyType = "Provide an answer to continue. Select 'Residential' or 'Non-residential'"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("purchasePriceValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.premium) ? t.premium = "You must complete this box. Enter your Purchase Price" : n.isInvalidFloat(e.premium) && (t.premium = "Enter the purchase price again - don't use any letters or characters including £"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("purchaserValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.individual) && (t.individual = "Provide an answer to continue. Select 'Yes' or 'No'"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("relevantRentValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)();
                return n.isNotPopulated(e.relevantRent) ? t.relevantRent = "Please enter the rental figure" : n.isInvalidFloat(e.relevantRent) && (t.relevantRent = "Enter the relevant rent again - don't use any letters or characters including £"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("rentValidationService", function () {
            var e = function (e) {
                var t = {},
                    r = a(40),
                    n = a(28)(),
                    i = a(20);
                i = i().getFunctions(e);
                var o = function (e, t, a) {
                    n.isNotPopulated(e[a]) ? t[a] = "Enter the annual rent for all the years" : n.isInvalidFloat(e[a]) && (t[a] = "Enter the rent again - don't use any letters or characters including £")
                };
                return i.displayYearOneRent && o(e, t, "year1Rent"), i.displayYearTwoRent && o(e, t, "year2Rent"), i.displayYearThreeRent && o(e, t, "year3Rent"), i.displayYearFourRent && o(e, t, "year4Rent"), i.displayYearFiveRent && o(e, t, "year5Rent"), r(t)
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(35);
        e.service("modelValidationService", function () {
            var e = function (e) {
                var t = a(20),
                    r = a(28)();
                t = t(), t = t.getFunctions(e);
                var n = {
                    isModelValid: !0
                },
                    i = function (t) {
                        return e[t] ? "" : (n.isModelValid = !1, "form-field--error")
                    };
                if (n.isHoldingValid = i("holdingType"),
                    n.isPropertyValid = i("propertyType"),
                    n.isEffectiveDateValid = i("effectiveDate"),
                    "Freehold" === e.holdingType && (n.isPurchasePriceValid = i("premium")),
                    "Residential" === e.propertyType && e.effectiveDate >= new Date(2016, 3, 1) && (n.isIndividualValid = i("individual"),
                    "Yes" === e.individual && (n.isTwoOrMorePropertiesValid = i("twoOrMoreProperties"),
                    "Yes" === e.twoOrMoreProperties && (n.isReplaceMainResidenceValid = i("replaceMainResidence")))),
                    "Leasehold" === e.holdingType) {
                    n.isStartDateValid = i("startDate"),
                    n.isEndDateValid = i("endDate"),
                    n.isPremiumValid = i("premium"),
                    n.isYear1RentValid = i("year1Rent"),
                    t.displayYearTwoRent && (n.isYear2RentValid = i("year2Rent")),
                    t.displayYearThreeRent && (n.isYear3RentValid = i("year3Rent")),
                    t.displayYearFourRent && (n.isYear4RentValid = i("year4Rent")),
                    t.displayYearFiveRent && (n.isYear5RentValid = i("year5Rent"));
                    var o = r.checkAllRentsBelow2000(e);
                    "Non-residential" === e.propertyType && e.premium < 15e4 && o && (e.effectiveDate > new Date("March 16, 2016") ? (n.isContractPre201603Valid = i("contractPre201603"), "Yes" === e.contractPre201603 && (n.isContractVariedPost201603Valid = i("contractVariedPost201603")), "Yes" === e.contractPre201603 && "No" === e.contractVariedPost201603 && (n.isRelevantRentValid = i("relevantRent"))) : n.isRelevantRentValid = i("relevantRent"))
                }
                return n
            };
            return {
                validate: e
            }
        })
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        a(53)
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var e = a(54);
        e.filter("calcCurrency", ["$filter", function (e) {
            return function (e, t) {
                return void 0 === e || "undefined" === e || "" === e ? "-" : (e = parseFloat(e), e = e % 1 === 0 ? e.toFixed(0) : e.toFixed(2), void 0 !== t && "undefined" !== t && "" !== t || (t = ""), t + e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            }
        }])
    }()
}, function (e, t, a) {
    ! function () {
        "use strict";
        var t = a(2);
        e.exports = t.module("calc.filters", [])
    }()
}]);
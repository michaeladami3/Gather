let currentAllStatesData = [
    {
        "fips" : "02", 
        "country" : "US", 
        "state" : "AK", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ak", 
        "long" : null, 
        "population" : 731545, 
        "metrics" : {
            "testPositivityRatio" : 0.031, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 23.6, 
            "contactTracerCapacityRatio" : 0.27, 
            "infectionRate" : 0.89, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.644, 
            "vaccinationsCompletedRatio" : 0.559
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 153629, 
            "deaths" : 922, 
            "positiveTests" : 154074, 
            "negativeTests" : 2884234, 
            "contactTracers" : 235, 
            "hospitalBeds" : {
                "capacity" : 1587, 
                "currentUsageTotal" : 1198, 
                "currentUsageCovid" : 71
            }, 
            "icuBeds" : {
                "capacity" : 134, 
                "currentUsageTotal" : 104, 
                "currentUsageCovid" : 17
            }, 
            "newCases" : 407, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1316305, 
            "vaccinationsInitiated" : 471267, 
            "vaccinationsCompleted" : 408720, 
            "vaccinesAdministered" : 1005798, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 153629.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-09-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 44.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 153629.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 153629.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 153629.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/alaska-ak"
    }, 
    {
        "fips" : "01", 
        "country" : "US", 
        "state" : "AL", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-al", 
        "long" : null, 
        "population" : 4903185, 
        "metrics" : {
            "testPositivityRatio" : 0.067, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 16.2, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.19, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.87, 
            "vaccinationsInitiatedRatio" : 0.579, 
            "vaccinationsCompletedRatio" : 0.472
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 855279, 
            "deaths" : 16353, 
            "positiveTests" : 806165, 
            "negativeTests" : 5619157, 
            "contactTracers" : 404, 
            "hospitalBeds" : {
                "capacity" : 15155, 
                "currentUsageTotal" : 11191, 
                "currentUsageCovid" : 516
            }, 
            "icuBeds" : {
                "capacity" : 1538, 
                "currentUsageTotal" : 1342, 
                "currentUsageCovid" : 130
            }, 
            "newCases" : 552, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 8008500, 
            "vaccinationsInitiated" : 2838792, 
            "vaccinationsCompleted" : 2313129, 
            "vaccinesAdministered" : 5503643, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-25", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 144.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/alabama-al"
    }, 
    {
        "fips" : "05", 
        "country" : "US", 
        "state" : "AR", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ar", 
        "long" : null, 
        "population" : 3017804, 
        "metrics" : {
            "testPositivityRatio" : 0.068, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 24.7, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 1.01, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.621, 
            "vaccinationsCompletedRatio" : 0.507
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 543648, 
            "deaths" : 8956, 
            "positiveTests" : 334231, 
            "negativeTests" : 3634491, 
            "contactTracers" : 790, 
            "hospitalBeds" : {
                "capacity" : 9103, 
                "currentUsageTotal" : 6524, 
                "currentUsageCovid" : 591
            }, 
            "icuBeds" : {
                "capacity" : 904, 
                "currentUsageTotal" : 732, 
                "currentUsageCovid" : 206
            }, 
            "newCases" : 406, 
            "newDeaths" : 14, 
            "vaccinesDistributed" : 4932680, 
            "vaccinationsInitiated" : 1872975, 
            "vaccinationsCompleted" : 1530779, 
            "vaccinesAdministered" : 3723027, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-05-21", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 455.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/arkansas-ar"
    }, 
    {
        "fips" : "04", 
        "country" : "US", 
        "state" : "AZ", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-az", 
        "long" : null, 
        "population" : 7278717, 
        "metrics" : {
            "testPositivityRatio" : 0.126, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 40.5, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 0.94, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.83, 
            "vaccinationsInitiatedRatio" : 0.664, 
            "vaccinationsCompletedRatio" : 0.564
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1335465, 
            "deaths" : 23519, 
            "positiveTests" : 1348362, 
            "negativeTests" : 10724740, 
            "contactTracers" : 396, 
            "hospitalBeds" : {
                "capacity" : 16704, 
                "currentUsageTotal" : 14213, 
                "currentUsageCovid" : 2530
            }, 
            "icuBeds" : {
                "capacity" : 1852, 
                "currentUsageTotal" : 1528, 
                "currentUsageCovid" : 603
            }, 
            "newCases" : 2745, 
            "newDeaths" : 3, 
            "vaccinesDistributed" : 12418450, 
            "vaccinationsInitiated" : 4832963, 
            "vaccinationsCompleted" : 4106924, 
            "vaccinesAdministered" : 10239616, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/arizona-az"
    }, 
    {
        "fips" : "06", 
        "country" : "US", 
        "state" : "CA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ca", 
        "long" : null, 
        "population" : 39512223, 
        "metrics" : {
            "testPositivityRatio" : 0.023, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 18.1, 
            "contactTracerCapacityRatio" : 0.3, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.816, 
            "vaccinationsCompletedRatio" : 0.654
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 0, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 5208847, 
            "deaths" : 75927, 
            "positiveTests" : 5215491, 
            "negativeTests" : 96006278, 
            "contactTracers" : 10600, 
            "hospitalBeds" : {
                "capacity" : 64655, 
                "currentUsageTotal" : 51414, 
                "currentUsageCovid" : 3871
            }, 
            "icuBeds" : {
                "capacity" : 7072, 
                "currentUsageTotal" : 5528, 
                "currentUsageCovid" : 965
            }, 
            "newCases" : 3502, 
            "newDeaths" : 10, 
            "vaccinesDistributed" : 74746585, 
            "vaccinationsInitiated" : 32223332, 
            "vaccinationsCompleted" : 25855747, 
            "vaccinesAdministered" : 63957628, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-09", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 60.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/california-ca"
    }, 
    {
        "fips" : "08", 
        "country" : "US", 
        "state" : "CO", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-co", 
        "long" : null, 
        "population" : 5758736, 
        "metrics" : {
            "testPositivityRatio" : 0.066, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 30.9, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 0.84, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.81, 
            "vaccinationsInitiatedRatio" : 0.736, 
            "vaccinationsCompletedRatio" : 0.655
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 871986, 
            "deaths" : 10075, 
            "positiveTests" : 881459, 
            "negativeTests" : 11504063, 
            "contactTracers" : 1300, 
            "hospitalBeds" : {
                "capacity" : 11949, 
                "currentUsageTotal" : 8497, 
                "currentUsageCovid" : 1190
            }, 
            "icuBeds" : {
                "capacity" : 1254, 
                "currentUsageTotal" : 1018, 
                "currentUsageCovid" : 443
            }, 
            "newCases" : 675, 
            "newDeaths" : 19, 
            "vaccinesDistributed" : 10734655, 
            "vaccinationsInitiated" : 4237457, 
            "vaccinationsCompleted" : 3773065, 
            "vaccinesAdministered" : 9253706, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 115.0
                    }, 
                    {
                        "date" : "2020-10-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 37.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/colorado-co"
    }, 
    {
        "fips" : "09", 
        "country" : "US", 
        "state" : "CT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ct", 
        "long" : null, 
        "population" : 3565287, 
        "metrics" : {
            "testPositivityRatio" : 0.083, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 64.7, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.28, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.62, 
            "vaccinationsInitiatedRatio" : 0.871, 
            "vaccinationsCompletedRatio" : 0.741
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 454742, 
            "deaths" : 9002, 
            "positiveTests" : 580651, 
            "negativeTests" : 11711626, 
            "contactTracers" : 860, 
            "hospitalBeds" : {
                "capacity" : 8148, 
                "currentUsageTotal" : 6817, 
                "currentUsageCovid" : 852
            }, 
            "icuBeds" : {
                "capacity" : 1024, 
                "currentUsageTotal" : 632, 
                "currentUsageCovid" : 165
            }, 
            "newCases" : 1443, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7250605, 
            "vaccinationsInitiated" : 3106167, 
            "vaccinationsCompleted" : 2641086, 
            "vaccinesAdministered" : 6451487, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 454742.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-10-02", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 555.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 33.0
                    }, 
                    {
                        "date" : "2020-04-15", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 197.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 454742.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 454742.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 454742.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/connecticut-ct"
    }, 
    {
        "fips" : "11", 
        "country" : "US", 
        "state" : "DC", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-dc", 
        "long" : null, 
        "population" : 705749, 
        "metrics" : {
            "testPositivityRatio" : 0.055, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 50.9, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 1.43, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.863, 
            "vaccinationsCompletedRatio" : 0.668
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 71219, 
            "deaths" : 1206, 
            "positiveTests" : 104224, 
            "negativeTests" : 3453054, 
            "contactTracers" : 268, 
            "hospitalBeds" : {
                "capacity" : 3455, 
                "currentUsageTotal" : 2710, 
                "currentUsageCovid" : 188
            }, 
            "icuBeds" : {
                "capacity" : 340, 
                "currentUsageTotal" : 269, 
                "currentUsageCovid" : 26
            }, 
            "newCases" : 844, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1559835, 
            "vaccinationsInitiated" : 608987, 
            "vaccinationsCompleted" : 471375, 
            "vaccinesAdministered" : 1247466, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 14670, 
                    "16-17" : 6417, 
                    "16-19" : 5823, 
                    "18-24" : 39935, 
                    "20-44" : 136938, 
                    "25-29" : 40100, 
                    "25-34" : 85163, 
                    "25-39" : 140842, 
                    "30-39" : 80586, 
                    "35-44" : 68919, 
                    "40-49" : 61222, 
                    "45-54" : 49431, 
                    "46-64" : 77288, 
                    "5-11" : 8710, 
                    "50-64" : 81685, 
                    "55-64" : 50162, 
                    "65-74" : 45465, 
                    "65_plus" : 63475, 
                    "75+" : 29039, 
                    "75-84" : 20420, 
                    "85_plus" : 7407
                }, 
                "race" : {
                    "ai_an" : 1031, 
                    "asian" : 11922, 
                    "asian_or_pacific_islander" : 22406, 
                    "black" : 155702, 
                    "other" : 70627, 
                    "unknown" : 33283, 
                    "white" : 174992
                }, 
                "ethnicity" : {
                    "hispanic" : 51402, 
                    "non-hispanic" : 330501, 
                    "unknown" : 81841
                }, 
                "sex" : {
                    "female" : 233432, 
                    "male" : 193532, 
                    "unknown" : 986
                }
            }
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 71219.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 32.0
                    }, 
                    {
                        "date" : "2020-11-11", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 206.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 71219.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 71219.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 71219.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/district_of_columbia-dc"
    }, 
    {
        "fips" : "10", 
        "country" : "US", 
        "state" : "DE", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-de", 
        "long" : null, 
        "population" : 973764, 
        "metrics" : {
            "testPositivityRatio" : 0.109, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 71.2, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 1.14, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.9, 
            "vaccinationsInitiatedRatio" : 0.756, 
            "vaccinationsCompletedRatio" : 0.635
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 165621, 
            "deaths" : 2242, 
            "positiveTests" : 185068, 
            "negativeTests" : 2826586, 
            "contactTracers" : 211, 
            "hospitalBeds" : {
                "capacity" : 3493, 
                "currentUsageTotal" : 2761, 
                "currentUsageCovid" : 385
            }, 
            "icuBeds" : {
                "capacity" : 197, 
                "currentUsageTotal" : 177, 
                "currentUsageCovid" : 48
            }, 
            "newCases" : 698, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1944365, 
            "vaccinationsInitiated" : 736144, 
            "vaccinationsCompleted" : 618285, 
            "vaccinesAdministered" : 1543487, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/delaware-de"
    }, 
    {
        "fips" : "12", 
        "country" : "US", 
        "state" : "FL", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-fl", 
        "long" : null, 
        "population" : 21477737, 
        "metrics" : {
            "testPositivityRatio" : 0.062, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 23.2, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.42, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.736, 
            "vaccinationsCompletedRatio" : 0.628
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 3744278, 
            "deaths" : 62220, 
            "positiveTests" : 4416847, 
            "negativeTests" : 40608240, 
            "contactTracers" : 2600, 
            "hospitalBeds" : {
                "capacity" : 58824, 
                "currentUsageTotal" : 45755, 
                "currentUsageCovid" : 1518
            }, 
            "icuBeds" : {
                "capacity" : 6376, 
                "currentUsageTotal" : 4856, 
                "currentUsageCovid" : 277
            }, 
            "newCases" : 8709, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 40337415, 
            "vaccinationsInitiated" : 15808913, 
            "vaccinationsCompleted" : 13496245, 
            "vaccinesAdministered" : 32827218, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-14" : 91571, 
                    "15-24" : 774834, 
                    "25-34" : 983521, 
                    "35-44" : 1214674, 
                    "45-54" : 1498733, 
                    "55-64" : 1989585, 
                    "65-74" : 2183477, 
                    "75-84" : 1236286, 
                    "85_plus" : 424618
                }, 
                "race" : {
                    "ai_an" : 41462, 
                    "black" : 753863, 
                    "other" : 1191827, 
                    "unknown" : 1583589, 
                    "white" : 6826558
                }, 
                "ethnicity" : {
                    "hispanic" : 1894250, 
                    "non-hispanic" : 5104146, 
                    "unknown" : 3398903
                }, 
                "sex" : {
                    "female" : 5643059, 
                    "male" : 4731062, 
                    "unknown" : 23178
                }
            }
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3744278.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3744278.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3744278.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 3744278.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/florida-fl"
    }, 
    {
        "fips" : "13", 
        "country" : "US", 
        "state" : "GA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ga", 
        "long" : null, 
        "population" : 10617423, 
        "metrics" : {
            "testPositivityRatio" : 0.068, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 16.8, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.19, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.604, 
            "vaccinationsCompletedRatio" : 0.504
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1657350, 
            "deaths" : 29862, 
            "positiveTests" : 1279475, 
            "negativeTests" : 11564963, 
            "contactTracers" : 1570, 
            "hospitalBeds" : {
                "capacity" : 22330, 
                "currentUsageTotal" : 18228, 
                "currentUsageCovid" : 1459
            }, 
            "icuBeds" : {
                "capacity" : 2497, 
                "currentUsageTotal" : 2049, 
                "currentUsageCovid" : 296
            }, 
            "newCases" : 2732, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 18154835, 
            "vaccinationsInitiated" : 6412743, 
            "vaccinationsCompleted" : 5353688, 
            "vaccinesAdministered" : 12939355, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1657350.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-10-26", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 3931.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1657350.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1657350.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1657350.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/georgia-ga"
    }, 
    {
        "fips" : "15", 
        "country" : "US", 
        "state" : "HI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-hi", 
        "long" : null, 
        "population" : 1415872, 
        "metrics" : {
            "testPositivityRatio" : 0.042, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 34.8, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.57, 
            "infectionRateCI90" : 0.12, 
            "icuCapacityRatio" : 0.66, 
            "vaccinationsInitiatedRatio" : 0.838, 
            "vaccinationsCompletedRatio" : 0.626
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 89675, 
            "deaths" : 1069, 
            "positiveTests" : 94741, 
            "negativeTests" : 2627946, 
            "contactTracers" : 300, 
            "hospitalBeds" : {
                "capacity" : 2559, 
                "currentUsageTotal" : 1939, 
                "currentUsageCovid" : 56
            }, 
            "icuBeds" : {
                "capacity" : 199, 
                "currentUsageTotal" : 131, 
                "currentUsageCovid" : 9
            }, 
            "newCases" : 958, 
            "newDeaths" : 2, 
            "vaccinesDistributed" : 2919530, 
            "vaccinationsInitiated" : 1186559, 
            "vaccinationsCompleted" : 886069, 
            "vaccinesAdministered" : 2152593, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/hawaii-hi"
    }, 
    {
        "fips" : "19", 
        "country" : "US", 
        "state" : "IA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ia", 
        "long" : null, 
        "population" : 3155070, 
        "metrics" : {
            "testPositivityRatio" : 0.139, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 48.6, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.01, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.641, 
            "vaccinationsCompletedRatio" : 0.584
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 557029, 
            "deaths" : 7680, 
            "positiveTests" : 540462, 
            "negativeTests" : 4410664, 
            "contactTracers" : 403, 
            "hospitalBeds" : {
                "capacity" : 7512, 
                "currentUsageTotal" : 5388, 
                "currentUsageCovid" : 824
            }, 
            "icuBeds" : {
                "capacity" : 604, 
                "currentUsageTotal" : 510, 
                "currentUsageCovid" : 182
            }, 
            "newCases" : 3622, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5563535, 
            "vaccinationsInitiated" : 2022687, 
            "vaccinationsCompleted" : 1843143, 
            "vaccinesAdministered" : 4490986, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 557029.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-04-03", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 68.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 557029.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 557029.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 557029.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/iowa-ia"
    }, 
    {
        "fips" : "16", 
        "country" : "US", 
        "state" : "ID", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-id", 
        "long" : null, 
        "population" : 1787065, 
        "metrics" : {
            "testPositivityRatio" : 0.083, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 18.2, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 0.93, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 313994, 
            "deaths" : 4068, 
            "positiveTests" : 406855, 
            "negativeTests" : 2203920, 
            "contactTracers" : 250, 
            "hospitalBeds" : {
                "capacity" : 3348, 
                "currentUsageTotal" : 2478, 
                "currentUsageCovid" : 278
            }, 
            "icuBeds" : {
                "capacity" : 288, 
                "currentUsageTotal" : 242, 
                "currentUsageCovid" : 92
            }, 
            "newCases" : 155, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 313994.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-08-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 31.0
                    }
                ]
            }, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 313994.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 313994.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 313994.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/idaho-id"
    }, 
    {
        "fips" : "17", 
        "country" : "US", 
        "state" : "IL", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-il", 
        "long" : null, 
        "population" : 12671821, 
        "metrics" : {
            "testPositivityRatio" : 0.067, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 67.0, 
            "contactTracerCapacityRatio" : 0.09, 
            "infectionRate" : 1.17, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.714, 
            "vaccinationsCompletedRatio" : 0.638
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1949484, 
            "deaths" : 30202, 
            "positiveTests" : 1864919, 
            "negativeTests" : 31813664, 
            "contactTracers" : 3800, 
            "hospitalBeds" : {
                "capacity" : 30853, 
                "currentUsageTotal" : 23279, 
                "currentUsageCovid" : 3687
            }, 
            "icuBeds" : {
                "capacity" : 3220, 
                "currentUsageTotal" : 2359, 
                "currentUsageCovid" : 747
            }, 
            "newCases" : 10660, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 22882955, 
            "vaccinationsInitiated" : 9043470, 
            "vaccinationsCompleted" : 8079130, 
            "vaccinesAdministered" : 19273828, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1949484.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 5538.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-12-01", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 56.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1949484.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1949484.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1949484.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/illinois-il"
    }, 
    {
        "fips" : "18", 
        "country" : "US", 
        "state" : "IN", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-in", 
        "long" : null, 
        "population" : 6732219, 
        "metrics" : {
            "testPositivityRatio" : 0.165, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 65.1, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.08, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.573, 
            "vaccinationsCompletedRatio" : 0.517
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1184830, 
            "deaths" : 18385, 
            "positiveTests" : 1226666, 
            "negativeTests" : 10623428, 
            "contactTracers" : 1600, 
            "hospitalBeds" : {
                "capacity" : 17241, 
                "currentUsageTotal" : 13792, 
                "currentUsageCovid" : 2919
            }, 
            "icuBeds" : {
                "capacity" : 2214, 
                "currentUsageTotal" : 1907, 
                "currentUsageCovid" : 770
            }, 
            "newCases" : 5145, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10829330, 
            "vaccinationsInitiated" : 3857580, 
            "vaccinationsCompleted" : 3480249, 
            "vaccinesAdministered" : 8323769, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1184830.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1184830.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1184830.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1184830.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/indiana-in"
    }, 
    {
        "fips" : "20", 
        "country" : "US", 
        "state" : "KS", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ks", 
        "long" : null, 
        "population" : 2913314, 
        "metrics" : {
            "testPositivityRatio" : 0.139, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 57.8, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.1, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.78, 
            "vaccinationsInitiatedRatio" : 0.683, 
            "vaccinationsCompletedRatio" : 0.564
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 498771, 
            "deaths" : 6937, 
            "positiveTests" : 441751, 
            "negativeTests" : 4046529, 
            "contactTracers" : 359, 
            "hospitalBeds" : {
                "capacity" : 8411, 
                "currentUsageTotal" : 5300, 
                "currentUsageCovid" : 806
            }, 
            "icuBeds" : {
                "capacity" : 831, 
                "currentUsageTotal" : 649, 
                "currentUsageCovid" : 213
            }, 
            "newCases" : 4216, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5071445, 
            "vaccinationsInitiated" : 1990863, 
            "vaccinationsCompleted" : 1643871, 
            "vaccinesAdministered" : 3951787, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 498771.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-07-23", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 39.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 498771.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 498771.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 498771.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/kansas-ks"
    }, 
    {
        "fips" : "21", 
        "country" : "US", 
        "state" : "KY", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ky", 
        "long" : null, 
        "population" : 4467673, 
        "metrics" : {
            "testPositivityRatio" : 0.103, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.3, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.07, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.89, 
            "vaccinationsInitiatedRatio" : 0.618, 
            "vaccinationsCompletedRatio" : 0.538
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 829782, 
            "deaths" : 11805, 
            "positiveTests" : 796104, 
            "negativeTests" : 6482179, 
            "contactTracers" : 1240, 
            "hospitalBeds" : {
                "capacity" : 12188, 
                "currentUsageTotal" : 9587, 
                "currentUsageCovid" : 1307
            }, 
            "icuBeds" : {
                "capacity" : 1472, 
                "currentUsageTotal" : 1307, 
                "currentUsageCovid" : 297
            }, 
            "newCases" : 2760, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 7370565, 
            "vaccinationsInitiated" : 2763043, 
            "vaccinationsCompleted" : 2402940, 
            "vaccinesAdministered" : 5761364, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 829782.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-05-15", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 77.0
                    }, 
                    {
                        "date" : "2021-08-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 40.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 829782.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 829782.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 829782.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/kentucky-ky"
    }, 
    {
        "fips" : "22", 
        "country" : "US", 
        "state" : "LA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-la", 
        "long" : null, 
        "population" : 4648794, 
        "metrics" : {
            "testPositivityRatio" : 0.038, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 14.5, 
            "contactTracerCapacityRatio" : 0.24, 
            "infectionRate" : 1.2, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.568, 
            "vaccinationsCompletedRatio" : 0.499
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 780668, 
            "deaths" : 14924, 
            "positiveTests" : 714768, 
            "negativeTests" : 8341867, 
            "contactTracers" : 800, 
            "hospitalBeds" : {
                "capacity" : 12809, 
                "currentUsageTotal" : 9011, 
                "currentUsageCovid" : 202
            }, 
            "icuBeds" : {
                "capacity" : 1498, 
                "currentUsageTotal" : 1094, 
                "currentUsageCovid" : 69
            }, 
            "newCases" : 1101, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6837820, 
            "vaccinationsInitiated" : 2640605, 
            "vaccinationsCompleted" : 2317977, 
            "vaccinesAdministered" : 5505617, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 780668.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-06-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1288.0
                    }, 
                    {
                        "date" : "2020-10-07", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 2156.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 780668.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 780668.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 780668.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/louisiana-la"
    }, 
    {
        "fips" : "25", 
        "country" : "US", 
        "state" : "MA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ma", 
        "long" : null, 
        "population" : 6892503, 
        "metrics" : {
            "testPositivityRatio" : 0.055, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 74.4, 
            "contactTracerCapacityRatio" : 0.09, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : 0.891, 
            "vaccinationsCompletedRatio" : 0.739
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1005470, 
            "deaths" : 19829, 
            "positiveTests" : 1080235, 
            "negativeTests" : 33245112, 
            "contactTracers" : 2350, 
            "hospitalBeds" : {
                "capacity" : 17967, 
                "currentUsageTotal" : 15507, 
                "currentUsageCovid" : 1247
            }, 
            "icuBeds" : {
                "capacity" : 1290, 
                "currentUsageTotal" : 1101, 
                "currentUsageCovid" : 347
            }, 
            "newCases" : 7070, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 14300510, 
            "vaccinationsInitiated" : 6142783, 
            "vaccinationsCompleted" : 5094149, 
            "vaccinesAdministered" : 12591134, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1005470.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-10", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 51.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 33.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1005470.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1005470.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1005470.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/massachusetts-ma"
    }, 
    {
        "fips" : "24", 
        "country" : "US", 
        "state" : "MD", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-md", 
        "long" : null, 
        "population" : 6045680, 
        "metrics" : {
            "testPositivityRatio" : null, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : null, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : null, 
            "infectionRateCI90" : null, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.792, 
            "vaccinationsCompletedRatio" : 0.698
        }, 
        "riskLevels" : {
            "overall" : 4, 
            "testPositivityRatio" : 4, 
            "caseDensity" : 4, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 4, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 4, 
        "actuals" : {
            "cases" : 592912, 
            "deaths" : 11255, 
            "positiveTests" : 1234432, 
            "negativeTests" : 14885001, 
            "contactTracers" : 1400, 
            "hospitalBeds" : {
                "capacity" : 11722, 
                "currentUsageTotal" : 9899, 
                "currentUsageCovid" : 1398
            }, 
            "icuBeds" : {
                "capacity" : 1283, 
                "currentUsageTotal" : 951, 
                "currentUsageCovid" : 272
            }, 
            "newCases" : 1866, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 12996600, 
            "vaccinationsInitiated" : 4790175, 
            "vaccinationsCompleted" : 4218426, 
            "vaccinesAdministered" : 10132887, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1234432.0
                    }
                ]
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 14885001.0
                    }
                ]
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-08", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1158.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1234432.0
                    }, 
                    {
                        "date" : "2021-12-06", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 14885001.0
                    }
                ]
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/maryland-md"
    }, 
    {
        "fips" : "23", 
        "country" : "US", 
        "state" : "ME", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-me", 
        "long" : null, 
        "population" : 1344212, 
        "metrics" : {
            "testPositivityRatio" : 0.099, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 68.0, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.21, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.75, 
            "vaccinationsInitiatedRatio" : 0.846, 
            "vaccinationsCompletedRatio" : 0.751
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 136400, 
            "deaths" : 1441, 
            "positiveTests" : 122948, 
            "negativeTests" : 3119502, 
            "contactTracers" : 86, 
            "hospitalBeds" : {
                "capacity" : 3366, 
                "currentUsageTotal" : 2413, 
                "currentUsageCovid" : 421
            }, 
            "icuBeds" : {
                "capacity" : 365, 
                "currentUsageTotal" : 272, 
                "currentUsageCovid" : 135
            }, 
            "newCases" : 1080, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2843530, 
            "vaccinationsInitiated" : 1137397, 
            "vaccinationsCompleted" : 1009308, 
            "vaccinesAdministered" : 2425646, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 136401.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-01-08", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 41.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 136401.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 136401.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 136401.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/maine-me"
    }, 
    {
        "fips" : "26", 
        "country" : "US", 
        "state" : "MI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mi", 
        "long" : null, 
        "population" : 9986857, 
        "metrics" : {
            "testPositivityRatio" : 0.158, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 66.5, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 0.98, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.628, 
            "vaccinationsCompletedRatio" : 0.563
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1611085, 
            "deaths" : 27705, 
            "positiveTests" : 1729318, 
            "negativeTests" : 18403852, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 22544, 
                "currentUsageTotal" : 18759, 
                "currentUsageCovid" : 4178
            }, 
            "icuBeds" : {
                "capacity" : 2589, 
                "currentUsageTotal" : 2237, 
                "currentUsageCovid" : 953
            }, 
            "newCases" : 14431, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 17649650, 
            "vaccinationsInitiated" : 6271811, 
            "vaccinationsCompleted" : 5622475, 
            "vaccinesAdministered" : 13649069, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1611085.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-19", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 254.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-09", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 75.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1611085.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1611085.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1611085.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/michigan-mi"
    }, 
    {
        "fips" : "27", 
        "country" : "US", 
        "state" : "MN", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mn", 
        "long" : null, 
        "population" : 5639632, 
        "metrics" : {
            "testPositivityRatio" : 0.1, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 57.0, 
            "contactTracerCapacityRatio" : 0.06, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.708, 
            "vaccinationsCompletedRatio" : 0.649
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 979407, 
            "deaths" : 10235, 
            "positiveTests" : 1400232, 
            "negativeTests" : 17129107, 
            "contactTracers" : 1028, 
            "hospitalBeds" : {
                "capacity" : 10190, 
                "currentUsageTotal" : 8378, 
                "currentUsageCovid" : 1592
            }, 
            "icuBeds" : {
                "capacity" : 983, 
                "currentUsageTotal" : 845, 
                "currentUsageCovid" : 370
            }, 
            "newCases" : 3836, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10634050, 
            "vaccinationsInitiated" : 3992476, 
            "vaccinationsCompleted" : 3660844, 
            "vaccinesAdministered" : 8931302, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 979407.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 979407.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 979407.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 979407.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/minnesota-mn"
    }, 
    {
        "fips" : "29", 
        "country" : "US", 
        "state" : "MO", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mo", 
        "long" : null, 
        "population" : 6137428, 
        "metrics" : {
            "testPositivityRatio" : 0.123, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 49.0, 
            "contactTracerCapacityRatio" : 0.01, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.617, 
            "vaccinationsCompletedRatio" : 0.526
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 976568, 
            "deaths" : 15880, 
            "positiveTests" : 1022177, 
            "negativeTests" : 8619544, 
            "contactTracers" : 94, 
            "hospitalBeds" : {
                "capacity" : 17346, 
                "currentUsageTotal" : 14510, 
                "currentUsageCovid" : 2015
            }, 
            "icuBeds" : {
                "capacity" : 1834, 
                "currentUsageTotal" : 1612, 
                "currentUsageCovid" : 511
            }, 
            "newCases" : 1490, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 9745815, 
            "vaccinationsInitiated" : 3786258, 
            "vaccinationsCompleted" : 3229984, 
            "vaccinesAdministered" : 7939463, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 38.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-04-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 67.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/missouri-mo"
    }, 
    {
        "fips" : "69", 
        "country" : "US", 
        "state" : "MP", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mp", 
        "long" : null, 
        "population" : 53605, 
        "metrics" : {
            "testPositivityRatio" : null, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 137.0, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.15, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.795, 
            "vaccinationsCompletedRatio" : 0.72
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 4, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 2422, 
            "deaths" : 8, 
            "positiveTests" : 1161, 
            "negativeTests" : 57943, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : null, 
                "currentUsageTotal" : null, 
                "currentUsageCovid" : null
            }, 
            "icuBeds" : {
                "capacity" : null, 
                "currentUsageTotal" : null, 
                "currentUsageCovid" : null
            }, 
            "newCases" : 47, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 111160, 
            "vaccinationsInitiated" : 42618, 
            "vaccinationsCompleted" : 38581, 
            "vaccinesAdministered" : 91904, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : null, 
            "icuBeds" : null, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-11-16", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 52.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/northern_mariana_islands-mp"
    }, 
    {
        "fips" : "28", 
        "country" : "US", 
        "state" : "MS", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ms", 
        "long" : null, 
        "population" : 2976149, 
        "metrics" : {
            "testPositivityRatio" : 0.094, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 16.0, 
            "contactTracerCapacityRatio" : 0.08, 
            "infectionRate" : 1.14, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.79, 
            "vaccinationsInitiatedRatio" : 0.552, 
            "vaccinationsCompletedRatio" : 0.48
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 522455, 
            "deaths" : 10354, 
            "positiveTests" : 250852, 
            "negativeTests" : 1841119, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 8668, 
                "currentUsageTotal" : 5641, 
                "currentUsageCovid" : 282
            }, 
            "icuBeds" : {
                "capacity" : 775, 
                "currentUsageTotal" : 615, 
                "currentUsageCovid" : 78
            }, 
            "newCases" : 911, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 4573225, 
            "vaccinationsInitiated" : 1643340, 
            "vaccinationsCompleted" : 1429643, 
            "vaccinesAdministered" : 3386786, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 522455.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 522455.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 522455.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 522455.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/mississippi-ms"
    }, 
    {
        "fips" : "30", 
        "country" : "US", 
        "state" : "MT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-mt", 
        "long" : null, 
        "population" : 1068778, 
        "metrics" : {
            "testPositivityRatio" : 0.058, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 13.9, 
            "contactTracerCapacityRatio" : 0.27, 
            "infectionRate" : 0.81, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.615, 
            "vaccinationsCompletedRatio" : 0.536
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 2, 
        "actuals" : {
            "cases" : 194970, 
            "deaths" : 2878, 
            "positiveTests" : 208886, 
            "negativeTests" : 1538561, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 3019, 
                "currentUsageTotal" : 2074, 
                "currentUsageCovid" : 129
            }, 
            "icuBeds" : {
                "capacity" : 226, 
                "currentUsageTotal" : 163, 
                "currentUsageCovid" : 42
            }, 
            "newCases" : 201, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1713765, 
            "vaccinationsInitiated" : 656967, 
            "vaccinationsCompleted" : 572769, 
            "vaccinesAdministered" : 1415239, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 194970.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-15", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 208886.0
                    }
                ]
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-15", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1538566.0
                    }
                ]
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-01-23", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 36.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-15", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1538566.0
                    }, 
                    {
                        "date" : "2021-12-15", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 208886.0
                    }
                ]
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 194970.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 194970.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 194970.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/montana-mt"
    }, 
    {
        "fips" : "37", 
        "country" : "US", 
        "state" : "NC", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nc", 
        "long" : null, 
        "population" : 10488084, 
        "metrics" : {
            "testPositivityRatio" : 0.083, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 31.1, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.743, 
            "vaccinationsCompletedRatio" : 0.561
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1584898, 
            "deaths" : 19131, 
            "positiveTests" : 1558161, 
            "negativeTests" : 16517683, 
            "contactTracers" : 1215, 
            "hospitalBeds" : {
                "capacity" : 23840, 
                "currentUsageTotal" : 18957, 
                "currentUsageCovid" : 2000
            }, 
            "icuBeds" : {
                "capacity" : 2295, 
                "currentUsageTotal" : 1927, 
                "currentUsageCovid" : 442
            }, 
            "newCases" : 94, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 18510350, 
            "vaccinationsInitiated" : 7797865, 
            "vaccinationsCompleted" : 5886841, 
            "vaccinesAdministered" : 14507060, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1584898.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-08-18", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 57.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1584898.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1584898.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1584898.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/north_carolina-nc"
    }, 
    {
        "fips" : "38", 
        "country" : "US", 
        "state" : "ND", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nd", 
        "long" : null, 
        "population" : 762062, 
        "metrics" : {
            "testPositivityRatio" : 0.079, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 42.9, 
            "contactTracerCapacityRatio" : 0.31, 
            "infectionRate" : 0.9, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.74, 
            "vaccinationsInitiatedRatio" : 0.616, 
            "vaccinationsCompletedRatio" : 0.52
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 169478, 
            "deaths" : 2023, 
            "positiveTests" : 134099, 
            "negativeTests" : 1919998, 
            "contactTracers" : 500, 
            "hospitalBeds" : {
                "capacity" : 2250, 
                "currentUsageTotal" : 1781, 
                "currentUsageCovid" : 217
            }, 
            "icuBeds" : {
                "capacity" : 203, 
                "currentUsageTotal" : 151, 
                "currentUsageCovid" : 73
            }, 
            "newCases" : 274, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1190570, 
            "vaccinationsInitiated" : 469200, 
            "vaccinationsCompleted" : 396486, 
            "vaccinesAdministered" : 992801, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/north_dakota-nd"
    }, 
    {
        "fips" : "31", 
        "country" : "US", 
        "state" : "NE", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ne", 
        "long" : null, 
        "population" : 1934408, 
        "metrics" : {
            "testPositivityRatio" : 0.164, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 40.5, 
            "contactTracerCapacityRatio" : 0.26, 
            "infectionRate" : 0.97, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.656, 
            "vaccinationsCompletedRatio" : 0.592
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 326431, 
            "deaths" : 2880, 
            "positiveTests" : 312322, 
            "negativeTests" : 2186158, 
            "contactTracers" : 1000, 
            "hospitalBeds" : {
                "capacity" : 4495, 
                "currentUsageTotal" : 3408, 
                "currentUsageCovid" : 578
            }, 
            "icuBeds" : {
                "capacity" : 491, 
                "currentUsageTotal" : 431, 
                "currentUsageCovid" : 139
            }, 
            "newCases" : 776, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3352420, 
            "vaccinationsInitiated" : 1269896, 
            "vaccinationsCompleted" : 1145920, 
            "vaccinesAdministered" : 2779807, 
            "vaccinesAdministeredDemographics" : {
                "age" : {
                    "0-19" : 525411, 
                    "20-34" : 391263, 
                    "35-44" : 232659, 
                    "45-54" : 229048, 
                    "55-64" : 240299, 
                    "65-74" : 159053, 
                    "75-84" : 85697, 
                    "85_plus" : 41330, 
                    "unknown" : 17
                }, 
                "race" : {
                    "ai_an" : 17282, 
                    "asian" : 44105, 
                    "black" : 90860, 
                    "multiple" : 84658, 
                    "other" : 82484, 
                    "pacific_islander" : 1392, 
                    "unknown" : 0, 
                    "white" : 1666463
                }, 
                "ethnicity" : {
                    "hispanic" : 203281, 
                    "non-hispanic" : 1701479, 
                    "unknown" : 0
                }, 
                "sex" : {
                    "female" : 954850, 
                    "male" : 949910, 
                    "other" : 33, 
                    "unknown" : 0
                }
            }, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "0-19" : 48138, 
                    "20-34" : 162303, 
                    "35-44" : 127130, 
                    "45-54" : 123207, 
                    "55-64" : 157441, 
                    "65-74" : 145330, 
                    "75-84" : 73835, 
                    "85_plus" : 34315, 
                    "unknown" : 15
                }, 
                "race" : {
                    "ai_an" : 4251, 
                    "asian" : 26113, 
                    "black" : 29602, 
                    "other" : 46834, 
                    "pacific_islander" : 1118, 
                    "unknown" : 38051, 
                    "white" : 725745
                }, 
                "ethnicity" : {
                    "hispanic" : 69042, 
                    "non-hispanic" : 742488, 
                    "unknown" : 60184
                }, 
                "sex" : {
                    "female" : 474797, 
                    "male" : 386947, 
                    "other" : 17, 
                    "unknown" : 9970
                }
            }
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 326431.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 326431.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 326431.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 326431.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/nebraska-ne"
    }, 
    {
        "fips" : "33", 
        "country" : "US", 
        "state" : "NH", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nh", 
        "long" : null, 
        "population" : 1359711, 
        "metrics" : {
            "testPositivityRatio" : 0.12, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 90.4, 
            "contactTracerCapacityRatio" : 0.02, 
            "infectionRate" : 1.06, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 183056, 
            "deaths" : 1836, 
            "positiveTests" : 154488, 
            "negativeTests" : 2959175, 
            "contactTracers" : 140, 
            "hospitalBeds" : {
                "capacity" : 2961, 
                "currentUsageTotal" : 2420, 
                "currentUsageCovid" : 461
            }, 
            "icuBeds" : {
                "capacity" : 264, 
                "currentUsageTotal" : 227, 
                "currentUsageCovid" : 112
            }, 
            "newCases" : 1396, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 183056.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 183056.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 183056.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 183056.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/new_hampshire-nh"
    }, 
    {
        "fips" : "34", 
        "country" : "US", 
        "state" : "NJ", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nj", 
        "long" : null, 
        "population" : 8882190, 
        "metrics" : {
            "testPositivityRatio" : 0.1, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 68.0, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 1.22, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.46, 
            "vaccinationsInitiatedRatio" : 0.822, 
            "vaccinationsCompletedRatio" : 0.699
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1345717, 
            "deaths" : 28714, 
            "positiveTests" : 1324778, 
            "negativeTests" : 19537779, 
            "contactTracers" : 3000, 
            "hospitalBeds" : {
                "capacity" : 24509, 
                "currentUsageTotal" : 17217, 
                "currentUsageCovid" : 1970
            }, 
            "icuBeds" : {
                "capacity" : 3016, 
                "currentUsageTotal" : 1374, 
                "currentUsageCovid" : 324
            }, 
            "newCases" : 7345, 
            "newDeaths" : 6, 
            "vaccinesDistributed" : 18174935, 
            "vaccinationsInitiated" : 7305259, 
            "vaccinationsCompleted" : 6204545, 
            "vaccinesAdministered" : 14523045, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/new_jersey-nj"
    }, 
    {
        "fips" : "35", 
        "country" : "US", 
        "state" : "NM", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nm", 
        "long" : null, 
        "population" : 2096829, 
        "metrics" : {
            "testPositivityRatio" : 0.138, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 47.8, 
            "contactTracerCapacityRatio" : 0.07, 
            "infectionRate" : 0.87, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.796, 
            "vaccinationsCompletedRatio" : 0.656
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 336790, 
            "deaths" : 5579, 
            "positiveTests" : 589922, 
            "negativeTests" : 3929943, 
            "contactTracers" : 375, 
            "hospitalBeds" : {
                "capacity" : 4357, 
                "currentUsageTotal" : 3136, 
                "currentUsageCovid" : 655
            }, 
            "icuBeds" : {
                "capacity" : 466, 
                "currentUsageTotal" : 409, 
                "currentUsageCovid" : 193
            }, 
            "newCases" : 1173, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 3781105, 
            "vaccinationsInitiated" : 1668623, 
            "vaccinationsCompleted" : 1376236, 
            "vaccinesAdministered" : 3362938, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 336790.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 336790.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 336790.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-18", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 336790.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/new_mexico-nm"
    }, 
    {
        "fips" : "32", 
        "country" : "US", 
        "state" : "NV", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-nv", 
        "long" : null, 
        "population" : 3080156, 
        "metrics" : {
            "testPositivityRatio" : 0.093, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 24.1, 
            "contactTracerCapacityRatio" : 0.16, 
            "infectionRate" : 1.09, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.685, 
            "vaccinationsCompletedRatio" : 0.559
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 483286, 
            "deaths" : 8278, 
            "positiveTests" : 613031, 
            "negativeTests" : 4266898, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 8334, 
                "currentUsageTotal" : 6711, 
                "currentUsageCovid" : 691
            }, 
            "icuBeds" : {
                "capacity" : 821, 
                "currentUsageTotal" : 693, 
                "currentUsageCovid" : 169
            }, 
            "newCases" : 1148, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5012910, 
            "vaccinationsInitiated" : 2109579, 
            "vaccinationsCompleted" : 1722158, 
            "vaccinesAdministered" : 4205214, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 483286.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 483286.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 483286.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 483286.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/nevada-nv"
    }, 
    {
        "fips" : "36", 
        "country" : "US", 
        "state" : "NY", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ny", 
        "long" : null, 
        "population" : 19453561, 
        "metrics" : {
            "testPositivityRatio" : 0.077, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 83.0, 
            "contactTracerCapacityRatio" : 0.12, 
            "infectionRate" : 1.23, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.77, 
            "vaccinationsInitiatedRatio" : 0.822, 
            "vaccinationsCompletedRatio" : 0.71
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 2956489, 
            "deaths" : 58097, 
            "positiveTests" : 3185652, 
            "negativeTests" : 65546830, 
            "contactTracers" : 9620, 
            "hospitalBeds" : {
                "capacity" : 47594, 
                "currentUsageTotal" : 38834, 
                "currentUsageCovid" : 4323
            }, 
            "icuBeds" : {
                "capacity" : 4720, 
                "currentUsageTotal" : 3619, 
                "currentUsageCovid" : 742
            }, 
            "newCases" : 28260, 
            "newDeaths" : 60, 
            "vaccinesDistributed" : 38024295, 
            "vaccinationsInitiated" : 15987705, 
            "vaccinationsCompleted" : 13818337, 
            "vaccinesAdministered" : 33116325, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-03-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 20184.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/new_york-ny"
    }, 
    {
        "fips" : "39", 
        "country" : "US", 
        "state" : "OH", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-oh", 
        "long" : null, 
        "population" : 11689100, 
        "metrics" : {
            "testPositivityRatio" : 0.152, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 80.3, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.82, 
            "vaccinationsInitiatedRatio" : 0.599, 
            "vaccinationsCompletedRatio" : 0.548
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1847140, 
            "deaths" : 28028, 
            "positiveTests" : 1553503, 
            "negativeTests" : 16789532, 
            "contactTracers" : 1659, 
            "hospitalBeds" : {
                "capacity" : 31370, 
                "currentUsageTotal" : 24833, 
                "currentUsageCovid" : 5049
            }, 
            "icuBeds" : {
                "capacity" : 3924, 
                "currentUsageTotal" : 3220, 
                "currentUsageCovid" : 1209
            }, 
            "newCases" : 7639, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 19524215, 
            "vaccinationsInitiated" : 7002102, 
            "vaccinationsCompleted" : 6404778, 
            "vaccinesAdministered" : 15496132, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 138.0
                    }, 
                    {
                        "date" : "2020-10-21", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 66.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/ohio-oh"
    }, 
    {
        "fips" : "40", 
        "country" : "US", 
        "state" : "OK", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ok", 
        "long" : null, 
        "population" : 3956971, 
        "metrics" : {
            "testPositivityRatio" : 0.112, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 16.5, 
            "contactTracerCapacityRatio" : 0.21, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.65, 
            "vaccinationsCompletedRatio" : 0.53
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 685906, 
            "deaths" : 11435, 
            "positiveTests" : 639386, 
            "negativeTests" : 2702310, 
            "contactTracers" : 700, 
            "hospitalBeds" : {
                "capacity" : 9434, 
                "currentUsageTotal" : 6909, 
                "currentUsageCovid" : 777
            }, 
            "icuBeds" : {
                "capacity" : 868, 
                "currentUsageTotal" : 731, 
                "currentUsageCovid" : 224
            }, 
            "newCases" : 1327, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 6184920, 
            "vaccinationsInitiated" : 2573185, 
            "vaccinationsCompleted" : 2096846, 
            "vaccinesAdministered" : 5185919, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 685906.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-11-07", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 4507.0
                    }, 
                    {
                        "date" : "2021-04-07", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1764.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-02", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 54.0
                    }, 
                    {
                        "date" : "2021-09-15", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 231.0
                    }, 
                    {
                        "date" : "2021-10-20", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1131.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 685906.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 685906.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 685906.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/oklahoma-ok"
    }, 
    {
        "fips" : "41", 
        "country" : "US", 
        "state" : "OR", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-or", 
        "long" : null, 
        "population" : 4217737, 
        "metrics" : {
            "testPositivityRatio" : 0.037, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 17.3, 
            "contactTracerCapacityRatio" : 0.18, 
            "infectionRate" : 1.0, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.732, 
            "vaccinationsCompletedRatio" : 0.659
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 405292, 
            "deaths" : 5531, 
            "positiveTests" : 356655, 
            "negativeTests" : 5587611, 
            "contactTracers" : 656, 
            "hospitalBeds" : {
                "capacity" : 6934, 
                "currentUsageTotal" : 5550, 
                "currentUsageCovid" : 475
            }, 
            "icuBeds" : {
                "capacity" : 781, 
                "currentUsageTotal" : 568, 
                "currentUsageCovid" : 92
            }, 
            "newCases" : 1063, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 8399265, 
            "vaccinationsInitiated" : 3088026, 
            "vaccinationsCompleted" : 2779428, 
            "vaccinesAdministered" : 6640093, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 405292.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-02-24", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 33.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 405292.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 405292.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 405292.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/oregon-or"
    }, 
    {
        "fips" : "42", 
        "country" : "US", 
        "state" : "PA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-pa", 
        "long" : null, 
        "population" : 12801989, 
        "metrics" : {
            "testPositivityRatio" : 0.133, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 58.6, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.05, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.84, 
            "vaccinationsInitiatedRatio" : 0.849, 
            "vaccinationsCompletedRatio" : 0.608
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1890259, 
            "deaths" : 35398, 
            "positiveTests" : 1836041, 
            "negativeTests" : 19883707, 
            "contactTracers" : 1508, 
            "hospitalBeds" : {
                "capacity" : 30485, 
                "currentUsageTotal" : 25904, 
                "currentUsageCovid" : 4945
            }, 
            "icuBeds" : {
                "capacity" : 3706, 
                "currentUsageTotal" : 3099, 
                "currentUsageCovid" : 955
            }, 
            "newCases" : 7231, 
            "newDeaths" : 20, 
            "vaccinesDistributed" : 25066285, 
            "vaccinationsInitiated" : 10865741, 
            "vaccinationsCompleted" : 7789137, 
            "vaccinesAdministered" : 19604078, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "10-14" : 239072, 
                    "100-104" : 4148, 
                    "105_plus" : 450, 
                    "15-19" : 371277, 
                    "20-24" : 397051, 
                    "25-29" : 392341, 
                    "30-34" : 440873, 
                    "35-39" : 460347, 
                    "40-44" : 457730, 
                    "45-49" : 447074, 
                    "5-9" : 126607, 
                    "50-54" : 529825, 
                    "55-59" : 595717, 
                    "60-64" : 662976, 
                    "65-69" : 636449, 
                    "70-74" : 532238, 
                    "75-79" : 372039, 
                    "80-84" : 251531, 
                    "85-89" : 161025, 
                    "90-94" : 89372, 
                    "95-99" : 28198
                }, 
                "race" : {
                    "ai_an" : 8488, 
                    "asian" : 135523, 
                    "black" : 355951, 
                    "multiple_other" : 976325, 
                    "pacific_islander" : 15499, 
                    "unknown" : 561194, 
                    "white" : 5143598
                }, 
                "ethnicity" : {
                    "hispanic" : 377721, 
                    "non-hispanic" : 5328317, 
                    "unknown" : 1490540
                }, 
                "sex" : {
                    "female" : 3816700, 
                    "male" : 3281423, 
                    "unknown" : 98455
                }
            }
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1577.0
                    }, 
                    {
                        "date" : "2021-11-13", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 21226.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/pennsylvania-pa"
    }, 
    {
        "fips" : "72", 
        "country" : "US", 
        "state" : "PR", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-pr", 
        "long" : null, 
        "population" : 3193694, 
        "metrics" : {
            "testPositivityRatio" : 0.087, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 28.4, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 1.82, 
            "infectionRateCI90" : 0.13, 
            "icuCapacityRatio" : 0.72, 
            "vaccinationsInitiatedRatio" : 0.877, 
            "vaccinationsCompletedRatio" : 0.764
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 3, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 229482, 
            "deaths" : 3285, 
            "positiveTests" : 125166, 
            "negativeTests" : 1811968, 
            "contactTracers" : 10, 
            "hospitalBeds" : {
                "capacity" : 9302, 
                "currentUsageTotal" : 5823, 
                "currentUsageCovid" : 55
            }, 
            "icuBeds" : {
                "capacity" : 665, 
                "currentUsageTotal" : 479, 
                "currentUsageCovid" : 8
            }, 
            "newCases" : 2747, 
            "newDeaths" : 1, 
            "vaccinesDistributed" : 6244110, 
            "vaccinationsInitiated" : 2802119, 
            "vaccinationsCompleted" : 2438444, 
            "vaccinesAdministered" : 5760013, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-06-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 485.0
                    }, 
                    {
                        "date" : "2020-07-06", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 669.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/puerto_rico-pr"
    }, 
    {
        "fips" : "44", 
        "country" : "US", 
        "state" : "RI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ri", 
        "long" : null, 
        "population" : 1059361, 
        "metrics" : {
            "testPositivityRatio" : 0.055, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 100.8, 
            "contactTracerCapacityRatio" : 0.04, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.88, 
            "vaccinationsInitiatedRatio" : 0.87, 
            "vaccinationsCompletedRatio" : 0.756
        }, 
        "riskLevels" : {
            "overall" : 5, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 5, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 208753, 
            "deaths" : 2992, 
            "positiveTests" : 249060, 
            "negativeTests" : 5460305, 
            "contactTracers" : 200, 
            "hospitalBeds" : {
                "capacity" : 2360, 
                "currentUsageTotal" : 2092, 
                "currentUsageCovid" : 263
            }, 
            "icuBeds" : {
                "capacity" : 145, 
                "currentUsageTotal" : 128, 
                "currentUsageCovid" : 35
            }, 
            "newCases" : 1197, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 2214015, 
            "vaccinationsInitiated" : 921585, 
            "vaccinationsCompleted" : 801006, 
            "vaccinesAdministered" : 1890014, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 208753.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-01", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1183.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 208753.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 208753.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 208753.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/rhode_island-ri"
    }, 
    {
        "fips" : "45", 
        "country" : "US", 
        "state" : "SC", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-sc", 
        "long" : null, 
        "population" : 5148714, 
        "metrics" : {
            "testPositivityRatio" : 0.064, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 19.8, 
            "contactTracerCapacityRatio" : 0.15, 
            "infectionRate" : 1.11, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.62, 
            "vaccinationsCompletedRatio" : 0.527
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 936207, 
            "deaths" : 14461, 
            "positiveTests" : 972751, 
            "negativeTests" : 9198723, 
            "contactTracers" : 775, 
            "hospitalBeds" : {
                "capacity" : 11610, 
                "currentUsageTotal" : 8947, 
                "currentUsageCovid" : 531
            }, 
            "icuBeds" : {
                "capacity" : 1313, 
                "currentUsageTotal" : 961, 
                "currentUsageCovid" : 153
            }, 
            "newCases" : 1327, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 8727815, 
            "vaccinationsInitiated" : 3191448, 
            "vaccinationsCompleted" : 2711970, 
            "vaccinesAdministered" : 6556777, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 936207.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-04-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 40.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 936207.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 936207.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 936207.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/south_carolina-sc"
    }, 
    {
        "fips" : "46", 
        "country" : "US", 
        "state" : "SD", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-sd", 
        "long" : null, 
        "population" : 884659, 
        "metrics" : {
            "testPositivityRatio" : 0.12, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 38.9, 
            "contactTracerCapacityRatio" : 0.2, 
            "infectionRate" : 0.96, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.7, 
            "vaccinationsInitiatedRatio" : 0.697, 
            "vaccinationsCompletedRatio" : 0.564
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 173655, 
            "deaths" : 2433, 
            "positiveTests" : 117650, 
            "negativeTests" : 811642, 
            "contactTracers" : 350, 
            "hospitalBeds" : {
                "capacity" : 2766, 
                "currentUsageTotal" : 1738, 
                "currentUsageCovid" : 234
            }, 
            "icuBeds" : {
                "capacity" : 247, 
                "currentUsageTotal" : 172, 
                "currentUsageCovid" : 78
            }, 
            "newCases" : 398, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1561815, 
            "vaccinationsInitiated" : 616427, 
            "vaccinationsCompleted" : 498915, 
            "vaccinesAdministered" : 1227259, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 173655.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 173655.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 173655.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 173655.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/south_dakota-sd"
    }, 
    {
        "fips" : "47", 
        "country" : "US", 
        "state" : "TN", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-tn", 
        "long" : null, 
        "population" : 6829174, 
        "metrics" : {
            "testPositivityRatio" : 0.079, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 25.6, 
            "contactTracerCapacityRatio" : 0.14, 
            "infectionRate" : 1.1, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.73, 
            "vaccinationsInitiatedRatio" : 0.581, 
            "vaccinationsCompletedRatio" : 0.509
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1318411, 
            "deaths" : 17828, 
            "positiveTests" : 1100173, 
            "negativeTests" : 8307171, 
            "contactTracers" : 1226, 
            "hospitalBeds" : {
                "capacity" : 19955, 
                "currentUsageTotal" : 14598, 
                "currentUsageCovid" : 1239
            }, 
            "icuBeds" : {
                "capacity" : 2353, 
                "currentUsageTotal" : 1724, 
                "currentUsageCovid" : 322
            }, 
            "newCases" : 2412, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 10758100, 
            "vaccinationsInitiated" : 3969670, 
            "vaccinationsCompleted" : 3475510, 
            "vaccinesAdministered" : 8695905, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1318411.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-05-01", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1275.0
                    }, 
                    {
                        "date" : "2020-05-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 156.0
                    }, 
                    {
                        "date" : "2020-06-02", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 1256.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-17", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 173.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1318411.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1318411.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1318411.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/tennessee-tn"
    }, 
    {
        "fips" : "48", 
        "country" : "US", 
        "state" : "TX", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-tx", 
        "long" : null, 
        "population" : 28995881, 
        "metrics" : {
            "testPositivityRatio" : 0.078, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 20.3, 
            "contactTracerCapacityRatio" : 0.13, 
            "infectionRate" : 1.16, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.86, 
            "vaccinationsInitiatedRatio" : 0.659, 
            "vaccinationsCompletedRatio" : 0.564
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 3
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 4385276, 
            "deaths" : 75392, 
            "positiveTests" : 4621099, 
            "negativeTests" : 35387302, 
            "contactTracers" : 3722, 
            "hospitalBeds" : {
                "capacity" : 66822, 
                "currentUsageTotal" : 51744, 
                "currentUsageCovid" : 3644
            }, 
            "icuBeds" : {
                "capacity" : 6847, 
                "currentUsageTotal" : 5885, 
                "currentUsageCovid" : 946
            }, 
            "newCases" : 6536, 
            "newDeaths" : 21, 
            "vaccinesDistributed" : 51369975, 
            "vaccinationsInitiated" : 19112545, 
            "vaccinationsCompleted" : 16353680, 
            "vaccinesAdministered" : 39561003, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-03-18", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 60.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/texas-tx"
    }, 
    {
        "fips" : "49", 
        "country" : "US", 
        "state" : "UT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-ut", 
        "long" : null, 
        "population" : 3205958, 
        "metrics" : {
            "testPositivityRatio" : 0.09, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 31.3, 
            "contactTracerCapacityRatio" : null, 
            "infectionRate" : 0.93, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : null, 
            "vaccinationsInitiatedRatio" : 0.665, 
            "vaccinationsCompletedRatio" : 0.579
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 4, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 4
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 617840, 
            "deaths" : 3704, 
            "positiveTests" : 690534, 
            "negativeTests" : 5279235, 
            "contactTracers" : 1200, 
            "hospitalBeds" : {
                "capacity" : 5571, 
                "currentUsageTotal" : 3378, 
                "currentUsageCovid" : 538
            }, 
            "icuBeds" : {
                "capacity" : 616, 
                "currentUsageTotal" : 421, 
                "currentUsageCovid" : 188
            }, 
            "newCases" : 1016, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 5313020, 
            "vaccinationsInitiated" : 2131885, 
            "vaccinationsCompleted" : 1856395, 
            "vaccinesAdministered" : 4381911, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 617840.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 617840.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 617840.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 617840.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/utah-ut"
    }, 
    {
        "fips" : "51", 
        "country" : "US", 
        "state" : "VA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-va", 
        "long" : null, 
        "population" : 8535519, 
        "metrics" : {
            "testPositivityRatio" : 0.096, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 32.3, 
            "contactTracerCapacityRatio" : 0.11, 
            "infectionRate" : 1.18, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.76, 
            "vaccinationsInitiatedRatio" : 0.779, 
            "vaccinationsCompletedRatio" : 0.674
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1013390, 
            "deaths" : 15083, 
            "positiveTests" : 1268078, 
            "negativeTests" : 10671468, 
            "contactTracers" : 1547, 
            "hospitalBeds" : {
                "capacity" : 17970, 
                "currentUsageTotal" : 13722, 
                "currentUsageCovid" : 1460
            }, 
            "icuBeds" : {
                "capacity" : 1919, 
                "currentUsageTotal" : 1453, 
                "currentUsageCovid" : 339
            }, 
            "newCases" : 3457, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 16573985, 
            "vaccinationsInitiated" : 6650482, 
            "vaccinationsCompleted" : 5752388, 
            "vaccinesAdministered" : 14058525, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1013390.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1013390.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1013390.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1013390.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/virginia-va"
    }, 
    {
        "fips" : "50", 
        "country" : "US", 
        "state" : "VT", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-vt", 
        "long" : null, 
        "population" : 623989, 
        "metrics" : {
            "testPositivityRatio" : 0.046, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 65.2, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 0.99, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.69, 
            "vaccinationsInitiatedRatio" : 0.881, 
            "vaccinationsCompletedRatio" : 0.765
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 58695, 
            "deaths" : 452, 
            "positiveTests" : 77842, 
            "negativeTests" : 2831192, 
            "contactTracers" : 53, 
            "hospitalBeds" : {
                "capacity" : 1228, 
                "currentUsageTotal" : 848, 
                "currentUsageCovid" : 60
            }, 
            "icuBeds" : {
                "capacity" : 98, 
                "currentUsageTotal" : 68, 
                "currentUsageCovid" : 19
            }, 
            "newCases" : 448, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 1385640, 
            "vaccinationsInitiated" : 549807, 
            "vaccinationsCompleted" : 477293, 
            "vaccinesAdministered" : 1215357, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-06-04", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 36.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/vermont-vt"
    }, 
    {
        "fips" : "53", 
        "country" : "US", 
        "state" : "WA", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wa", 
        "long" : null, 
        "population" : 7614893, 
        "metrics" : {
            "testPositivityRatio" : 0.067, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 18.7, 
            "contactTracerCapacityRatio" : 0.3, 
            "infectionRate" : 1.03, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.8, 
            "vaccinationsInitiatedRatio" : 0.747, 
            "vaccinationsCompletedRatio" : 0.673
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 1, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 1
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 803087, 
            "deaths" : 9725, 
            "positiveTests" : 630335, 
            "negativeTests" : 9314999, 
            "contactTracers" : 2122, 
            "hospitalBeds" : {
                "capacity" : 12810, 
                "currentUsageTotal" : 10401, 
                "currentUsageCovid" : 858
            }, 
            "icuBeds" : {
                "capacity" : 1211, 
                "currentUsageTotal" : 969, 
                "currentUsageCovid" : 165
            }, 
            "newCases" : 2062, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 14944345, 
            "vaccinationsInitiated" : 5690389, 
            "vaccinationsCompleted" : 5123970, 
            "vaccinesAdministered" : 12197481, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 803098.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-14", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 630336.0
                    }
                ]
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-14", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 9314999.0
                    }
                ]
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-08-03", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 4989.0
                    }
                ]
            }, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-12-29", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 133.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-14", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 630336.0
                    }, 
                    {
                        "date" : "2021-12-14", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 9314999.0
                    }
                ]
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 803098.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 803098.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 803098.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/washington-wa"
    }, 
    {
        "fips" : "55", 
        "country" : "US", 
        "state" : "WI", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wi", 
        "long" : null, 
        "population" : 5822434, 
        "metrics" : {
            "testPositivityRatio" : 0.122, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 73.9, 
            "contactTracerCapacityRatio" : 0.03, 
            "infectionRate" : 1.13, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.7, 
            "vaccinationsInitiatedRatio" : 0.675, 
            "vaccinationsCompletedRatio" : 0.614
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 2, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 1053707, 
            "deaths" : 10667, 
            "positiveTests" : 1088105, 
            "negativeTests" : 12395086, 
            "contactTracers" : 600, 
            "hospitalBeds" : {
                "capacity" : 13379, 
                "currentUsageTotal" : 9773, 
                "currentUsageCovid" : 1816
            }, 
            "icuBeds" : {
                "capacity" : 1567, 
                "currentUsageTotal" : 1103, 
                "currentUsageCovid" : 456
            }, 
            "newCases" : 4819, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 9891495, 
            "vaccinationsInitiated" : 3931756, 
            "vaccinationsCompleted" : 3577548, 
            "vaccinesAdministered" : 8881565, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : {
                "age" : {
                    "12-15" : 149672, 
                    "12-17" : 248896, 
                    "16-17" : 80309, 
                    "18-24" : 304050, 
                    "25-34" : 448165, 
                    "35-44" : 480131, 
                    "45-54" : 485073, 
                    "5-11" : 91325, 
                    "55-64" : 626474, 
                    "65_plus" : 893363
                }, 
                "race" : {
                    "asian" : 117808, 
                    "black" : 168048, 
                    "native_american" : 35721, 
                    "other" : 259112, 
                    "unknown" : 144253, 
                    "white" : 2852547
                }, 
                "ethnicity" : {
                    "hispanic" : 218926, 
                    "non-hispanic" : 3217367, 
                    "unknown" : 93312
                }, 
                "sex" : {
                    "female" : 1886236, 
                    "male" : 1674724, 
                    "unknown" : 16529
                }
            }
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1053707.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-05-27", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 49.0
                    }
                ]
            }, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1053707.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1053707.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 1053707.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/wisconsin-wi"
    }, 
    {
        "fips" : "54", 
        "country" : "US", 
        "state" : "WV", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wv", 
        "long" : null, 
        "population" : 1792147, 
        "metrics" : {
            "testPositivityRatio" : 0.118, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 58.7, 
            "contactTracerCapacityRatio" : 0.05, 
            "infectionRate" : 1.04, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.85, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "riskLevels" : {
            "overall" : 3, 
            "testPositivityRatio" : 2, 
            "caseDensity" : 3, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 1, 
            "icuCapacityRatio" : 2
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 314791, 
            "deaths" : 5164, 
            "positiveTests" : 345705, 
            "negativeTests" : 3833090, 
            "contactTracers" : 248, 
            "hospitalBeds" : {
                "capacity" : 5847, 
                "currentUsageTotal" : 4788, 
                "currentUsageCovid" : 676
            }, 
            "icuBeds" : {
                "capacity" : 659, 
                "currentUsageTotal" : 561, 
                "currentUsageCovid" : 214
            }, 
            "newCases" : 901, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : null, 
            "newDeaths" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2021-03-31", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 36.0
                    }
                ]
            }, 
            "vaccinesDistributed" : null, 
            "vaccinationsInitiated" : null, 
            "vaccinationsCompleted" : null, 
            "vaccinesAdministered" : null, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/west_virginia-wv"
    }, 
    {
        "fips" : "56", 
        "country" : "US", 
        "state" : "WY", 
        "county" : null, 
        "level" : "state", 
        "lat" : null, 
        "locationId" : "iso1:us#iso2:us-wy", 
        "long" : null, 
        "population" : 578759, 
        "metrics" : {
            "testPositivityRatio" : 0.05, 
            "testPositivityRatioDetails" : {
                "source" : "other"
            }, 
            "caseDensity" : 17.8, 
            "contactTracerCapacityRatio" : 0.1, 
            "infectionRate" : 0.85, 
            "infectionRateCI90" : 0.1, 
            "icuCapacityRatio" : 0.48, 
            "vaccinationsInitiatedRatio" : 0.552, 
            "vaccinationsCompletedRatio" : 0.47
        }, 
        "riskLevels" : {
            "overall" : 2, 
            "testPositivityRatio" : 1, 
            "caseDensity" : 2, 
            "contactTracerCapacityRatio" : 2, 
            "infectionRate" : 0, 
            "icuCapacityRatio" : 0
        }, 
        "cdcTransmissionLevel" : 3, 
        "actuals" : {
            "cases" : 113584, 
            "deaths" : 1502, 
            "positiveTests" : 87638, 
            "negativeTests" : 1105664, 
            "contactTracers" : 50, 
            "hospitalBeds" : {
                "capacity" : 1743, 
                "currentUsageTotal" : 854, 
                "currentUsageCovid" : 104
            }, 
            "icuBeds" : {
                "capacity" : 135, 
                "currentUsageTotal" : 65, 
                "currentUsageCovid" : 31
            }, 
            "newCases" : 106, 
            "newDeaths" : 0, 
            "vaccinesDistributed" : 847775, 
            "vaccinationsInitiated" : 319464, 
            "vaccinationsCompleted" : 272222, 
            "vaccinesAdministered" : 670528, 
            "vaccinesAdministeredDemographics" : null, 
            "vaccinationsInitiatedDemographics" : null
        }, 
        "annotations" : {
            "cases" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 113584.0
                    }
                ]
            }, 
            "deaths" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : []
            }, 
            "positiveTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "negativeTests" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "contactTracers" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "hospitalBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "icuBeds" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "newCases" : {
                "sources" : [], 
                "anomalies" : [
                    {
                        "date" : "2020-09-16", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 128.0
                    }, 
                    {
                        "date" : "2020-11-06", 
                        "type" : "zscore_outlier", 
                        "original_observation" : 996.0
                    }
                ]
            }, 
            "newDeaths" : null, 
            "vaccinesDistributed" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiated" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsCompleted" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinesAdministered" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://covid.cdc.gov/covid-data-tracker/#vaccinations", 
                        "name" : "Centers for Disease Control and Prevention"
                    }
                ], 
                "anomalies" : []
            }, 
            "testPositivityRatio" : {
                "sources" : [
                    {
                        "type" : "HHSTesting", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "caseDensity" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 113584.0
                    }
                ]
            }, 
            "contactTracerCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "TestAndTrace", 
                        "url" : null, 
                        "name" : null
                    }
                ], 
                "anomalies" : []
            }, 
            "infectionRate" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 113584.0
                    }
                ]
            }, 
            "infectionRateCI90" : {
                "sources" : [
                    {
                        "type" : "NYTimes", 
                        "url" : "https://github.com/nytimes/covid-19-data", 
                        "name" : "The New York Times"
                    }
                ], 
                "anomalies" : [
                    {
                        "date" : "2021-12-17", 
                        "type" : "cumulative_tail_truncated", 
                        "original_observation" : 113584.0
                    }
                ]
            }, 
            "icuCapacityRatio" : {
                "sources" : [
                    {
                        "type" : "other", 
                        "url" : "https://healthdata.gov/Hospital/COVID-19-Reported-Patient-Impact-and-Hospital-Capa/g62h-syeh", 
                        "name" : "Department of Health and Human Services"
                    }
                ], 
                "anomalies" : []
            }, 
            "vaccinationsInitiatedRatio" : null, 
            "vaccinationsCompletedRatio" : null
        }, 
        "lastUpdatedDate" : "2021-12-20", 
        "url" : "https://covidactnow.org/us/wyoming-wy"
    }
]
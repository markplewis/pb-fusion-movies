// See: https://secure.tgam.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/using-environment-secrets.md

const keys = {
  tgamEmailMaestroDev: "AQICAHjJZ2XvK7C8Y5damfjDyBXrs+PBvCvn5SSnh6FP3hC1LwEJmmwe97X0y1aqb0DR21QrAAAAZTBjBgkqhkiG9w0BBwagVjBUAgEAME8GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMBZPhwfYutqcVTPC8AgEQgCJFLZbLugKhxwngbuDwVeFn7VlcwMj5L3XvOLzmNxt1+gFO",
  tgamEmailMaestroProd: "AQICAHjJZ2XvK7C8Y5damfjDyBXrs+PBvCvn5SSnh6FP3hC1LwEGrj4GpVTFe+np5NuQZDpMAAAAZTBjBgkqhkiG9w0BBwagVjBUAgEAME8GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMDlvUl6to2xmtJoDgAgEQgCIc3GCFQkc8WxZ/LtdWevZcc3PVX9INQJPmcjLh0CbEKBS2",
  gmailEmailMaestroDev: "AQICAHjJZ2XvK7C8Y5damfjDyBXrs+PBvCvn5SSnh6FP3hC1LwFy4fuCr7nPwVwV1re/ETVMAAAAZjBkBgkqhkiG9w0BBwagVzBVAgEAMFAGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMQMErvNrmbe9AqpCQAgEQgCN3TeQQTZCNpP/vnjpvjs+o7RFQHiYPsn8dnNoyJ07S1UJKLw==",
  gmailEmailOld: "AQICAHgyNKRdzYgo1eJ1oDrgP0Snq4OK+7a2yy0q9TqLGkc7oAGmZ/VtyHXuH7mRZzzoqsuSAAAAZjBkBgkqhkiG9w0BBwagVzBVAgEAMFAGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMYE/Gk5eN2A43ujFRAgEQgCM9WTZXGkksWpYDoru1Rp3fp0Jo/vivPTGYRXGP5+4AS8R9UQ=="
}

export default {
  OMDB_API_KEY: `%{${keys.tgamEmailMaestroDev}}`
}
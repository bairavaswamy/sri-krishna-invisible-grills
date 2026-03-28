import { getIds } from "./idGenerator";


export const offerSchema = (
  location: string,
  service: string,
  url: string
) => {
  const ids = getIds(url, service, location);

  return{
  "@context": "https://schema.org",
  "@type": "Offer",
  "@id": ids.offerId,

  name: `${service} Service Offer in ${location}`,

  url:url,

  // priceCurrency: "INR",

  // price:"150",  

  // ✅ Instead of fake fixed pricing
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "INR",
    minPrice: "16",
    maxPrice: "200",
    unitText: "per sq ft"
  },

  availability: "https://schema.org/InStock",
  
  areaServed: {
    "@type": "City",
    name: location
  },


  eligibleRegion: {
    "@type": "Place",
    name: location
  },

  itemOffered: {
    "@id": ids.serviceId,

    // provider: {
    //   "@id": `${url}#localbusiness`
    // }
  },

  seller: {
    "@id": `${url}#localbusiness`
  },

  businessFunction: "https://schema.org/Sell",

  category: "Home Safety Installation Services",

  validFrom: "2026-03-20",

  offeredBy: {
    "@id": `${url}#localbusiness`
  },
  /* ✅ FIX: SHIPPING (required for product results) */
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "INR"
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "IN"
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 1,
          unitCode: "d"
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 3,
          unitCode: "d"
        }
      }
    },

    /* ✅ FIX: RETURN POLICY */
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnBySeller",
      returnFees: "https://schema.org/FreeReturn"
    }

}};
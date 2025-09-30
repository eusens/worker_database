const sampleData = {
  products: [
    {
      "name": "6ES7 193-6BP20-0BA0",
      "slug": "6ES7193-6BP20-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP BU15-P16+A10+2B",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9488.webp"
      ],
      "price": 11.43,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 244,
      "isFeatured": true,
      "banner": '/images/banner-2.jpg',
      "details": "SIMATIC ET 200SP BU15-P16+A10+2B Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 214-1BG40-0XB0",
      "slug": "6ES7214-1BG40-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 CPU 1214C AC/DC/Relay",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9466.webp"
      ],
      "price": 237.38,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 4,
      "isFeatured": true,
      "banner": '/images/banner-1.jpg',
      "details": "SIMATIC S7-1200 CPU 1214C AC/DC/Relay Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 223-1BH32-0XB0",
      "slug": "6ES7223-1BH32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1223 8 DI DC 24V Sink/Source 8 DO Transistor 0.5 A",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9489.webp"
      ],
      "price": 108.89,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 6,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1223 8 DI DC 24V Sink/Source 8 DO Transistor 0.5 A Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 223-1PL32-0XB0",
      "slug": "6ES7223-1PL32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1223 16 DI DC 24V Sink/Source 16 DO Relay 2A",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9485.webp"
      ],
      "price": 172.04,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 9,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1223 16 DI DC 24V Sink/Source 16 DO Relay 2A Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 232-4HD32-0XB0",
      "slug": "6ES7232-4HD32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1232 4 AO +/-10V 14BIT or 0-20mA/4-20mA 13BIT",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9446.webp"
      ],
      "price": 237.38,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 14,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1232 4 AO +/-10V 14BIT or 0-20mA/4-20mA 13BIT Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 234-4HE32-0XB0",
      "slug": "6ES7234-4HE32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1234 4 AI/2 AO +/-10V 14BIT or 0-20mA/4-20mA 13BIT",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9450.webp"
      ],
      "price": 211.87,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 27,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1234 4 AI/2 AO +/-10V 14BIT or 0-20mA/4-20mA 13BIT Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 241-1CH32-0XB0",
      "slug": "6ES7241-1CH32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 CM 1241 RS422/485",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9486.webp"
      ],
      "price": 82.83,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 1,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 CM 1241 RS422/485 Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 972-0BA52-0XA0",
      "slug": "6ES7972-0BA52-0XA0",
      "category": "Siemens",
      "description": "SIMATIC PROFIBUS Anschlussstecker 12 MBit/s 90\u00b0",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9445.webp"
      ],
      "price": 23.15,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 23,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC PROFIBUS Anschlussstecker 12 MBit/s 90\u00b0 Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6EP1 436-2BA10",
      "slug": "6EP1436-2BA10",
      "category": "Siemens",
      "description": "SITOP PSU300S DC 24V/20A",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9465.webp"
      ],
      "price": 141.44,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 2,
      "isFeatured": true,
      "banner": null,
      "details": "SITOP PSU300S DC 24V/20A Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 136-6DC00-0CA0",
      "slug": "6ES7136-6DC00-0CA0",
      "category": "Siemens",
      "description": "SIMATIC DP F-DQ 8x24VDC/0.5A PP HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9449.webp"
      ],
      "price": 165.67,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 2,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP F-DQ 8x24VDC/0.5A PP HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 315-2AH14-0AB0",
      "slug": "6ES7315-2AH14-0AB0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 CPU 315-2 DP",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9448.webp"
      ],
      "price": 1152.0,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 6,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 CPU 315-2 DP Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 321-1BH02-0AA0",
      "slug": "6ES7321-1BH02-0AA0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 SM 321 16 DI DC 24V",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9464.webp"
      ],
      "price": 123.75,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 5,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 SM 321 16 DI DC 24V Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 322-1BH01-0AA0",
      "slug": "6ES7322-1BH01-0AA0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 SM 322 16 DO DC 24V 0.5A",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9487.webp"
      ],
      "price": 186.2,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 4,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 SM 322 16 DO DC 24V 0.5A Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 332-5HF00-0AB0",
      "slug": "6ES7332-5HF00-0AB0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 SM 332 8 AO U/I 11/12 BIT",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9468.webp"
      ],
      "price": 738.45,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 22,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 SM 332 8 AO U/I 11/12 BIT Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 510-1DJ01-0AB0",
      "slug": "6ES7510-1DJ01-0AB0",
      "category": "Siemens",
      "description": "SIMATIC DP CPU 1510SP-1 PN",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9491.webp"
      ],
      "price": 431.69,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 2,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP CPU 1510SP-1 PN Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 512-1DK01-0AB0",
      "slug": "6ES7512-1DK01-0AB0",
      "category": "Siemens",
      "description": "SIMATIC DP CPU 1512SP-1 PN",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9422.webp"
      ],
      "price": 609.91,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 5,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP CPU 1512SP-1 PN Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 131-4BD01-0AA0",
      "slug": "6ES7131-4BD01-0AA0",
      "category": "Siemens",
      "description": "SIMATIC DP 4DI DC 24V ST (5er Pack)",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9442.webp"
      ],
      "price": 120.05,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 9,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP 4DI DC 24V ST (5er Pack) Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 131-6BF00-0CA0",
      "slug": "6ES7131-6BF00-0CA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP DI 8x 24VDC HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9441.webp"
      ],
      "price": 29.89,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 21,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP DI 8x 24VDC HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 134-6HB00-0CA1",
      "slug": "6ES7134-6HB00-0CA1",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP AI 2xU/I 2-/4-wire HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9483.webp"
      ],
      "price": 116.62,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 47,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP AI 2xU/I 2-/4-wire HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 155-6AR00-0AN0",
      "slug": "6ES7155-6AR00-0AN0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP IM 155-6 PN BA",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9451.webp"
      ],
      "price": 121.41,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 39,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP IM 155-6 PN BA Sealed",
      "conditions": "Sealed"
    }
  ]
};

export default sampleData;

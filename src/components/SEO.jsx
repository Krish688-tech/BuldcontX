import { Helmet } from "react-helmet-async";

const SITE_URL = "https://buldcontx.in";

const title =
  "BuldContx | Home Construction & Building Services";

const description =
  "BuldContx provides complete home construction, house planning, 2D and 3D drawings, material estimation and construction services, backed by more than 36 years of construction experience since 1991.";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],

  "@id": `${SITE_URL}/#organization`,

  "name": "BuldContx",

  "alternateName": "Buld Contx",

  "url": SITE_URL,

  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/favicon.png`
  },

  "image": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/og-image.jpg`
  },

  "description": description,

  "foundingDate": "1991",

  "founder": {
    "@type": "Person",
    "name": "Mr. Palani Ganesan"
  },

  "telephone": "+917339693861",

  "email": "buldcontx@gmail.com",

  "areaServed": [
    {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "City",
      "name": "Dubai"
    },
    {
      "@type": "City",
      "name": "Abu Dhabi"
    },
    {
      "@type": "Country",
      "name": "Qatar"
    },
    {
      "@type": "City",
      "name": "Muscat"
    }
  ],

  "knowsAbout": [
    "Home Construction",
    "Residential Construction",
    "House Planning",
    "2D House Drawings",
    "3D House Visualization",
    "Material Estimation",
    "Construction Project Management",
    "Building Construction"
  ],

  "sameAs": [
    "https://www.instagram.com/buldcontx/",
    "https://www.facebook.com/profile.php?id=61593479906247",
    "https://www.linkedin.com/in/palani-ganesan-b27a903a/",
    "https://x.com/buldcontx"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  "url": SITE_URL,

  "name": "BuldContx",

  "description": description,

  "publisher": {
    "@id": `${SITE_URL}/#organization`
  }
};

export default function SEO() {
  return (
    <Helmet>

      {/* Basic SEO */}

      <html lang="en" />

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content="BuldContx"
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link
        rel="canonical"
        href={`${SITE_URL}/`}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={`${SITE_URL}/`}
      />

      <meta
        property="og:site_name"
        content="BuldContx"
      />

      <meta
        property="og:image"
        content={`${SITE_URL}/og-image.jpg`}
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content="BuldContx home construction and building services"
      />

      {/* X */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${SITE_URL}/og-image.jpg`}
      />

      <meta
        name="twitter:image:alt"
        content="BuldContx home construction services"
      />

      {/* Theme */}

      <meta
        name="theme-color"
        content="#F6F4EE"
      />

      {/* Organization / LocalBusiness */}

      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      {/* Website */}

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

    </Helmet>
  );
}
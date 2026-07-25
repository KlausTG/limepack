// Basic print
import cupSimpleHero from "../assets/images/products/plastic-cups-print-simple/000-plastic-cup-hero.webp";
import cupSimpleSmall from "../assets/images/products/plastic-cups-print-simple/001-plastic-cup-small.webp";
import cupSimpleSmallLid from "../assets/images/products/plastic-cups-print-simple/001-plastic-cup-small-lid.webp";
import cupSimpleSmallLidSip from "../assets/images/products/plastic-cups-print-simple/001-plastic-cup-small-lid-sip.webp";
import cupSimpleSmallLidDome from "../assets/images/products/plastic-cups-print-simple/001-plastic-cup-small-lid-dome.webp";
import cupSimpleMedium from "../assets/images/products/plastic-cups-print-simple/002-plastic-cup-medium.webp";
import cupSimpleMediumLid from "../assets/images/products/plastic-cups-print-simple/002-plastic-cup-medium-lid.webp";
import cupSimpleMediumLidSip from "../assets/images/products/plastic-cups-print-simple/002-plastic-cup-medium-lid-sip.webp";
import cupSimpleMediumLidDome from "../assets/images/products/plastic-cups-print-simple/002-plastic-cup-medium-lid-dome.webp";
import cupSimpleLarge from "../assets/images/products/plastic-cups-print-simple/003-plastic-cup-large.webp";
import cupSimpleLargeLid from "../assets/images/products/plastic-cups-print-simple/003-plastic-cup-large-lid.webp";
import cupSimpleLargeLidSip from "../assets/images/products/plastic-cups-print-simple/003-plastic-cup-large-lid-sip.webp";
import cupSimpleLargeLidDome from "../assets/images/products/plastic-cups-print-simple/003-plastic-cup-large-lid-dome.webp";
import cupSimpleXLarge from "../assets/images/products/plastic-cups-print-simple/004-plastic-cup-xlarge.webp";
import cupSimpleXLargeLid from "../assets/images/products/plastic-cups-print-simple/004-plastic-cup-xlarge-lid.webp";
import cupSimpleXLargeLidSip from "../assets/images/products/plastic-cups-print-simple/004-plastic-cup-xlarge-lid-sip.webp";
import cupSimpleXLargeLidDome from "../assets/images/products/plastic-cups-print-simple/004-plastic-cup-xlarge-lid-dome.webp";

// Advanced print
import cupAdvancedHero from "../assets/images/products/plastic-cups-print-advanced/000-plastic-cup-hero.webp";
import cupAdvancedSmall from "../assets/images/products/plastic-cups-print-advanced/001-plastic-cup-small.webp";
import cupAdvancedMedium from "../assets/images/products/plastic-cups-print-advanced/002-plastic-cup-medium.webp";
import cupAdvancedLarge from "../assets/images/products/plastic-cups-print-advanced/003-plastic-cup-large.webp";
import cupAdvancedXLarge from "../assets/images/products/plastic-cups-print-advanced/004-plastic-cup-xlarge.webp";

// Reusable cups
import cupReusableHero from "../assets/images/products/plastic-cups-reusable/000-plastic-cup-hero.webp";
import cupReusableSmall from "../assets/images/products/plastic-cups-reusable/001-plastic-cup-small.webp";
import cupReusableMedium from "../assets/images/products/plastic-cups-reusable/002-plastic-cup-medium.webp";
import cupReusableLarge from "../assets/images/products/plastic-cups-reusable/003-plastic-cup-large.webp";
import cupReusableXLarge from "../assets/images/products/plastic-cups-reusable/004-plastic-cup-xlarge.webp";

// Lids
import cupLidHero from "../assets/images/products/plastic-cups-lid/000-plastic-cup-lid-hero.webp";
import cupLidFlat from "../assets/images/products/plastic-cups-lid/001-plastic-cup-lid-flat.webp";
import cupLidSip from "../assets/images/products/plastic-cups-lid/002-plastic-cup-lid-sip.webp";
import cupLidDome from "../assets/images/products/plastic-cups-lid/003-plastic-cup-lid-dome.webp";

const content = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Plastic cups", href: "/plastic-cups" },
  ],
  title: "Custom printed plastic cups",
  description:
    "Your logo, printed on a cup your customers actually want to drink from. Choose soft plastic or reusable, lid or not. Starting from just 1000 cups. We design it for free and show you a 3D mockup before anything prints.",
  products: [
    {
      model: 290,
      name: "Plastic cup, basic print",
      description:
        "Versatile and cost-effective cup for cold beverages or food",
      image: cupSimpleHero.src,
      badge: ["Bestseller", "Fastest delivery", "Low MOQ"],
      previewThumbnails: [
        { url: cupSimpleHero.src },
        { url: cupSimpleSmall.src, suffix: "250 ml" },
        { url: cupSimpleSmallLid.src, suffix: "250 ml" },
        { url: cupSimpleSmallLidSip.src, suffix: "250 ml" },
        { url: cupSimpleSmallLidDome.src, suffix: "250 ml" },
        { url: cupSimpleMedium.src, suffix: "350 ml" },
        { url: cupSimpleMediumLid.src, suffix: "350 ml" },
        { url: cupSimpleMediumLidSip.src, suffix: "350 ml" },
        { url: cupSimpleMediumLidDome.src, suffix: "350 ml" },
        { url: cupSimpleLarge.src, suffix: "450 ml" },
        { url: cupSimpleLargeLid.src, suffix: "450 ml" },
        { url: cupSimpleLargeLidSip.src, suffix: "450 ml" },
        { url: cupSimpleLargeLidDome.src, suffix: "450 ml" },
        { url: cupSimpleXLarge.src, suffix: "500 ml" },
        { url: cupSimpleXLargeLid.src, suffix: "500 ml" },
        { url: cupSimpleXLargeLidSip.src, suffix: "500 ml" },
        { url: cupSimpleXLargeLidDome.src, suffix: "500 ml" },
      ],
      moq: { min: 1000, max: 20000 },
      pricePerUnit: { min: 0.286, max: 0.37 },
      setupCost: 45,
      deliveryTimeWeeks: { min: 1, max: 2 },
    },
    {
      model: 250,
      name: "Plastic cup, advanced print",
      description:
        "Advanced print options at the best prices for large quantities",
      image: cupAdvancedHero.src,
      badge: ["Lowest price", "Advanced print"],
      previewThumbnails: [
        { url: cupAdvancedHero.src },
        { url: cupAdvancedSmall.src, suffix: "250 ml" },
        { url: cupAdvancedMedium.src, suffix: "350 ml" },
        { url: cupAdvancedLarge.src, suffix: "450 ml" },
        { url: cupAdvancedXLarge.src, suffix: "500 ml" },
      ],
      moq: { min: 10000, max: 80000 },
      pricePerUnit: { min: 0.078, max: 0.122 },
      setupCost: 170,
      deliveryTimeWeeks: { max: 16 },
    },
    {
      model: 284,
      name: "Plastic cup, reusable",
      description:
        "Sturdy and reusable plastic cups that can be washed and reused",
      image: cupReusableHero.src,
      badge: ["Dishwasher safe", "Freezer safe"],
      previewThumbnails: [
        { url: cupReusableHero.src },
        { url: cupReusableSmall.src, suffix: "250 ml" },
        { url: cupReusableMedium.src, suffix: "350 ml" },
        { url: cupReusableLarge.src, suffix: "450 ml" },
        { url: cupReusableXLarge.src, suffix: "500 ml" },
      ],
      moq: { min: 552, max: 10488 },
      pricePerUnit: { min: 0.483, max: 0.868 },
      setupCost: 0,
      deliveryTimeWeeks: { max: 6 },
    },
    {
      model: 75,
      name: "Lids for plastic cups",
      description:
        "Prevent spills with a lid. Available in flat, sip and dome styles.",
      image: cupLidHero.src,
      badge: ["Purhcase together or separetely"],
      previewThumbnails: [
        { url: cupLidHero.src, suffix: "3 styles" },
        { url: cupLidFlat.src, suffix: "Flat" },
        { url: cupLidSip.src, suffix: "Sip" },
        { url: cupLidDome.src, suffix: "Dome" },
      ],
      moq: { min: 1000, max: 5000 },
      pricePerUnit: { min: 0.055, max: 0.055 },
      setupCost: 0,
      deliveryTimeWeeks: { max: 3 },
    },
  ],
  faqItems: [
    {
      question: "What cup sizes can I order?",
      answer:
        "Our custom printed plastic cups are available in 250 ml, 350 ml, 450 ml, and 500 ml. Basic print options include previews with flat, sip, and dome lids for each size.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "MOQ depends on the product line: basic print starts at 1,000 cups, advanced print at 10,000, and reusable cups or lids from about 552 units. Volume pricing improves as you order more within each range.",
    },
    {
      question: "How does custom printing and proofing work?",
      answer:
        "Share your logo and brand colours—we design the artwork for free and send a 3D mockup before production. Choose basic print for faster turnaround (about 3–5 weeks) or advanced print for larger runs and lower unit cost (delivery can take up to 16 weeks).",
    },
    {
      question: "Can I buy lids separately?",
      answer:
        "Yes. Flat, sip, and dome lids match our cup sizes and can be ordered with your cups or on their own—ideal for takeaway, smoothies, and fizzy drinks.",
    },
    {
      question: "Are these cups compliant with EU regulations?",
      answer:
        "Yes, all cups meet the Single-Use Plastics Directive (SUPD) requirements, ensuring compliance with EU sustainability laws. The necessary embossed or printed markings are included on all cups as required.",
    },
    {
      question: "Are reusable cups dishwasher- and freezer-safe?",
      answer:
        "Our reusable plastic cups are built for repeat use and are dishwasher- and freezer-safe. Standard single-use printed cups are fridge- and freezer-safe for chilled and frozen serve applications.",
    },
    {
      question: "Can I customise the design on the plastic cups?",
      answer:
        "Yes! All our plastic cups can be fully customised with your brand’s logo, colours, and design to enhance your brand visibility with every drink served.",
    },
    {
      question: "Can these Plastic Cups be used for hot beverages?",
      answer:
        "No, these cups are designed for cold drinks only, such as soft drinks, iced coffees, smoothies, and beer. For hot beverages, we recommend using double-walled paper cups for better heat insulation.",
    },
    {
      question: "Can I store these plastic cups in the fridge or freezer?",
      answer:
        "Absolutely! These cups are fridge and freezer safe, making them ideal for pre-chilled beverages and frozen drink applications.",
    },
    {
      question: "Are the cups compatible with lids?",
      answer:
        "Yes! Our printed plastic cups are compatible with both flat and dome sip lids, making them perfect for takeaway drinks, smoothies, and carbonated beverages.",
    },
  ],
  testimonials: [
    {
      name: "Sarah Mitchell",
      quote:
        "Very attentive customer service and fast, high-quality production. I highly recommend it!",
    },
    {
      name: "Pietro Fasani",
      quote:
        "Everything was perfect! From the order process, made easier with 3D previews, to the delivery! Thank you so much.",
    },
    {
      name: "James Cooper",
      quote: "Fast, reliable, and great quality! I recommend it.",
    },
    {
      name: "Emma Walsh",
      quote:
        "We've been working with Limepack for a few years now. We're honestly very satisfied. The quality is great, service is fast, prices are fair, and our customers are very happy.",
    },
    {
      name: "Michael Brooks",
      quote:
        "I highly recommend Limepack! The print quality is excellent, and the team is attentive and responsive! In short, I'm very happy with my first order :)",
    },
    {
      name: "Rachel Turner",
      quote:
        "I have had the chance to print several products with them and the quality has always been consistent. Special mention to the warm and responsive team 🙏 It is a pleasure working with them.",
    },
    {
      name: "David Hughes",
      quote:
        "Great support and high-quality products that met our expectations. Thank you Elsa :-)",
    },
    {
      name: "Laura Bennett",
      quote:
        "Great communication and clarity at every stage from ordering, designing, and delivery.",
    },
    {
      name: "Chris Parker",
      quote:
        "A team that listens to customer needs and gives good advice. Responsive and delivers quality products. I absolutely recommend working with them",
    },
  ],
};

export default content;

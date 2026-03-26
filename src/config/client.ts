export const client = {
  // Business Details
  name: "My Lovely Lawn",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Guildford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "020 3432 3002",
  email: "",
  website: "",

  // Location
  address: "Guildford",
  city: "Guildford",
  county: "",
  postcode: "",
  basedIn: "Guildford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "10",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Preeti Shah", rating: 5, text: "Amazing product and service - the team was equally helpful from initial shopping and discovery to install and beyond. Could not be happier with the outcome, it’s transformed the outdoor space and just looks amazing. The install team was very professional, did a brilliant job and cleared up leaving the garden neater than they found it. Can not recommend highly enough", date: "5 months ago" },
    { name: "sharon rubin", rating: 5, text: "I can highly recommend My Lovely Lawn for artificial grass. They recently transformed the front of my house and did a fantastic job. The team was professional, reliable, and delivered excellent results", date: "6 months ago" },
    { name: "Sarah", rating: 5, text: "Thank you for a brilliant job - we are so happy with the finish and I would like to say that the chaps were lovely, always smiling (even when one cut his thumb yesterday) - cannot praise them enough - Thank you again 🙂 …", date: "6 months ago" },
    { name: "Declan Green", rating: 5, text: "Great quality, great price and even stayed open for me on a Sunday to collect. Wouldn't go anywhere else. Thanks again!", date: "11 months ago", badge: "Local Guide" },
    { name: "Saimah Khan", rating: 5, text: "Adam is amazing! Excellent customer service. 100% recommend!", date: "2 years ago", badge: "Local Guide" },
    { name: "Tiffany Jessop", rating: 5, text: "Excellent pre service. Great value for money. Really efficient, respectful and skilled team. All completed in one day and place left immaculate afterwards. Thrilled with the end result!!", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "My Lovely Lawn | Landscaper in Guildford",
    description: "Professional landscaper in Guildford. 5.0-star rated on Google. Call for a free quote.",
  },
};

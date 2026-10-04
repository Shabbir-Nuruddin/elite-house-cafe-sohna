import "@fontsource/outfit/500.css";
import "@fontsource/outfit/700.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Elite House Cafe & Restaurant",
  sub: { en: "Cafe & family restaurant · Satya Plaza, near GD Goenka University", hi: "कैफ़े और फ़ैमिली रेस्टोरेंट · सत्या प्लाज़ा, जीडी गोयनका यूनिवर्सिटी के पास" },
  banner: { en: "Separate family seating, and room for the whole college group", hi: "फ़ैमिली के लिए अलग बैठक, और पूरे कॉलेज ग्रुप के लिए जगह" },
  phone: "919817603004",
  phoneDisplay: "+91 98176 03004",
  lat: 28.2668694,
  lon: 77.0664889,
  hours: [[10, 23], [10, 23], [10, 23], [10, 23], [10, 23], [9, 23], [10, 23]],
  price: { en: "₹200–400 per person", hi: "₹200–400 प्रति व्यक्ति" },
  theme: {
    dark: true,
    bg: "#08120e",
    bg2: "#0e1c16",
    panel: "#13241c",
    ink: "#f1f4ee",
    ink2: "#bfcabf",
    ink3: "#7f8f84",
    line: "#20362b",
    accent: "#ff7f66",
    onAccent: "#2c0b04",
    display: "Outfit",
    weight: 700,
    upper: false,
  },
  scene: "pour",
  align: "left",
  hero: {
    title: [
      { en: "Good food, cozy corners,", hi: "अच्छा खाना, आरामदेह कोने," },
      { en: "service you’ll remember.", hi: "सर्विस जो याद रहे।" },
    ],
    proof: {
      en: "4.4 on Google from 84 reviews. Kofta, malai chaap, lacha paratha and a team guests mention by name, next to GD Goenka University.",
      hi: "गूगल पर 84 रिव्यू से 4.4। कोफ़्ता, मलाई चाप, लच्छा पराठा और ऐसी टीम जिसका नाम लेकर मेहमान तारीफ़ करते हैं, जीडी गोयनका यूनिवर्सिटी के पास।",
    },
    fallback: "/img/p4.jpg",
  },
  marquee: ["Malai Kofta", "Zafrani Kofta", "Smoky Mix Veg", "Dahi ke Sholey", "Lacha Paratha", "Malai Chaap", "Paneer Chilly"],
  dishes: {
    title: { en: "Ordered, loved, written down", hi: "मंगाया, पसंद आया, लिख दिया" },
    body: { en: "Two Google reviews, quoted in full.", hi: "दो गूगल रिव्यू, पूरे के पूरे।" },
    layout: "cards",
    items: [
      { name: { en: "Kofta, Mix Veg & Dahi ke Sholey", hi: "कोफ़्ता, मिक्स वेज और दही के शोले" }, quote: "The Malai/Zafrani Kofta and smoky Mix Veg are outstanding, and starters like Dahi ke Sholey are a treat. A fantastic family-friendly spot, easily one of the best in Sohna till date." },
      { name: { en: "Lacha Paratha, Malai Chaap, Paneer Chilly", hi: "लच्छा पराठा, मलाई चाप, पनीर चिली" }, quote: "The Lacha Paratha was crisp yet soft, the Malai Chaap was creamy and well-marinated, and the Paneer Chilly had just the right spice." },
      { name: { en: "The room", hi: "माहौल" }, quote: "Fantastic food, good service and cozy interior", img: "/img/p4.jpg" },
    ],
  },
  gallery: {
    title: { en: "Inside Elite House", hi: "एलीट हाउस के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p3.jpg", alt: "Table with food inside Elite House", wide: true },
      { src: "/img/p4.jpg", alt: "Interior seating" },
      { src: "/img/p14.jpg", alt: "The Elite House menu" },
      { src: "/img/p1.jpg", alt: "Elite House exterior with green chairs", wide: true },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "Ask for Bharat", hi: "भरत को पूछिए" },
    body: { en: "Three different guests, three separate reviews, one name.", hi: "तीन अलग मेहमान, तीन अलग रिव्यू, एक ही नाम।" },
    img: "/img/p3.jpg",
    hosts: [
      { name: "BHARAT", quote: "Bharat bhaiya has served us today .The waiter was very polite ,attentive and was very responsibly quick. He served us with a smile and made sure we were comfortable." },
      { name: "BHARAT", quote: "what made it even more enjoyable was Mr. Bharat's service. Definitely one of the most helpful, sincere, hardworking, and polite people in the hospitality industry." },
      { name: "BHARAT", quote: "Would like to appreciate Bharat’s hospitality and politeness." },
    ],
  },
  reviews: {
    title: { en: "For families and for the college crowd", hi: "परिवारों के लिए भी, कॉलेज वालों के लिए भी" },
    rating: 4.4,
    dist: [60, 12, 3, 3, 6],
    quotes: [
      { quote: "with a separate, comfortable space for families", stars: 5 },
      { quote: "Very good place for hangout,especially for college students", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Look for the green chairs", hi: "हरी कुर्सियां ढूंढिए" },
    img: "/img/p1.jpg",
    alt: "Elite House Cafe & Restaurant exterior",
    address: { en: "Satya Plaza, near GD Goenka University, Sohna", hi: "सत्या प्लाज़ा, जीडी गोयनका यूनिवर्सिटी के पास, सोहना" },
    note: { en: "Opens at 9am on Fridays, 10am other days.", hi: "शुक्रवार को सुबह 9 बजे, बाकी दिन 10 बजे खुलता है।" },
  },
  pour: { from: "pan", into: "kadhai", liquid: "#e2a95c", foam: "#f4d39c", thick: 2.2 },
  story: [
    { kicker: { en: "The kofta", hi: "कोफ़्ता" }, title: { en: "Malai kofta, zafrani gravy.", hi: "मलाई कोफ़्ता, ज़ाफ़रानी ग्रेवी।" }, quote: "The Malai/Zafrani Kofta and smoky Mix Veg are outstanding, and starters like Dahi ke Sholey are a treat. A fantastic family-friendly spot, easily one of the best in Sohna till date." },
    { kicker: { en: "The service", hi: "सर्विस" }, title: { en: "Ask for Bharat.", hi: "भरत भैया को पूछिए।" }, quote: "what made it even more enjoyable was Mr. Bharat's service. Definitely one of the most helpful, sincere, hardworking, and polite people in the hospitality industry." },
    { kicker: { en: "The space", hi: "जगह" }, title: { en: "A separate space for families.", hi: "परिवारों के लिए अलग जगह।" }, quote: "with a separate, comfortable space for families" },
  ],
  build: {
    title: { en: "Plan your visit in a few taps", hi: "कुछ टैप में अपनी विज़िट प्लान करें" },
    body: { en: "Family or friends, what to eat, how many and when. It lands on WhatsApp exactly as you see it.", hi: "परिवार या दोस्त, क्या खाना है, कितने लोग और कब। मैसेज व्हाट्सऐप पर ठीक ऐसे ही पहुंचेगा।" },
    pick: { label: { en: "Seating", hi: "बैठक" }, options: [
      { name: { en: "Family space", hi: "फ़ैमिली स्पेस" } },
      { name: { en: "College group", hi: "कॉलेज ग्रुप" } },
    ] },
    items: [
      { en: "Malai Kofta", hi: "मलाई कोफ़्ता" },
      { en: "Mix Veg", hi: "मिक्स वेज" },
      { en: "Dahi ke Sholey", hi: "दही के शोले" },
      { en: "Lacha Paratha", hi: "लच्छा पराठा" },
      { en: "Malai Chaap", hi: "मलाई चाप" },
      { en: "Paneer Chilly", hi: "पनीर चिली" },
    ],
    people: true,
    when: true,
    hello: { en: "Hi Elite House Cafe, I'd like to book:", hi: "नमस्ते एलीट हाउस कैफ़े, मुझे बुक करना है:" },
  },
  waHello: {
    en: "Hi Elite House, I'd like to book a table. Family / group: , date: , people: ",
    hi: "नमस्ते एलीट हाउस, मुझे टेबल बुक करनी है। फ़ैमिली / ग्रुप: , तारीख़: , लोग: ",
  },
  order: ["build", "dishes", "feature", "reviews", "gallery", "visit"],
};

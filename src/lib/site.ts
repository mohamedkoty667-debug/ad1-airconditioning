/*
  All business details live here.
  Edit this file to change phone numbers, email, services, etc. across the whole site.
*/

import type { LogoKey } from "@/lib/logo-config";

export const site = {
  /*
    Which logo the website shows. Change this one word to switch:
      "fan"    Fan                        "loop"   Hot & Cold loop
      "vent"   Vent "A"                 "tile"   Ice tile
      "ones"   Snowflake of 1s          "air"    Airflow "A"
      "drop"   Thermo drop              "unit"   The unit
      "vortex" Vortex                   "degree" Ad1° (degree)
      "house"  Ad1 Air Con Ltd house logo (current)
    (The browser-tab icon is a separate file: src/app/icon.svg. It currently shows the house icon.)
  */
  logo: "house" as LogoKey,

  name: "Ad1 Airconditioning Ltd",
  shortName: "Ad1",
  tagline: "Air conditioning installation, service, repair and maintenance across London.",
  phoneDisplay: "+44 7526 556945",
  phoneHref: "tel:+447526556945",
  whatsappNumber: "447526556945",
  email: "Ad1Airconditioningltd@gmail.com",
  address: "Flat 2, 119 Courthill Road, London, SE13 6DR",
  companyNumber: "16462923",
  coverage: "All London areas",
  hours: "Open 24/7, including weekends and bank holidays",
  experience: "10+ years",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/emergency", label: "Emergency" },
  { href: "/areas", label: "Areas" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

/** Builds a WhatsApp link with a pre-filled message. Use "\n" for new lines. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const services = [
  {
    slug: "installation",
    title: "Air Conditioning Installation",
    short: "Split, multi-split and VRF systems for homes and businesses, installed neatly and commissioned properly.",
    desc: "New systems and replacements, planned around your space. Clean pipe routing, tidy finishes, full testing and a proper handover.",
    bullets: ["Residential and commercial", "New installs and replacements", "Commissioning and handover"],
  },
  {
    slug: "servicing",
    title: "Servicing & Planned Maintenance",
    short: "Scheduled servicing that keeps systems efficient, quiet and reliable all year.",
    desc: "Keep performance high and running costs low with scheduled servicing, filter and coil cleaning, and performance checks.",
    bullets: ["Planned maintenance contracts", "Filter and coil cleaning", "Performance and safety checks"],
  },
  {
    slug: "repair",
    title: "Repairs & Fault Diagnosis",
    short: "Fast diagnosis for breakdowns, leaks, noise, airflow problems and error codes.",
    desc: "We find the real cause, not just the symptom, then repair it properly with the right parts so it stays fixed.",
    bullets: ["Fault finding and error codes", "Parts replacement", "Cooling and heating restored"],
  },
  {
    slug: "emergency",
    title: "Emergency Call-Out 24/7",
    short: "Urgent breakdown? We respond day and night across London.",
    desc: "When a system fails in a server room, shop or office, downtime costs money. We prioritise emergency call-outs 24/7.",
    bullets: ["Available 24/7", "Priority response", "Residential and commercial"],
  },
  {
    slug: "commercial",
    title: "Commercial HVAC",
    short: "Offices, retail, restaurants and multi-zone sites, supported end to end.",
    desc: "Reliable installation and maintenance for multi-zone commercial systems, with clear communication and site coordination.",
    bullets: ["Multi-zone and VRF systems", "Planned servicing", "Site coordination"],
  },
  {
    slug: "residential",
    title: "Residential Air Conditioning",
    short: "Quiet, efficient comfort for your home, installed with care.",
    desc: "Quiet systems, clean aesthetics and honest advice on the right unit for each room.",
    bullets: ["Quiet, efficient units", "Neat, discreet pipework", "Honest advice on options"],
  },
  {
    slug: "optimisation",
    title: "System Optimisation",
    short: "Better airflow, settings and efficiency from the system you already have.",
    desc: "Useful after a poor install, a layout change or ongoing comfort complaints. We balance, tune and fix airflow issues.",
    bullets: ["Balancing and tuning", "Airflow checks", "Efficiency improvements"],
  },
  {
    slug: "controls",
    title: "Controls & Controller Support",
    short: "Controllers, schedules, central controls and error codes, set up properly.",
    desc: "Help with controllers, scheduling, central control panels and system settings for stable day-to-day operation.",
    bullets: ["Error code support", "Scheduling and zoning", "Central controller setup"],
  },
];

export const workPhotos = [
  { src: "/work/11.jpg", alt: "Ceiling cassette unit installed in a high-rise office with London view" },
  { src: "/work/4.jpg", alt: "Daikin outdoor condensing units on a London rooftop" },
  { src: "/work/9.jpg", alt: "Ductwork and refrigerant pipework installation in a commercial fit-out" },
  { src: "/work/2.jpg", alt: "Ducted indoor unit with insulated pipework and cable tray" },
  { src: "/work/work7.jpg", alt: "Wall-mounted condensing units in a plant room" },
  { src: "/work/3.jpg", alt: "Wall-mounted indoor unit in a finished room" },
  { src: "/work/work4.jpg", alt: "Daikin central touch-screen controller and room thermostats" },
  { src: "/work/5.jpg", alt: "Rooftop condensing units ready for connection" },
  { src: "/work/work6.jpg", alt: "Four-way ceiling cassette in a finished office" },
  { src: "/work/1.jpg", alt: "Refrigerant pipework run on ceiling containment" },
  { src: "/work/work2.jpg", alt: "Outdoor unit mounted on a brick wall" },
  { src: "/work/work8.jpg", alt: "Commissioning an outdoor unit with gauges" },
];

/* London boroughs we cover, grouped by region (shown on the Areas page) */
export const areas = [
  { region: "South East", codes: "SE · BR · DA", boroughs: ["Lewisham", "Greenwich", "Southwark", "Lambeth", "Bromley", "Bexley"] },
  { region: "Central", codes: "EC · WC · W1 · NW1", boroughs: ["City of London", "Westminster", "Camden", "Islington", "Kensington and Chelsea"] },
  { region: "South West", codes: "SW · CR · KT · SM", boroughs: ["Wandsworth", "Merton", "Sutton", "Croydon", "Kingston upon Thames", "Richmond upon Thames"] },
  { region: "East", codes: "E · IG · RM", boroughs: ["Tower Hamlets", "Hackney", "Newham", "Waltham Forest", "Redbridge", "Barking and Dagenham", "Havering"] },
  { region: "West", codes: "W · HA · UB · TW", boroughs: ["Hammersmith and Fulham", "Ealing", "Brent", "Harrow", "Hounslow", "Hillingdon"] },
  { region: "North", codes: "N · NW · EN", boroughs: ["Haringey", "Barnet", "Enfield"] },
];

/* London postcode areas (shown on the Areas page) */
export const postcodes = [
  { code: "SE", name: "South East" }, { code: "SW", name: "South West" }, { code: "E", name: "East" }, { code: "EC", name: "City" },
  { code: "N", name: "North" }, { code: "NW", name: "North West" }, { code: "W", name: "West" }, { code: "WC", name: "West Central" },
  { code: "BR", name: "Bromley" }, { code: "CR", name: "Croydon" }, { code: "DA", name: "Dartford / Bexley" }, { code: "EN", name: "Enfield" },
  { code: "HA", name: "Harrow" }, { code: "IG", name: "Ilford" }, { code: "KT", name: "Kingston" }, { code: "RM", name: "Romford" },
  { code: "SM", name: "Sutton" }, { code: "TW", name: "Twickenham" }, { code: "UB", name: "Southall / Uxbridge" },
];

/* Brands shown on the home page (seen in our installation photos) */
export const brands = ["Daikin", "Mitsubishi Electric"];

/* Frequently asked questions (home page) */
export const faqs = [
  {
    q: "Do you cover my area?",
    a: "Yes. We cover all 32 London boroughs and the City of London, from our base in Lewisham (SE13). Send us your postcode on WhatsApp and we'll confirm straight away.",
  },
  {
    q: "Are you really available 24/7?",
    a: "Yes. We take emergency call-outs day and night, including weekends and bank holidays. For the fastest help, call or WhatsApp us with your postcode and what's happening.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the quote form, WhatsApp or call us. Tell us the service you need and your postcode, and send a few photos of the unit and any error code if you can. We'll reply with next steps and a clear price, and arrange a site visit if needed.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Both. We install and look after systems in houses and flats, as well as offices, shops, restaurants and multi-zone commercial buildings.",
  },
  {
    q: "Which brands do you work with?",
    a: "We work with all major air conditioning brands, including Daikin and Mitsubishi Electric. If you're not sure what you have, send us a photo of the unit's label.",
  },
  {
    q: "How often should air conditioning be serviced?",
    a: "As a rule of thumb, at least once a year for homes, and more often for busy commercial systems. Regular servicing keeps the system efficient, quiet and reliable, and helps prevent breakdowns.",
  },
];

/*
  Customer reviews (home page).
  Only add real reviews, copied word for word, with the customer's permission.
  The section stays hidden until at least one review is added. Example:
  { name: "Sarah M.", area: "Greenwich", text: "Fast, tidy and friendly ...", rating: 5, source: "Google" },
*/
export const reviews: { name: string; area?: string; text: string; rating: number; source?: string }[] = [];

/* Link to leave a Google review (add yours from your Google Business Profile) */
export const reviewLink = "";

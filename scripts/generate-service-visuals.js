const fs = require("fs");
const path = require("path");

const services = [
  ["balcony-safety-nets", "balcony", ["#0f766e", "#f59e0b"]],
  ["children-safety-nets", "children", ["#2563eb", "#f97316"]],
  ["pigeon-safety-nets", "birdNet", ["#334155", "#14b8a6"]],
  ["window-invisible-grills", "window", ["#0369a1", "#94a3b8"]],
  ["balcony-invisible-grills", "balconyGrill", ["#0f172a", "#f59e0b"]],
  ["window-safety-nets", "window", ["#0284c7", "#10b981"]],
  ["duct-area-safety-nets", "duct", ["#475569", "#f97316"]],
  ["building-covering-safety-nets", "building", ["#064e3b", "#eab308"]],
  ["terrace-safety-nets", "terrace", ["#047857", "#38bdf8"]],
  ["cricket-practice-nets", "cricket", ["#166534", "#facc15"]],
  ["bird-spikes-installation", "spikes", ["#374151", "#f97316"]],
  ["cloth-hanger-installation", "hanger", ["#9333ea", "#22c55e"]],
];

const variants = [
  ["hero", 0],
  ["detail", 1],
  ["context", 2],
];

const publicDir = path.join(__dirname, "..", "public", "images", "services");

const esc = (value) =>
  value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;",
  }[char]));

const net = (color = "#ffffff", opacity = 0.42, step = 64) => `
  <g opacity="${opacity}" stroke="${color}" stroke-width="3">
    ${Array.from({ length: 22 }, (_, index) => {
      const x = -260 + index * step;
      return `<path d="M${x} -40 1320 820"/><path d="M${x} 840 1320 -20"/>`;
    }).join("")}
  </g>`;

const bolts = (color = "#fde68a") => `
  <g fill="${color}" opacity="0.9">
    <circle cx="174" cy="568" r="8"/><circle cx="286" cy="568" r="8"/>
    <circle cx="914" cy="558" r="8"/><circle cx="1026" cy="558" r="8"/>
  </g>`;

const balcony = (a, b, variant) => `
  <rect x="150" y="180" width="900" height="420" rx="36" fill="#f8fafc" opacity="0.95"/>
  <rect x="216" y="238" width="248" height="238" rx="22" fill="#dbeafe"/>
  <rect x="736" y="238" width="248" height="238" rx="22" fill="#ccfbf1"/>
  <rect x="192" y="490" width="816" height="84" rx="22" fill="${a}"/>
  <g stroke="#ffffff" stroke-width="12" stroke-linecap="round">
    <path d="M240 518h720"/><path d="M290 492v84"/><path d="M438 492v84"/><path d="M586 492v84"/><path d="M734 492v84"/><path d="M882 492v84"/>
  </g>
  <g transform="translate(${variant * 24} ${variant * 10})">${net("#0f172a", 0.28, 58)}</g>
  ${bolts(b)}`;

const children = (a, b, variant) => `
  <rect x="162" y="158" width="876" height="466" rx="42" fill="#fff7ed"/>
  <path d="M224 564h752" stroke="${a}" stroke-width="28" stroke-linecap="round"/>
  <path d="M260 280h680" stroke="#fed7aa" stroke-width="18" stroke-linecap="round"/>
  <g stroke="${a}" stroke-width="12" stroke-linecap="round"><path d="M312 302v258"/><path d="M484 302v258"/><path d="M656 302v258"/><path d="M828 302v258"/></g>
  <circle cx="${374 + variant * 40}" cy="446" r="54" fill="${b}" opacity="0.9"/>
  <path d="M${330 + variant * 40} 526q44-46 88 0" fill="none" stroke="${b}" stroke-width="18" stroke-linecap="round"/>
  ${net("#0f172a", 0.2, 70)}`;

const birdNet = (a, b, variant) => `
  <rect x="132" y="154" width="936" height="486" rx="42" fill="#ecfeff"/>
  <path d="M194 560h812" stroke="${a}" stroke-width="26" stroke-linecap="round"/>
  <path d="M236 220h728v320H236z" fill="none" stroke="${a}" stroke-width="16" stroke-linejoin="round"/>
  <g transform="translate(${variant * -18} ${variant * 12})">${net("#0f172a", 0.34, 56)}</g>
  <g fill="${b}" opacity="0.82">
    <path d="M790 282c28-34 70-34 98 0-34-14-64-14-98 0Z"/>
    <path d="M880 370c24-28 60-28 84 0-30-12-54-12-84 0Z"/>
  </g>
  ${bolts("#fef3c7")}`;

const grill = (a, b, variant) => `
  <rect x="168" y="144" width="864" height="492" rx="44" fill="#f8fafc"/>
  <path d="M210 212h780M210 568h780" stroke="${a}" stroke-width="24" stroke-linecap="round"/>
  <g stroke="${b}" stroke-width="8" stroke-linecap="round">
    ${Array.from({ length: 11 }, (_, i) => `<path d="M${260 + i * 68 + variant * 3} 220v336"/>`).join("")}
  </g>
  <path d="M252 396h696" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
  <circle cx="908" cy="392" r="62" fill="${a}" opacity="0.14"/>`;

const balconyGrill = (a, b, variant) => `
  <rect x="146" y="174" width="908" height="444" rx="40" fill="#f1f5f9"/>
  <path d="M202 520h796" stroke="${a}" stroke-width="24" stroke-linecap="round"/>
  <g stroke="${b}" stroke-width="7" stroke-linecap="round">
    ${Array.from({ length: 14 }, (_, i) => `<path d="M${244 + i * 54 + variant * 2} 232v284"/>`).join("")}
  </g>
  <path d="M254 290h692" stroke="#ffffff" stroke-width="10" opacity="0.7"/>
  <path d="M254 430h692" stroke="#ffffff" stroke-width="10" opacity="0.7"/>
  ${bolts("#fde68a")}`;

const window = (a, b, variant) => `
  <rect x="196" y="132" width="808" height="520" rx="40" fill="#e0f2fe"/>
  <rect x="266" y="198" width="292" height="384" rx="22" fill="#ffffff"/>
  <rect x="642" y="198" width="292" height="384" rx="22" fill="#ffffff"/>
  <path d="M600 196v386" stroke="${a}" stroke-width="18" stroke-linecap="round"/>
  <g transform="translate(${variant * 16} 0)">${net("#0369a1", 0.24, 54)}</g>
  <path d="M240 616h720" stroke="${b}" stroke-width="22" stroke-linecap="round"/>`;

const duct = (a, b, variant) => `
  <path d="M274 126h650l86 96v420H188V222l86-96Z" fill="#f8fafc"/>
  <path d="M274 126v96h736" fill="none" stroke="#cbd5e1" stroke-width="16"/>
  <rect x="306" y="282" width="588" height="258" rx="28" fill="${a}" opacity="0.18"/>
  <g transform="translate(${variant * -20} ${variant * 8})">${net(a, 0.38, 48)}</g>
  <path d="M352 586h496" stroke="${b}" stroke-width="24" stroke-linecap="round"/>
  ${bolts("#fef3c7")}`;

const building = (a, b, variant) => `
  <rect x="216" y="112" width="768" height="548" rx="30" fill="#f8fafc"/>
  <g fill="#dbeafe">
    ${Array.from({ length: 18 }, (_, i) => {
      const col = i % 6;
      const row = Math.floor(i / 6);
      return `<rect x="${286 + col * 104}" y="${178 + row * 112}" width="58" height="58" rx="10"/>`;
    }).join("")}
  </g>
  <rect x="248" y="534" width="704" height="70" rx="18" fill="${a}"/>
  <g transform="translate(${variant * 18} 0)">${net("#0f172a", 0.26, 60)}</g>
  <path d="M174 650h852" stroke="${b}" stroke-width="24" stroke-linecap="round"/>`;

const terrace = (a, b, variant) => `
  <path d="M154 560h892l-86-176H240l-86 176Z" fill="#e2e8f0"/>
  <path d="M238 378h724" stroke="${a}" stroke-width="26" stroke-linecap="round"/>
  <path d="M290 402v142M446 402v142M602 402v142M758 402v142M914 402v142" stroke="${a}" stroke-width="13" stroke-linecap="round"/>
  <g transform="translate(${variant * 22} -24)">${net("#0f172a", 0.23, 58)}</g>
  <circle cx="850" cy="280" r="74" fill="${b}" opacity="0.28"/>`;

const staircase = (a, b, variant) => `
  <path d="M230 590h740v-72H830v-76H690v-76H550v-76H410v-76H230v376Z" fill="#fef3c7"/>
  <path d="M260 526h600M400 450h462M540 374h324M680 298h186" stroke="${a}" stroke-width="20" stroke-linecap="round"/>
  <path d="M260 214v336M858 214v336" stroke="${a}" stroke-width="15" stroke-linecap="round"/>
  <g transform="translate(${variant * 12} 0)">${net("#7c2d12", 0.28, 54)}</g>
  <path d="M202 626h816" stroke="${b}" stroke-width="22" stroke-linecap="round"/>`;

const pool = (a, b, variant) => `
  <rect x="160" y="206" width="880" height="390" rx="44" fill="#e0f2fe"/>
  <path d="M236 330q90-54 180 0t180 0 180 0 180 0" fill="none" stroke="${b}" stroke-width="18" stroke-linecap="round" opacity="0.78"/>
  <path d="M224 516h752" stroke="${a}" stroke-width="28" stroke-linecap="round"/>
  <g transform="translate(${variant * -12} 8)">${net("#075985", 0.23, 62)}</g>
  <rect x="244" y="250" width="712" height="292" rx="28" fill="none" stroke="#ffffff" stroke-width="10" opacity="0.8"/>`;

const cricket = (a, b, variant) => `
  <rect x="190" y="154" width="820" height="486" rx="46" fill="#dcfce7"/>
  <rect x="500" y="224" width="200" height="332" rx="90" fill="#fef3c7"/>
  <path d="M244 238h712M244 572h712" stroke="${a}" stroke-width="24" stroke-linecap="round"/>
  <g transform="translate(${variant * 16} 0)">${net("#14532d", 0.32, 58)}</g>
  <path d="M614 314l88 174" stroke="${b}" stroke-width="18" stroke-linecap="round"/>
  <circle cx="784" cy="322" r="24" fill="${b}"/>`;

const football = (a, b, variant) => `
  <rect x="156" y="160" width="888" height="472" rx="44" fill="#dcfce7"/>
  <rect x="236" y="236" width="728" height="320" rx="28" fill="none" stroke="#ffffff" stroke-width="12"/>
  <path d="M600 236v320" stroke="#ffffff" stroke-width="10"/>
  <circle cx="600" cy="396" r="72" fill="none" stroke="#ffffff" stroke-width="10"/>
  <g transform="translate(${variant * -18} 0)">${net(a, 0.28, 60)}</g>
  <circle cx="${790 - variant * 55}" cy="${386 + variant * 28}" r="46" fill="${b}" opacity="0.9"/>`;

const spikes = (a, b, variant) => `
  <rect x="176" y="474" width="848" height="88" rx="24" fill="#e5e7eb"/>
  <path d="M234 474l58-188 58 188M374 474l58-224 58 224M534 474l58-188 58 188M674 474l58-224 58 224M834 474l58-188 58 188" fill="${a}" opacity="0.9"/>
  <path d="M222 590h756" stroke="${b}" stroke-width="26" stroke-linecap="round"/>
  <circle cx="${352 + variant * 58}" cy="258" r="54" fill="${b}" opacity="0.14"/>
  <path d="M760 250c30-34 74-34 104 0-36-14-68-14-104 0Z" fill="${b}" opacity="0.5"/>`;

const hanger = (a, b, variant) => `
  <rect x="168" y="144" width="864" height="492" rx="44" fill="#f8fafc"/>
  <path d="M252 240h696" stroke="${a}" stroke-width="20" stroke-linecap="round"/>
  <path d="M326 240v278M486 240v278M646 240v278M806 240v278" stroke="${a}" stroke-width="9" stroke-linecap="round"/>
  <path d="M276 518h648" stroke="${b}" stroke-width="20" stroke-linecap="round"/>
  <path d="M398 390q58 46 116 0M618 390q58 46 116 0" fill="none" stroke="#c4b5fd" stroke-width="16" stroke-linecap="round"/>
  <circle cx="${840 - variant * 54}" cy="340" r="54" fill="${b}" opacity="0.16"/>`;

const sceneByKind = {
  balcony,
  children,
  birdNet,
  grill,
  balconyGrill,
  window,
  duct,
  building,
  terrace,
  staircase,
  pool,
  cricket,
  football,
  spikes,
  hanger,
};

function visual(slug, kind, colors, variant) {
  const [a, b] = colors;
  const id = `${slug}-${variant}`;
  const scene = sceneByKind[kind](a, b, variant);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="${id}-title ${id}-desc">
  <title id="${id}-title">${esc(slug.replace(/-/g, " "))} service visual</title>
  <desc id="${id}-desc">Unique SRI KRISHNA INVISIBLE GRILLS service illustration with safety net, fixing, or protection details.</desc>
  <defs>
    <linearGradient id="${id}-bg" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="0.58" stop-color="#0f172a"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="${variant === 1 ? "72%" : "28%"}" cy="24%" r="62%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#${id}-bg)"/>
  <rect width="1200" height="800" fill="url(#${id}-glow)"/>
  <circle cx="${180 + variant * 360}" cy="${146 + variant * 34}" r="${120 + variant * 30}" fill="#ffffff" opacity="0.11"/>
  <circle cx="${1012 - variant * 116}" cy="${640 - variant * 72}" r="${172 - variant * 12}" fill="#ffffff" opacity="0.08"/>
  <g filter="none">${scene}</g>
  <path d="M0 716c180-70 330-70 494-20 218 66 404 58 706-72v176H0Z" fill="#020617" opacity="0.2"/>
</svg>`;
}

for (const [slug, kind, colors] of services) {
  const dir = path.join(publicDir, slug);
  fs.mkdirSync(dir, { recursive: true });

  for (const [name, variant] of variants) {
    fs.writeFileSync(
      path.join(dir, `${slug}-${name}.svg`),
      visual(slug, kind, colors, variant)
    );
  }
}

console.log(`Generated ${services.length * variants.length} service visuals.`);

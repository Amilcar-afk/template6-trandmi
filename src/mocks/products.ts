export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  isSkincarePro: boolean;
  imageUrl: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "tr-001",
    name: "Collabenon Plus NMN Mist 100ml",
    category: "Ampoule / Essence",
    shortDescription: "A high-concentration collagen mist with 743,000ppm collagen content, delivering glossy, deeply moisturized skin with a lasting fixer effect.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202511/afdf99cbe177de83dc81cd3c9cdcc464.png",
    tags: ["Collagen", "Glossy", "Moisture", "Fixer"],
  },
  {
    id: "tr-002",
    name: "24K Gold Intensive Ampoule Ssense 60ml / 200ml",
    category: "Ampoule / Essence",
    shortDescription: "An intensive anti-aging ampoule enriched with 24K gold and a specialized bipida base for luminous, revitalized skin.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202502/0edcbdd9b0aa7a05176af2db3eb7b42a.png",
    tags: ["Gold", "Anti-Aging", "Luminous"],
  },
  {
    id: "tr-003",
    name: "Derma Cica K-Detox Cream 20ml",
    category: "Cream",
    shortDescription: "A targeted spot care cream formulated with Vitamin K to address redness, discoloration, and post-treatment skin concerns.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202310/877763f9f48a11fca278ea46d025943a.png",
    tags: ["Spot Care", "Vitamin K", "Redness"],
  },
  {
    id: "tr-004",
    name: "N-PDRN Elastika Core Cream 60ml / 200ml",
    category: "Cream",
    shortDescription: "A professional-grade cream featuring salmon-derived PDRN for visible firming, elasticity restoration, and pore refinement.",
    isSkincarePro: true,
    imageUrl: "https://trandmi.com/web/product/medium/202310/fc5f01df8532b4c7cc7cfbaa8ce1329d.png",
    tags: ["PDRN", "Firming", "Elasticity"],
  },
  {
    id: "tr-005",
    name: "Cell Reservation Post Cream 60ml / 250ml",
    category: "Cream",
    shortDescription: "A soothing post-treatment cream designed to calm, protect, and accelerate recovery following professional skin procedures.",
    isSkincarePro: true,
    imageUrl: "https://trandmi.com/web/product/medium/202310/0ac72147c1aa1bd81cd29834b4daa22e.png",
    tags: ["Post-Treatment", "Soothing", "Recovery"],
  },
  {
    id: "tr-006",
    name: "Radiance Double Gel Cleanser 500ml",
    category: "Cleanser",
    shortDescription: "A professional-volume double-action gel cleanser that deeply purifies while maintaining the skin's natural moisture barrier.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202311/8b0dea56505d8094c77be092703162d3.png",
    tags: ["Cleansing", "Gel", "Purifying"],
  },
  {
    id: "tr-007",
    name: "UV Defense All Day Sunscreen 70ml",
    category: "Sun Protection",
    shortDescription: "A broad-spectrum SPF50+ PA+++ sunscreen with wrinkle-improving and brightening functions, formulated for daily professional-grade protection.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202310/43e1706d66524a8a4bfb78f499b581d3.png",
    tags: ["SPF50+", "PA+++", "Sunscreen"],
  },
  {
    id: "tr-008",
    name: "Premium Modelling Mask",
    category: "Mask / Pack",
    shortDescription: "A professional modelling mask that soothes rough, flaky, and irritated skin while recharging moisture for a smooth, refined complexion.",
    isSkincarePro: true,
    imageUrl: "https://trandmi.com/web/product/medium/202412/4bd9a19f052f7bd3d36d4d3aa0f8abf0.png",
    tags: ["Modelling", "Soothing", "Moisture"],
  },
  {
    id: "tr-009",
    name: "Triple Care Mask 0.95fl.oz x 10ea",
    category: "Mask / Pack",
    shortDescription: "A 3-step triple care mask pack delivering soothing, regenerating, and moisturizing benefits in a single professional treatment.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202511/9edd336e344a5aeada4ef0e5b364c7a8.png",
    tags: ["3-Step", "Soothing", "Regenerating"],
  },
  {
    id: "tr-010",
    name: "Tight Moisture Hyal Balance Pad 70ea / 5.74fl.oz",
    category: "All-in-one Care",
    shortDescription: "Multi-functional hyaluronic acid-infused pads that balance, hydrate, and refine skin texture in a single step.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202412/88e4c918b92a8db3dbada44fef72c618.png",
    tags: ["Hyaluronic", "Balance", "Pad"],
  },
  {
    id: "tr-011",
    name: "Sensitive Balance Toner & Cream Set 200ml / 80ml",
    category: "Kit",
    shortDescription: "A complete duo specifically formulated for troubled, sensitive, and combination skin — restoring balance and comfort.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202508/59590fb43a31abbf476dea9b8d73b3db.png",
    tags: ["Sensitive", "Toner", "Cream"],
  },
  {
    id: "tr-012",
    name: "Dewy Glow Serum 250ml",
    category: "Ampoule / Essence",
    shortDescription: "A radiance-boosting serum that delivers a dewy, moisture-rich glow while enhancing skin luminosity and vitality.",
    isSkincarePro: false,
    imageUrl: "https://trandmi.com/web/product/medium/202604/18ffee1e4267652a72a52b6007fd850f.png",
    tags: ["Glow", "Dewy", "Radiance"],
  },
];
export interface Product {
  id: string;
  name: string;
  images: string[];
  description?: string;
}

export const PRODUCTS: Record<string, Product[]> = {
  laptops: [
    { id: "hp-probook-450", name: "HP ProBook 450 G8, Intel Core i5", images: ["/images/products/category-laptops.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "hp-elitebook-x360", name: "HP EliteBook x360, Convertible", images: ["/images/products/laptop-hp-elite-side.jpg", "/images/products/deal-laptop-featured.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "macbook-pro-m1", name: 'MacBook Pro 14", M1 Pro', images: ["/images/products/laptop-macbook-m1pro.jpg", "/images/products/deal-macbook.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "macbook-air", name: "MacBook Air, M-series", images: ["/images/products/deal-macbook.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "hp-core-ultra5", name: "HP Laptop, Intel Core Ultra 5", images: ["/images/products/deal-laptop-featured.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "msi-gaming", name: "MSI Gaming Laptop, RTX Series", images: ["/images/products/laptop-msi-gaming.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
  ],
  phones: [
    { id: "iphone-13-pro", name: "iPhone 13 Pro, 128GB", images: ["/images/products/category-phones.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "iphone-14", name: "iPhone 14, 128GB", images: ["/images/products/deal-iphone.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
    { id: "iphone-11", name: "iPhone 11, Preowned — Excellent Condition", images: ["/images/products/phone-iphone-white.jpg", "/images/products/category-phones.jpg"], description: "Genuine unit, checked in-store. Message us for full specs, condition, and current price.", },
  ],
};

// Categories with no photographed inventory yet — shown as an honest
// "ask us" state instead of fabricated product listings.
export const COMING_SOON_CATEGORIES = ["desktops", "tablets", "accessories"];

export const CATEGORY_LABELS: Record<string, string> = {
  laptops: "Laptops",
  phones: "Phones",
  desktops: "Desktops",
  tablets: "Tablets",
  accessories: "Accessories",
};

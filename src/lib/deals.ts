export interface Deal {
  id: string;
  category: string;
  name: string;
  image: string;
  description: string;
}

export const FEATURED_DEALS: Deal[] = [
  {
    id: "hp-elitebook",
    category: "Laptops",
    name: "HP EliteBook, Intel Core Ultra 5",
    image: "/images/products/deal-laptop-featured.jpg",
    description:
      "Genuine unit, officially imported and warranty-backed. Message us for the exact configuration currently in stock.",
  },
  {
    id: "macbook-pro",
    category: "Laptops",
    name: "MacBook Pro, M-series",
    image: "/images/products/deal-macbook.jpg",
    description:
      "Apple Silicon performance with our standard warranty coverage. Ask us for the specific model and storage available right now.",
  },
  {
    id: "iphone-13",
    category: "Phones",
    name: "iPhone 13, 128GB",
    image: "/images/products/deal-iphone.jpg",
    description:
      "Genuine Apple device, checked and warrantied by our team before it reaches the shelf.",
  },
];
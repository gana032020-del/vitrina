export type ProductKind = "digital" | "servicio" | "membresia";
export type CoverId = "ledger" | "kit" | "session" | "window" | "stack" | "pulse";
export type OrderStatus = "nuevo" | "pagado" | "entregado" | "cancelado";
export type OrderChannel = "whatsapp" | "email" | "transferencia";

export type Product = {
  id: string;
  slug: string;
  name: string;
  kind: ProductKind;
  price: number;
  compareAt?: number;
  blurb: string;
  description: string;
  delivery: string;
  featured: boolean;
  active: boolean;
  cover: CoverId;
};

export type Order = {
  id: string;
  createdAt: string;
  productId: string;
  productName: string;
  kind: ProductKind;
  price: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
  channel: OrderChannel;
  status: OrderStatus;
  demo?: boolean;
};

export type Brand = {
  storeName: string;
  ownerName: string;
  tagline: string;
  bio: string;
  contactEmail: string;
  whatsapp: string;
  paypal: string;
  transferInstructions: string;
  currency: string;
  locale: string;
};

export type VitrinaState = {
  brand: Brand;
  products: Product[];
  orders: Order[];
};

type Product = {
  model: number;
  name: string;
  description: string;
  image: string;
  badge: string[];
  previewThumbnails: {
    url: string;
    suffix?: string;
  }[];
  moq: {
    min: number;
    max: number;
  };
  pricePerUnit: {
    min: number;
    max: number;
  };
  setupCost: number;
  deliveryTimeWeeks: {
    min?: number;
    max: number;
  };
};

type Products = Product[];

export type { Product, Products };

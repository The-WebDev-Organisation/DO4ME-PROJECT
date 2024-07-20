export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export type Job = {
  _id: string;
  name: string;
  price: number;
};

export type Artisan = {
  _id: string;
  user: string;
  artisanName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  professions: string[];
  jobs: Job[];
  imageUrl: string;
  lastUpdated: string;
};

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type Order = {
  _id: string;
  artisan: Artisan;
  user: User;
  cartItems: {
    jobId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    addressLine1: string;
    city: string;
    email: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  ArtisanId: string;
};

export type ArtisanSearchResponse = {
  data: Artisan[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

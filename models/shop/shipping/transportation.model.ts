interface Transportation {
  id: number;
  shop_id: number;
  type: string;
  enable: boolean;
  distance: number;
  max_weight: number;
  max_w: number;
  max_l: number;
  max_h: number;
  eta: string;
  etd: number;
  days: string[];
  time_spans: string[];
  holidays: boolean;
  currency: string;
  const: number;
  distance_cof: number;
  weight_cof: number;
  price_cof: number;
  distance_weight_cof: number;
  free_shipping: boolean;
  free_shipping_limit: number;
  cod: boolean;
  sod: boolean;
  pickups: any | null;
  title: string;
  logo: string;
}

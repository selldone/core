interface ShopMenu {
  shop_id: number;
  type: string;
  menu: MenuItem[][];
  enable: boolean;
}
interface MenuItem {
  name: string;
  to: To;
}
interface To {
  name?: string;
  path?: string;
  params?: Record<string, string>;
}

export interface IProduct {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }

export interface IDiscount {
  name: string,
  value: number
}
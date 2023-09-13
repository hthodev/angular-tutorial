import { IProduct, IDiscount } from '../body/interface/IProduct';

export const productList = [
  {
    id: 0,
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'IP10',
    description: 'ip10',
    price: 10000000,
    quantity: 0,
  },
  {
    id: 1,
    image:
      'https://www.digitaltrends.com/wp-content/uploads/2019/09/iphone11-review.jpg?resize=625%2C417&p=1',
    name: 'IP11',
    description: 'ip11',
    price: 14000000,
    quantity: 0,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'IP12',
    description: 'ip12',
    price: 20000000,
    quantity: 0,
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/12582008/pexels-photo-12582008.jpeg?auto=compress&cs=tinysrgb&w=300',
    name: 'IP13',
    description: 'ip13',
    price: 30000000,
    quantity: 0,
  },
];

export function coupon(): IDiscount[] {
  return [
    {
      name: 'KHUYEMAI',
      value: 10,
    },
    {
      name: 'SANNHANH',
      value: 15,
    },
  ];
}

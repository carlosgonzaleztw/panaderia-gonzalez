export type Breads = {
  id: number;
  category: number;
  name: string;
  description: string;
  weight: string;
  price: number;
};

export const products = [
  {
    id: 1,
    categoryId: 1,
    name: 'Pan de yema',
    description: 'clasico y delicioso pan de yema',
    weight: '60gr',
    price: 1.0,
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Pan frances',
    description: 'clasico y tierno pan frances',
    weight: '80gr',
    price: 1.5,
  },
  {
    id: 3,
    categoryId: 2,
    name: 'Pan integral',
    description: 'clasico y saludable pan integral',
    weight: '70gr',
    price: 1.8,
  },
  {
    id: 4,
    categoryId: 2,
    name: 'Pan Frances integral',
    description: 'clasico y tierno pan frances integral',
    weight: '90gr',
    price: 2.0,
  },
  {
    id: 5,
    categoryId: 3,
    name: 'Pan de trigo',
    description: 'clasico y delicioso pan de trigo',
    weight: '60gr',
    price: 1.0,
  },
  {
    id: 6,
    categoryId: 3,
    name: 'Pan de hamburguesa',
    description: 'clasico y delicioso pan de hamburguesa',
    weight: '60gr',
    price: 1.0,
  },
  {
    id: 7,
    categoryId: 4,
    name: 'Pan de maíz',
    description: 'clasico y delicioso pan de maíz',
    weight: '60gr',
    price: 1.0,
  },
  {
    id: 8,
    categoryId: 5,
    name: 'Pan de centeno',
    description: 'clasico y delicioso pan de centeno',
    weight: '60gr',
    price: 1.0,
  },
  {
    id: 9,
    categoryId: 6,
    name: 'Pan de cebada',
    description: 'clasico y delicioso pan de cebada',
    weight: '60gr',
    price: 1.0,
  },
];

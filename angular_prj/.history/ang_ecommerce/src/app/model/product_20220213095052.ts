export interface Product {
  id: string,
  title: string,
  image: string,
  price: number,
  category: string,
  description: string
}
export interface IProductCreate {
  product: {
    title: string,
    image: string,
    price: number,
    category: string,
    description: string
  }
}

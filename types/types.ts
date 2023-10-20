export interface TypeLink {
  key: string;
  url: string;
  name: string;
}

export interface TypeProduct {
  id: string;
  name: string;
  image: string;
}

export interface TypeProductProps {
  product: TypeProduct
}

export type TypeRouteParams = {
  id: string; 
};
export interface IPriorityOption {
  label: string;
  placeHolder: string;
}
export interface IProperty {
  _id: string;
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft_area: number;
  description: string;
  images: string[];
}
export interface IPropertyDetail {
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  sqftArea: number;
  description: string;
  imageUrl: string;
  compareMode?: boolean;
}

import { Product, SortOption } from "../types/products";

export const sortConfig = {
    [SortOption.PRICE_ASC]: (a: Product, b: Product) => a.price - b.price,
    [SortOption.PRICE_DESC]: (a: Product, b: Product) => b.price - a.price,
    [SortOption.NAME_ASC]: (a: Product, b: Product) => a.name.localeCompare(b.name),
    [SortOption.NAME_DESC]: (a: Product, b: Product) => b.name.localeCompare(a.name),
    [SortOption.DEFAULT]: (a: Product, b: Product) => 
      Number.parseInt(a.id) - Number.parseInt(b.id)
  };

export const sortOptions = [
    { value: SortOption.DEFAULT, label: 'Default' },
    { value: SortOption.PRICE_ASC, label: 'Price: Low to High' },
    { value: SortOption.PRICE_DESC, label: 'Price: High to Low' },
    { value: SortOption.NAME_ASC, label: 'Name: A to Z' },
    { value: SortOption.NAME_DESC, label: 'Name: Z to A' },
];
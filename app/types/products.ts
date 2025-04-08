export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    image: string
    inStock: boolean
}

export enum SortOption {
    DEFAULT = "default",
    PRICE_ASC = "price-asc",
    PRICE_DESC = "price-desc",
    NAME_ASC = "name-asc",
    NAME_DESC = "name-desc"
}
  
export enum AvailabilityFilter {
    All = "all",
    InStock = "in-stock",
    OutOfStock = "out-of-stock"
}

export interface CartItem extends Product {
    quantity: number
}
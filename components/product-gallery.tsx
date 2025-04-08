"use client"

import { useState, useMemo } from "react"
import { SortOption, type Product } from "@/app/types/products"
import ProductCard from "./product-card"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import CartDrawer from "./cart-drawer"
import SidebarFilters from "./sidebar-filters"
import ProductToolbar from "./product-toolbar"
import { sortConfig } from "@/app/helper/utils"


export default function ProductGallery({ products: initialProducts }: { products: Product[] }) {
  const [categoryFilter, setCategoryFilter] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [availabilityFilter, setAvailabilityFilter] = useState<boolean | null>(null)
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.DEFAULT)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()

  const categories = [...new Set(initialProducts.map((product) => product.category))]

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts]

    if (categoryFilter.length > 0) {
      result = result.filter((product) => categoryFilter.includes(product.category))
    }

    result = result.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    if (availabilityFilter !== null) {
      result = result.filter((product) => product.inStock === availabilityFilter)
    }

    const sortFn = sortConfig[sortOption as SortOption] || sortConfig[SortOption.DEFAULT];
    return [...result].sort(sortFn);
  }, [initialProducts, categoryFilter, priceRange, availabilityFilter, sortOption])

  const clearFilters = () => {
    setCategoryFilter([])
    setPriceRange([0, 1000])
    setAvailabilityFilter(null)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
      <SidebarFilters
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        availabilityFilter={availabilityFilter}
        setAvailabilityFilter={setAvailabilityFilter}
        items={items}
        setIsCartOpen={setIsCartOpen}
        clearFilter={clearFilters}
      />

      <div>
        <ProductToolbar
          filteredCount={filteredProducts.length}
          totalCount={initialProducts.length}
          sortOption={sortOption}
          setSortOption={setSortOption}
          items={items}
          setIsCartOpen={setIsCartOpen}
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center p-8 bg-muted rounded-lg">
            <p className="text-muted-foreground">No products match your filters.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}


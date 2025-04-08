"use client"

import { Button } from "@/components/ui/button"
import ProductFilter from "./product-filter"
import type { Dispatch, SetStateAction } from "react"

export default function SidebarFilters({
  categories,
  categoryFilter,
  setCategoryFilter,
  priceRange,
  setPriceRange,
  availabilityFilter,
  setAvailabilityFilter,
  items,
  setIsCartOpen,
  clearFilter
}: {
  categories: string[]
  categoryFilter: string[]
  setCategoryFilter: Dispatch<SetStateAction<string[]>>
  priceRange: [number, number]
  setPriceRange: Dispatch<SetStateAction<[number, number]>>
  availabilityFilter: boolean | null
  setAvailabilityFilter: Dispatch<SetStateAction<boolean | null>>
  items: { quantity: number }[]
  setIsCartOpen: Dispatch<SetStateAction<boolean>>
  clearFilter: ()=> void
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={clearFilter}
        >
          Reset
        </Button>
      </div>

      <ProductFilter
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        availabilityFilter={availabilityFilter}
        setAvailabilityFilter={setAvailabilityFilter}
      />

      <div className="mt-4 lg:hidden">
        <Button onClick={() => setIsCartOpen(true)} variant="outline" className="w-full">
          View Cart ({items.reduce((acc, item) => acc + item.quantity, 0)} items)
        </Button>
      </div>
    </div>
  )
} 
"use client"

import { CartItem, SortOption } from "@/app/types/products"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { sortOptions } from "@/app/helper/utils"

export default function ProductToolbar({
    filteredCount,
    totalCount,
    sortOption,
    setSortOption,
    items,
    setIsCartOpen
  }: {
    filteredCount: number
    totalCount: number
    sortOption: SortOption
    setSortOption: (value: SortOption) => void
    items: CartItem[]
    setIsCartOpen: (open: boolean) => void
  }) {
    
    return (
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredCount} of {totalCount} products
        </p>
  
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
  
          <div className="hidden lg:block">
            <Button onClick={() => setIsCartOpen(true)} variant="outline">
              Cart ({items.reduce((acc, item) => acc + item.quantity, 0)})
            </Button>
          </div>
        </div>
      </div>
    )
  }
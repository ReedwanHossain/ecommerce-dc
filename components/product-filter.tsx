"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { AvailabilityFilter } from "@/app/types/products"


interface ProductFilterProps {
  categories: string[]
  categoryFilter: string[]
  setCategoryFilter: (categories: string[]) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  availabilityFilter: boolean | null
  setAvailabilityFilter: (availability: boolean | null) => void
}

export default function ProductFilter({
  categories,
  categoryFilter,
  setCategoryFilter,
  priceRange,
  setPriceRange,
  availabilityFilter,
  setAvailabilityFilter,
}: ProductFilterProps) {
  const handleCategoryChange = (category: string) => {
    if (categoryFilter.includes(category)) {
      setCategoryFilter(categoryFilter.filter((c) => c !== category))
    } else {
      setCategoryFilter([...categoryFilter, category])
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={categoryFilter.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label htmlFor={`category-${category}`} className="capitalize">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={[priceRange[0], priceRange[1]]}
            max={1000}
            step={10}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
          />
          <div className="flex justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Availability</h3>
        <RadioGroup
          value={availabilityFilter === null ? AvailabilityFilter.All : availabilityFilter ? AvailabilityFilter.InStock : AvailabilityFilter.OutOfStock}
          onValueChange={(value) => {
            if (value === AvailabilityFilter.All) {
              setAvailabilityFilter(null)
            } else if (value === AvailabilityFilter.InStock) {
              setAvailabilityFilter(true)
            } else {
              setAvailabilityFilter(false)
            }
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={AvailabilityFilter.All} id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={AvailabilityFilter.InStock} id="in-stock" />
            <Label htmlFor="in-stock">In Stock</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={AvailabilityFilter.OutOfStock} id="out-of-stock" />
            <Label htmlFor="out-of-stock">Out of Stock</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}


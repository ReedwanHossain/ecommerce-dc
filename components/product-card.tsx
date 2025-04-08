"use client"

import type React from "react"

import type { Product } from "@/app/types/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { Check, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const isInCart = items.some((item) => item.id === product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAdding(true)

    setTimeout(() => {
      addItem(product)
      setIsAdding(false)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    }, 500)
  }

  return (
    <Card className="h-full flex flex-col">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        <CardHeader className="p-4 pb-0">
          <div className="relative h-48 w-full mb-4">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
            </div>
            <Badge variant={product.inStock ? "default" : "secondary"}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <p className="font-semibold text-lg">{formatCurrency(product.price)}</p>
          <Button onClick={handleAddToCart} disabled={!product.inStock || isAdding || isInCart} size="sm">
            {isAdding ? (
              <span className="flex items-center">
                <span className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                Adding...
              </span>
            ) : isInCart ? (
              <span className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Added
              </span>
            ) : (
              <span className="flex items-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </span>
            )}
          </Button>
        </CardFooter>
      </Link>
    </Card>
  )
}


"use client"

import { AvailabilityFilter, type Product } from "@/app/types/products" 
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, items, updateItemQuantity } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  const cartItem = items.find((item) => item.id === product.id)
  const isInCart = !!cartItem

  const handleAddToCart = () => {
    setIsAdding(true)

    setTimeout(() => {
      if (isInCart) {
        updateItemQuantity(product.id, cartItem!.quantity + quantity)
      } else {
        for (let i = 0; i < quantity; i++) {
          addItem(product)
        }
      }

      setIsAdding(false)
      setQuantity(1)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    }, 500)
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="capitalize">
                {product.category}
              </Badge>
              <Badge variant={product.inStock ? "default" : "secondary"}>
                {product.inStock ? AvailabilityFilter.InStock : AvailabilityFilter.OutOfStock}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">{formatCurrency(product.price)}</p>

            <Separator className="my-4" />

            <div className="prose prose-sm max-w-none mb-6">
              <p>{product.description}</p>
            </div>
          </div>

          {product.inStock && (
            <div className="mt-auto">
              <div className="flex items-center mb-6">
                <span className="mr-4">Quantity:</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-r-none"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="h-10 px-4 flex items-center justify-center border-y border-input min-w-[3rem]">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-l-none"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleAddToCart} disabled={isAdding}>
                {isAdding ? (
                  <span className="flex items-center">
                    <span className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Adding...
                  </span>
                ) : isInCart ? (
                  <span className="flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add {quantity} More to Cart
                  </span>
                ) : (
                  <span className="flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </span>
                )}
              </Button>

              {isInCart && (
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  You already have {cartItem!.quantity} of this item in your cart
                </p>
              )}
            </div>
          )}

          {!product.inStock && (
            <div className="mt-auto">
              <Button className="w-full" size="lg" disabled>
                Out of Stock
              </Button>
              <p className="text-sm text-muted-foreground mt-2 text-center">This product is currently unavailable</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


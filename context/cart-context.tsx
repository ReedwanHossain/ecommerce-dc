"use client"

import type React from "react"

import type { CartItem, Product } from "@/app/types/products"
import { createContext, useContext, useEffect, useState } from "react"


interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateItemQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateItemQuantity: () => {},
  clearCart: () => {},
})

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    getItemsFromLocalStorage(setItems, setMounted)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, mounted])

  const { addItem, removeItem, updateItemQuantity } = cartLocalStorage(setItems)

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function cartLocalStorage(setItems: React.Dispatch<React.SetStateAction<CartItem[]>>) {
  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateItemQuantity = (id: string, quantity: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }
  return { addItem, removeItem, updateItemQuantity }
}

function getItemsFromLocalStorage(setItems: React.Dispatch<React.SetStateAction<CartItem[]>>, setMounted: React.Dispatch<React.SetStateAction<boolean>>) {
  const storedCart = localStorage.getItem("cart")
  if (storedCart) {
    try {
      setItems(JSON.parse(storedCart))
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error)
      localStorage.removeItem("cart")
    }
  }
  setMounted(true)
}


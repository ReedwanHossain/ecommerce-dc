"use server"

import ProductGallery from "./product-gallery"
import ReloadBtn from "./reloadBtn"

export async function ProductGalleryWrapper() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/products`)
    if (!response.ok) throw new Error("Failed to fetch products")
    const products = await response.json()
    return <ProductGallery products={products} />
  } catch (err) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <p className="text-red-600">Error loading products. Please try again later.</p>
        <ReloadBtn />
      </div>
    )
  }
} 
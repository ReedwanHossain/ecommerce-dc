'use server'

import { ProductGalleryWrapper } from "@/components/product-gallery-wrapper"

export default async function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Gallery</h1>
      <ProductGalleryWrapper />
    </main>
  )
}


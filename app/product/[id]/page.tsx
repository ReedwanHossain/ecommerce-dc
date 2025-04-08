import type { Product } from "@/app/types/products"
import ProductDetail from "@/components/product-detail"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata>  {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Product Details`,
    description: product.description,
  }
}

async function getProduct(id: string): Promise<Product | null> {
  try {
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/products`, {
      cache: "force-cache",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch product")
    }

    const products: Product[] = await res.json()
    const product = products.find((p) => p.id === id)

    return product || null
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export default async function ProductPage({ params }: { params: { id: string }}) {

  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}


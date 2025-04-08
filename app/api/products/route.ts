import { Product } from "@/app/types/products"
import { NextResponse } from "next/server"



const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium wireless headphones with HuluLulu noise cancellation technology for immersive audio experience.",
    price: 149.99,
    category: "electronics",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/1.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Advanced smartwatch with HuluLulu health tracking features and long battery life.",
    price: 199.99,
    category: "electronics",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/2.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "3",
    name: "Ergonomic Desk Chair",
    description: "Comfortable office chair with HuluLulu ergonomic design for better posture and reduced back pain.",
    price: 249.99,
    category: "furniture",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/3.jpg?height=300&width=300`,
    inStock: false,
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Programmable coffee maker with multiple brewing options.",
    price: 79.99,
    category: "appliances",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/4.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "5",
    name: "Yoga Mat",
    description: "Non-slip yoga mat made from eco-friendly materials.",
    price: 29.99,
    category: "fitness",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/5.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    description: "Tactile mechanical keyboard with customizable RGB lighting.",
    price: 129.99,
    category: "electronics",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/6.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "7",
    name: "Desk Lamp",
    description: "Adjustable LED desk lamp with multiple brightness levels.",
    price: 49.99,
    category: "furniture",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/7.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "8",
    name: "Protein Powder",
    description: "Premium whey protein powder for muscle recovery and growth.",
    price: 39.99,
    category: "fitness",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/8.jpg?height=300&width=300`,
    inStock: false,
  },
  {
    id: "9",
    name: "Blender",
    description: "High-powered blender for smoothies and food preparation.",
    price: 89.99,
    category: "appliances",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/9.jpg?height=300&width=300`,
    inStock: true,
  },
  {
    id: "10",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking.",
    price: 34.99,
    category: "electronics",
    image: `${process.env.NEXT_PUBLIC_APP_URL}/10.jpg?height=300&width=300`,
    inStock: true,
  },
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(products)
}


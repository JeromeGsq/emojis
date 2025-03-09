import EmojiCollection from "@/components/emoji-collection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Emoji Collection",
  description: "A comprehensive collection of emojis with search and copy functionality",
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Emoji Collection</h1>
      <EmojiCollection />
    </main>
  )
}


"use client"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex-shrink-0 w-full md:w-64">
      <select
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}


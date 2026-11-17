"use client";

type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

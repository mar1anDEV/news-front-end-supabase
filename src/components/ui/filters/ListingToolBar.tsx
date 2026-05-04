import React from 'react'

function ListingsToolbar() {
  return (
    <div className="flex items-center justify-between gap-4">
      
      {/* Results */}
      <p className="text-sm text-gray-500">
        128 results
      </p>

      {/* Sort */}
      <div className="relative">
        <select
          defaultValue="newest"
          className="
            outline-0
            appearance-none
            bg-white
            border border-gray-300
            rounded-lg
            px-4 py-2 pr-10
            text-sm font-medium text-gray-700
            cursor-pointer
            shadow-sm
           
            
          "
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>

        {/* Custom arrow */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ▼
        </span>
      </div>
    </div>
  )
}

export default ListingsToolbar
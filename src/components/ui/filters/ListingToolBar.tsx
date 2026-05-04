function ListingsToolbar() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">1,234 results</p>

      <div className="flex items-center gap-2">
        <select className="border border-gray-400 outline-0 rounded-lg px-2 py-2 text-sm">
          <option>Newest</option>
          <option>Price: Low → High</option>
        </select>
      </div>
    </div>
  )
}

export default ListingsToolbar
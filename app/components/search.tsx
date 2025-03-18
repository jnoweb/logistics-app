import type React from "react"

interface SearchProps {
  onSearch: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <div className="w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="Search for Driver"
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
      />
    </div>
  )
}

export default Search


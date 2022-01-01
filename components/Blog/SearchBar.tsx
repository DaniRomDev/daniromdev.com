import { SearchIcon } from 'components/Shared/Icons'

const SearchBar: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>
}> = ({ onChange }) => {
  return (
    <div className="relative w-full mb-4">
      <input
        autoFocus
        aria-label="Search articles"
        type="text"
        onChange={onChange}
        placeholder="Search articles"
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
      />
      <SearchIcon />
    </div>
  )
}

export default SearchBar

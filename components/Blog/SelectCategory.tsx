import { CrossIcon } from 'components/Shared/Icons'
import config from 'config'

const SelectCategory: React.FC<{
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  onClear: React.MouseEventHandler<HTMLButtonElement>
  selectedCategory: string
}> = ({ onChange, selectedCategory, onClear }) => {
  return (
    <>
      <select
        defaultValue=""
        className="w-full md:max-w-sm mt-1 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        onChange={onChange}
      >
        <option value="" disabled selected={selectedCategory === ''}>
          Search by category
        </option>
        {config.blog.categories.map((category) => (
          <option key={category} value={category.toLocaleLowerCase()}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <button onClick={onClear} className="absolute top-[15px] right-[60px]">
          <CrossIcon />
        </button>
      )}
    </>
  )
}

export default SelectCategory

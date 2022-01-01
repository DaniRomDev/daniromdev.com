interface CategoryBadgeProps {
  color:
    | 'blue'
    | 'red'
    | 'gray'
    | 'green'
    | 'yellow'
    | 'indigo'
    | 'purple'
    | 'pink'
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ children, color }) => {
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-md font-medium mr-2 px-3.5 py-1 rounded dark:bg-${color}-200 dark:text-${color}-900`}
    >
      {children}
    </span>
  )
}

export default CategoryBadge

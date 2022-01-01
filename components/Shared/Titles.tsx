const H1: React.FC = ({ children }) => {
  return (
    <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
      {children}
    </h1>
  )
}

const H3: React.FC = ({ children }) => {
  return (
    <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
      {children}
    </h3>
  )
}

const H4: React.FC = ({ children }) => {
  return (
    <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
      {children}
    </h4>
  )
}

export { H1, H3, H4 }

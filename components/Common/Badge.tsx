export const Badge: React.FC<{
  textColor?: string
  backgroundColor?: string
}> = ({ children, textColor = 'white', backgroundColor = 'red' }) => (
  <a
    className={`font-sans inline-block mt-2.5 float-left px-4 py-0.5 text-sm text-center text-${textColor} bg-${backgroundColor}-500 rounded`}
  >
    {children}
  </a>
)

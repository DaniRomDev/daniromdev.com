export const Badge: React.FC<{
  textColor?: string
  backgroundColor?: string
}> = ({ children, textColor = 'gray', backgroundColor = 'red' }) => (
  <h3
    className={`flex items-center font-sans font-bold text-sm text-${textColor}-200 mb-3.5 uppercase`}
  >
    <span
      className={`w-2 h-2 rounded-full bg-${backgroundColor}-500 flex-shrink-0 mr-2.5`}
    ></span>
    {children}
  </h3>
)

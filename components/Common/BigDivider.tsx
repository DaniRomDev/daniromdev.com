export const BigDivider: React.FC = ({ children }) => (
  <div className="w-full bg-gray-200 sm:inline-block sm:p-0 xl:p-4 sm:pt-4 xl:pt-auto">
    <div className="mx-auto text-center xl:container lg:max-width-full">
      <span className="font-light text-gray-500 underline xl:inline sm:hidden font-roboto">
        {children}
      </span>
    </div>
  </div>
)

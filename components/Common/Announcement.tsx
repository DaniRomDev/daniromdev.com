const Announcement: React.FC = ({ children }) => {
  return (
    <div className="bg-slate-800 p-2">
      <div className="flex items-center">
        <div className="flex mx-auto tracking-wider items-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Announcement



function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-900 text-indigo-300 p-3">
        <div className="logo">
            <span className="font-bold text-xl mx-4">iTask</span>
        </div>
        <ul className="flex mx-5 gap-8">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
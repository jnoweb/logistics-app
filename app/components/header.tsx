import type React from "react"
import logo from '../assets/logo.png'

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 border-b border-gray-300 bg-white">
      <div className="text-2xl font-bold w-32">
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header


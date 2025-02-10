import React from "react";
import { Compass, Heart, Home, MessageCircle, PlusSquare, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/images/instagram-logo.jpg'

const NavigationBar = () => {
  const navigate = useNavigate();

  const movePage = (link: string) => {
    navigate(link);
  };

  return (
    <nav className="bg-white border-b border-gray-300 fixed top-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <Link to="/" className="w-28">
          <img src={Logo} alt="Instagram" className="h-7" />
        </Link>

        {/* Search Bar - Only visible on desktop */}
        <div className="hidden md:flex items-center bg-gray-50 rounded-lg p-2 w-64">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="검색"
            className="bg-transparent focus:outline-none text-sm w-full"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <Home className="w-6 h-6" onClick={() => movePage('/')} />
          <MessageCircle className="w-6 h-6" />
          <PlusSquare className="w-6 h-6" />
          <Compass className="w-6 h-6" />
          <Heart className="w-6 h-6" />
          <img 
            src="/api/placeholder/24/24" 
            alt="profile" 
            className="w-6 h-6 rounded-full" 
            onClick={() => movePage('/profile')}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
  <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
    {/* Logo */}
    <Link to="/" className="flex items-center">
      <h1 className="font-bold text-lg sm:text-2xl text-white">
        <span className="text-teal-400">Haven</span>
        <span className="ml-1">Hub</span>
      </h1>
    </Link>

    {/* Search Bar */}
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 rounded-full shadow-md flex items-center px-4 py-2"
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent focus:outline-none text-gray-700 w-32 sm:w-64"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="text-gray-500 hover:text-gray-700 ml-2">
        <FaSearch />
      </button>
    </form>

    {/* Navigation Links */}
    <ul className="flex items-center gap-6">
      <Link to="/" className="text-white hover:text-teal-400 transition">
        <li className="hidden sm:inline">Home</li>
      </Link>
      <Link to="/about" className="text-white hover:text-teal-400 transition">
        <li className="hidden sm:inline">About</li>
      </Link>
      <Link to="/profile">
        {currentUser ? (
          <img
            className="rounded-full h-8 w-8 object-cover border-2 border-teal-400 hover:opacity-90 transition"
            src={currentUser.avatar}
            alt="profile"
          />
        ) : (
          <li className="text-white hover:text-teal-400 transition">Sign in</li>
        )}
      </Link>
    </ul>
  </div>
</header>

  );
}

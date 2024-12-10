import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Website Name */}
          <h2 className="font-bold text-lg sm:text-2xl text-teal-400">
            Heaven<span className="text-white">Hub</span>
          </h2>

          {/* Navigation Links */}
          <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-prajapati-4a4262241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/shubhamprajapati1787"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-slate-700 pt-4 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} HeavenHub. All rights reserved. <br />
          Designed and maintained by <span className="text-teal-400">Shubham Prajapati</span>.
        </div>
      </div>
    </footer>
  );
}

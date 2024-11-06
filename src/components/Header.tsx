import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Settings, User } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/e8cab2_7abea8a0814840419478f1e4512d299e~mv2.png/v1/fit/w_2500,h_1330,al_c/e8cab2_7abea8a0814840419478f1e4512d299e~mv2.png" 
              alt="RED Development Group" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Avatar Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white font-semibold">JS</span>
              </div>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                  onClick={() => console.log('Profile clicked')}
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50"
                  onClick={() => console.log('Settings clicked')}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </button>
                <hr className="my-1 border-gray-200" />
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  onClick={() => console.log('Logout clicked')}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
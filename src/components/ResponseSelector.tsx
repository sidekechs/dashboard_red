import React, { useState, useRef, useEffect } from 'react';
import { AssessmentResponse } from '../types/assessment';
import { Search } from 'lucide-react';

interface ResponseSelectorProps {
  responses: AssessmentResponse[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ResponseSelector({ responses, selectedId, onSelect }: ResponseSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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

  const selectedResponse = responses.find(r => r.id === selectedId);
  const filteredResponses = responses.filter(response => 
    response.respondentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    response.date.includes(searchTerm)
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          placeholder="Search assessments..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto border border-gray-200">
          {filteredResponses.map((response) => (
            <div
              key={response.id}
              className={`px-4 py-2 cursor-pointer hover:bg-red-50 ${
                response.id === selectedId ? 'bg-red-100' : ''
              }`}
              onClick={() => {
                onSelect(response.id);
                setSearchTerm('');
                setIsOpen(false);
              }}
            >
              <div className="font-medium text-gray-900">{response.respondentName}</div>
              <div className="text-sm text-gray-500">{response.date}</div>
            </div>
          ))}
          {filteredResponses.length === 0 && (
            <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
          )}
        </div>
      )}

      {selectedResponse && !isOpen && (
        <div className="mt-2 text-sm text-gray-500">
          Currently viewing: <span className="font-medium">{selectedResponse.respondentName}</span> - {selectedResponse.date}
        </div>
      )}
    </div>
  );
}
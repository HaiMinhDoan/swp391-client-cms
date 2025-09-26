'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { cn } from '@/utils';

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface SidebarDropdownData {
  title: string;
  mainTitle: string;
  mainDescription: string;
  items: DropdownItem[];
}

interface SidebarDropdownProps {
  data: SidebarDropdownData;
  onItemClick: () => void;
  className?: string;
}

const SidebarDropdown = ({ data, onItemClick, className }: SidebarDropdownProps) => {
  const { title, items } = data;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick();
  };

  return (
    <div className={cn('w-full', className)}>
      <button
        className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors font-medium flex items-center justify-between"
        onClick={handleToggle}
      >
        <span>{title}</span>
        {isOpen ? <HiChevronDown className="w-4 h-4" /> : <HiChevronRight className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2 fade-in duration-300">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-all duration-200 hover:translate-x-1 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={handleItemClick}
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">{item.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarDropdown;

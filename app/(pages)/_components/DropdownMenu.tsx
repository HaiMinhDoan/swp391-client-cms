'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import { cn } from '@/utils';
import { createPortal } from 'react-dom';

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface DropdownMenuData {
  title: string;
  mainTitle: string;
  mainDescription: string;
  items: DropdownItem[];
}

interface DropdownMenuProps {
  data: DropdownMenuData;
  className?: string;
}

const DropdownMenu = ({ data, className }: DropdownMenuProps) => {
  const { title, mainTitle, mainDescription, items } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsAnimating(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setIsOpen(false);
    }, 100);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setIsOpen(false);
    }, 50);
    setHoverTimeout(timeout);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={cn(
          'px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1',
          className
        )}
      >
        {title}
        <HiChevronDown className={cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen &&
        mounted &&
        createPortal(
          <>
            {/* Dropdown */}
            <div
              className={cn(
                'fixed top-[73px] left-0 w-screen bg-gray-100 shadow-lg border-t border-gray-200 z-[60] transition-all duration-300 ease-out',
                isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              )}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
                <div className="flex gap-6">
                  {/* Left Section - Title & Description */}
                  <div
                    className={cn(
                      'w-1/4 transition-all duration-500',
                      isAnimating ? 'animate-in fade-in slide-in-from-left-4' : ''
                    )}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 group-hover:text-blue-600">
                      {mainTitle || title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed transition-all duration-300">
                      {mainDescription || `Tìm hiểu về ${title} - Các dịch vụ và chương trình đào tạo chuyên nghiệp.`}
                    </p>
                  </div>

                  {/* Right Section - Grid of Cards */}
                  <div className="flex-1">
                    <div className="grid grid-cols-3 gap-3">
                      {items.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={cn(
                            'group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1',
                            isAnimating ? 'animate-in fade-in slide-in-from-top-2' : ''
                          )}
                          style={{ animationDelay: `${index * 50}ms` }}
                          onClick={handleItemClick}
                        >
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};

export default DropdownMenu;

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils';
import { HiMenu, HiX } from 'react-icons/hi';
import DropdownMenu from './DropdownMenu';
import SidebarDropdown from './SidebarDropdown';
import { useHeaderTheme } from '@/contexts/HeaderContext';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { headerTheme } = useHeaderTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 50;
      setIsScrolled(scrolled);

      // Add padding to body when header is fixed with smooth transition
      if (scrolled) {
        document.body.style.paddingTop = '73px';
        document.body.style.transition = 'padding-top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      } else {
        document.body.style.paddingTop = '0px';
        document.body.style.transition = 'padding-top 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.paddingTop = '0px';
    };
  }, []);

  // Dropdown data
  const dropdownData = [
    {
      title: 'Về Tara Academy',
      href: '#',
      mainTitle: 'VỀ TARA ACADEMY',
      mainDescription:
        'Tìm hiểu về Tara Academy - Đơn vị hàng đầu về Đào tạo quản lý hướng đến sự phát triển bền vững.',
      items: [
        {
          title: 'Giới thiệu',
          href: '#',
          description: 'Tìm hiểu về tầm nhìn, sứ mệnh, giá trị cốt lõi và hồ sơ năng lực của VMP Academy.',
        },
        {
          title: 'Tuyển dụng',
          href: '#',
          description: 'Cơ hội nghề nghiệp tại VMP Academy. Khám phá các vị trí phù hợp với bạn.',
        },
        {
          title: 'Nhân sự',
          href: '#',
          description: 'Thông tin về ban lãnh đạo và đội ngũ nhân viên tại VMP Academy.',
        },
        {
          title: 'Cảm nhận học viên',
          href: '#',
          description: 'Chia sẻ từ các học viên đã tham gia chương trình đào tạo của VMP Academy.',
        },
        {
          title: 'Cafe & Learn',
          href: '#',
          description: 'Tóm tắt các sự kiện miễn phí dành cho cộng đồng L&D về đào tạo quản lý.',
        },
        {
          title: 'Liên hệ',
          href: '#',
          description: 'Thông tin và cách thức liên hệ với VMP Academy.',
        },
      ],
    },
    {
      title: 'Dịch vụ',
      href: '/service',
      mainTitle: 'DỊCH VỤ',
      mainDescription: 'Khám phá các dịch vụ đào tạo và tư vấn chuyên nghiệp của chúng tôi.',
      items: [
        {
          title: 'Đào tạo quản lý',
          href: '#',
          description: 'Các khóa học quản lý chuyên sâu dành cho doanh nghiệp.',
        },
        {
          title: 'Tư vấn chiến lược',
          href: '#',
          description: 'Dịch vụ tư vấn chiến lược phát triển bền vững cho doanh nghiệp.',
        },
        {
          title: 'Coaching cá nhân',
          href: '#',
          description: 'Chương trình coaching 1-1 cho các nhà lãnh đạo.',
        },
      ],
    },
    {
      title: 'Đào tạo',
      href: '#',
      mainTitle: 'ĐÀO TẠO',
      mainDescription: 'Các chương trình đào tạo từ cơ bản đến nâng cao dành cho doanh nghiệp.',
      items: [
        {
          title: 'Khóa học cơ bản',
          href: '#',
          description: 'Các khóa học nền tảng về quản lý và lãnh đạo.',
        },
        {
          title: 'Khóa học nâng cao',
          href: '#',
          description: 'Chương trình đào tạo chuyên sâu cho cấp quản lý cao.',
        },
        {
          title: 'Đào tạo doanh nghiệp',
          href: '#',
          description: 'Giải pháp đào tạo tùy chỉnh cho từng doanh nghiệp.',
        },
      ],
    },
    {
      title: 'Góc học tập',
      href: '#',
      mainTitle: 'GÓC HỌC TẬP',
      mainDescription: 'Tài liệu, blog và case study để nâng cao kiến thức quản lý.',
      items: [
        {
          title: 'Blog học tập',
          href: '#',
          description: 'Các bài viết chia sẻ kiến thức và kinh nghiệm quản lý.',
        },
        {
          title: 'Case study',
          href: '#',
          description: 'Phân tích các tình huống thực tế trong quản lý doanh nghiệp.',
        },
        {
          title: 'Tài liệu miễn phí',
          href: '#',
          description: 'Download các tài liệu và template quản lý miễn phí.',
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={cn(
          'w-full relative transition-all duration-500 ease-out',
          isScrolled
            ? `fixed top-0 left-0 right-0 z-40 backdrop-blur-md shadow-xl border-b transform translate-y-0 ${
                headerTheme.backgroundColor
              } ${headerTheme.borderColor || 'border-gray-200'}`
            : `relative transform translate-y-0 ${headerTheme.backgroundColor}`
        )}
        style={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className={cn(
            'flex justify-between items-center px-4 sm:px-6 md:px-8',
            'w-full max-w-full md:max-w-4xl lg:max-w-7xl mx-auto',
            'transition-all duration-500 ease-out'
          )}
          style={{
            paddingTop: isScrolled ? '12px' : '16px',
            paddingBottom: isScrolled ? '12px' : '16px',
            transition: 'padding 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Tara Academy"
              width={isScrolled ? 120 : 150}
              height={isScrolled ? 40 : 50}
              className={cn('hidden md:block transition-all duration-500 ease-out')}
              style={{
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </Link>
          <div
            className={cn(
              'hidden md:flex items-center transition-all duration-500 ease-out',
              isScrolled ? 'gap-4' : 'gap-6'
            )}
          >
            <nav
              className={cn(
                'flex font-medium text-base transition-all duration-500 ease-out',
                isScrolled ? 'gap-2 lg:gap-4 xl:gap-6' : 'gap-4 md:gap-1 lg:gap-6 xl:gap-8'
              )}
            >
              {dropdownData.map((data, index) => (
                <Link href={data.href} key={index}>
                  <DropdownMenu key={index} data={data} />
                </Link>
              ))}
            </nav>
            <div
              className={cn('flex items-center transition-all duration-500 ease-out', isScrolled ? 'gap-3' : 'gap-4')}
            >
              <Button
                variant="ghost"
                className={cn(
                  'rounded-3xl transition-all duration-500 ease-out',
                  isScrolled ? 'w-[90px] text-sm' : 'w-[100px]'
                )}
              >
                Login
              </Button>
              <Button
                className={cn(
                  'rounded-3xl transition-all duration-500 ease-out',
                  isScrolled ? 'w-[90px] text-sm' : 'w-[100px]'
                )}
              >
                Sign Up
              </Button>
            </div>
          </div>

          <div className="flex md:hidden w-full items-center justify-between">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 focus:outline-none transition-all duration-200 hover:scale-100 active:scale-100"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <HiMenu className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex-1 flex justify-center">
              <Image
                src="/assets/logo.png"
                alt="Tara Academy"
                width={isScrolled ? 100 : 120}
                height={isScrolled ? 35 : 40}
                className={cn('object-contain transition-all duration-500 ease-out')}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>
            <Button
              variant="outline"
              className={cn(
                'rounded-3xl flex items-center gap-1 transition-all duration-500 ease-out',
                isScrolled ? 'w-[70px] text-sm' : 'w-[80px]'
              )}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30 animate-in fade-in duration-300"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl flex flex-col z-50 animate-in slide-in-from-left duration-300 ease-out">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image src="/assets/logo.png" alt="Tara Academy" width={120} height={40} />
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-100 active:scale-100"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                <HiX className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <nav className="flex-1 p-6">
              <div className="flex flex-col gap-2">
                {dropdownData.map((data, index) => (
                  <SidebarDropdown key={index} data={data} onItemClick={() => setSidebarOpen(false)} />
                ))}
              </div>
            </nav>
            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="rounded-3xl w-full flex items-center justify-center gap-2"
                  onClick={() => setSidebarOpen(false)}
                >
                  Login
                </Button>
                <Button className="rounded-3xl w-full" onClick={() => setSidebarOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;

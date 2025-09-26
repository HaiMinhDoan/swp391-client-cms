'use client';

import { useSetHeaderTheme } from '../../hooks/useHeaderTheme';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {
  HiBriefcase,
  HiAcademicCap,
  HiUsers,
  HiBuildingOffice2,
  HiChartBar,
  HiDocumentText,
  HiCog,
} from 'react-icons/hi2';
import CourseCard from './_components/CourseCard';
import ServiceCategoryCard from './_components/ServiceCategoryCard';
import ContactForm from './_components/ContactForm';
import ScrollAnimation from './_components/ScrollAnimation';
import { Course, ServiceCategory } from '@/common/interface';

const Service: React.FC = () => {
  const courses: Course[] = [
    {
      image: '/assets/course1.jpg',
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      instructor: {
        name: 'Lina',
        avatar: '/assets/instructor1.jpg',
      },
      originalPrice: '$100',
      currentPrice: '$80',
      progress: {
        current: 5,
        total: 7,
      },
    },
    {
      image: '/assets/course2.jpg',
      category: 'Design',
      duration: '4 hours',
      title: 'AWS Certified solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      instructor: {
        name: 'Lina',
        avatar: '/assets/instructor1.jpg',
      },
      originalPrice: '$100',
      currentPrice: '$30',
    },
    {
      image: '/assets/course3.jpg',
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      instructor: {
        name: 'Lina',
        avatar: '/assets/instructor1.jpg',
      },
      originalPrice: '$100',
      currentPrice: '$80',
    },
    {
      image: '/assets/course4.jpg',
      category: 'Design',
      duration: '4 hours',
      title: 'AWS Certified solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      instructor: {
        name: 'Lina',
        avatar: '/assets/instructor1.jpg',
      },
      originalPrice: '$100',
      currentPrice: '$80',
    },
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      icon: <HiBriefcase className="w-6 h-6 text-blue-500" />,
      title: 'Tư vấn doanh nghiệp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      icon: <HiAcademicCap className="w-6 h-6 text-purple-500" />,
      title: 'Đào tạo theo yêu cầu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      icon: <HiUsers className="w-6 h-6 text-blue-500" />,
      title: 'Quản trị nhân sự',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      icon: <HiBuildingOffice2 className="w-6 h-6 text-green-500" />,
      title: 'Văn hóa doanh nghiệp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      icon: <HiChartBar className="w-6 h-6 text-orange-500" />,
      title: 'Xây dựng lộ trình đào tạo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      icon: <HiDocumentText className="w-6 h-6 text-pink-500" />,
      title: 'Phát triển giảng viên nội bộ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      icon: <HiCog className="w-6 h-6 text-gray-500" />,
      title: 'Xây dựng khung năng lực',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Welcome back */}
      <ScrollAnimation>
        <section className="bg-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, ready for your next lesson?</h1>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                View history
              </a>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {courses.slice(0, 4).map((course, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <CourseCard {...course} />
                </ScrollAnimation>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-2">
              <button className="w-8 h-8 bg-green-200 hover:bg-green-300 rounded-full flex items-center justify-center transition-colors">
                <HiChevronLeft className="w-4 h-4 text-green-600" />
              </button>
              <button className="w-8 h-8 bg-green-200 hover:bg-green-300 rounded-full flex items-center justify-center transition-colors">
                <HiChevronRight className="w-4 h-4 text-green-600" />
              </button>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Service Categories Section */}
      <ScrollAnimation>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Choice favorite service from top category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceCategories.map((category, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <ServiceCategoryCard {...category} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Recommended for you Section */}
      <ScrollAnimation>
        <section className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recommended for you</h2>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                See all
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <CourseCard {...course} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Form Section */}
      <ScrollAnimation>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <ContactForm />
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* Dark Blue Banner */}
      <ScrollAnimation>
        <section className="py-16 bg-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Online coaching lessons for remote learning.</h3>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start learning now
            </button>
          </div>
        </section>
      </ScrollAnimation>

      {/* Personal Development Section */}
      <ScrollAnimation>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">The course in personal development</h2>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                See all
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <CourseCard {...course} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Service;

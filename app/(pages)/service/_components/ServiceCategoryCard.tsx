'use client';

import { ServiceCategory } from '@/common/interface';

interface ServiceCategoryCardProps extends ServiceCategory {
  className?: string;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group ${className}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 mb-3 text-lg">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCategoryCard;

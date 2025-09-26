'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Course } from '@/common/interface';

interface CourseCardProps extends Course {
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  category,
  duration,
  title,
  description,
  instructor,
  originalPrice,
  currentPrice,
  progress,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group ${className}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category and Duration */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{category}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{duration}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Progress Bar (if provided) */}
        {progress && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>
                Lesson {progress.current} of {progress.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Instructor */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image src={instructor.avatar} alt={instructor.name} width={24} height={24} className="object-cover" />
          </div>
          <span className="text-sm text-gray-600">{instructor.name}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {originalPrice && <span className="text-sm text-gray-400 line-through">{originalPrice}</span>}
          <span className="text-lg font-bold text-green-600">{currentPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

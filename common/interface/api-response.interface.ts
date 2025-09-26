import { Course } from './course.interface';
import { ServiceCategory } from './service-category.interface';

// API response interfaces
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface CourseResponse extends ApiResponse<Course[]> {}
export interface ServiceCategoryResponse extends ApiResponse<ServiceCategory[]> {}

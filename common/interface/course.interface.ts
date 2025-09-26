// Course related interfaces
export interface Instructor {
  name: string;
  avatar: string;
}

export interface Progress {
  current: number;
  total: number;
}

export interface Course {
  image: string;
  category: string;
  duration: string;
  title: string;
  description: string;
  instructor: Instructor;
  originalPrice?: string;
  currentPrice: string;
  progress?: Progress;
}

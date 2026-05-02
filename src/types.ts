export type BJJLevel = 'White' | 'Blue' | 'Purple' | 'Brown' | 'Black';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type Category = 'Guard Passing' | 'Sweeps' | 'Submissions' | 'Escapes' | 'Wrestling' | 'No-Gi' | 'Gi';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl: string;
  isCompleted?: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: CourseLevel;
  category: Category;
  duration: string;
  price: number;
  image: string;
  description: string;
  modules: Module[];
  badge?: string;
  studentsCount?: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  level: BJJLevel;
  purchasedCourseIds: string[];
  progress: Record<string, number>; // courseId -> percentage
}

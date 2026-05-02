import { Course, Category } from './types';

export const CATEGORIES: Category[] = [
  'Guard Passing',
  'Sweeps',
  'Submissions',
  'Escapes',
  'Wrestling',
  'No-Gi',
  'Gi'
];

export const FEATURED_COURSES: Course[] = [
  {
    id: '1',
    title: 'Atomic Leg Drags',
    instructor: 'Lucas "The Flash" Silva',
    level: 'Beginner',
    category: 'Guard Passing',
    duration: '4h 20m',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800',
    description: 'Master the most explosive guard passing system in modern No-Gi.',
    badge: 'Popular',
    studentsCount: 1240,
    modules: [
      {
        id: 'm1',
        title: 'Foundations',
        lessons: [
          { id: 'l1', title: 'The Grip Fight', duration: '12:00', description: 'Establishing control early.', videoUrl: '#' },
          { id: 'l2', title: 'Explosive Entry', duration: '15:00', description: 'Body mechanics for the drag.', videoUrl: '#' }
        ]
      },
      {
        id: 'm2',
        title: 'Core Techniques',
        lessons: [
          { id: 'l3', title: 'The High Drag', duration: '20:00', description: 'Dealing with heavy hips.', videoUrl: '#' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Precision Kimuras',
    instructor: 'Sarah "The Serpent" Miller',
    level: 'Intermediate',
    category: 'Submissions',
    duration: '3h 15m',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1599058917233-57c0b68486c7?auto=format&fit=crop&q=80&w=800',
    description: 'Transform your kimura from a simple submission to a powerful control system.',
    badge: 'New',
    studentsCount: 850,
    modules: []
  },
  {
    id: '3',
    title: 'Dynamic Half Guard',
    instructor: 'Bernardo Ribeiro',
    level: 'Advanced',
    category: 'Sweeps',
    duration: '5h 45m',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=800',
    description: 'Never get flattened again. A complete guide to active half guard.',
    badge: 'Best Price',
    studentsCount: 2100,
    modules: []
  }
];

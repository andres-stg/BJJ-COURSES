/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import CoursePlayer from './pages/CoursePlayer';
import { useState } from 'react';
import { User } from './types';

export default function App() {
  const [user, setUser] = useState<User>({
    name: 'Andres Garcia',
    email: 'andres@example.com',
    avatar: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200',
    level: 'Blue',
    purchasedCourseIds: ['1'],
    progress: { '1': 45 }
  });

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
        <Navbar user={user} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Catalog />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/checkout/:courseId" element={<Checkout user={user} />} />
            <Route path="/my-courses/:courseId" element={<CoursePlayer user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotPopup from '@/components/shared/ChatbotPopup';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatbotPopup />
    </div>
  );
}
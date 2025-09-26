'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#252641] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <Image src="/assets/logo.png" alt="Tara Academy" width={160} height={60} className="object-contain" />
            <div className="h-8 w-px bg-gray-500"></div>
            <div className="text-white">
              <div className="text-lg font-semibold">Tara Academy</div>
              <div className="text-sm text-gray-300">for Learning</div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Subscribe to get our Newsletter</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400"
              required
            />
            <Button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-2 rounded-lg font-medium transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-white hover:text-teal-400 transition-colors">
              Careers
            </a>
            <div className="h-4 w-px bg-gray-500"></div>
            <a href="#" className="text-white hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <div className="h-4 w-px bg-gray-500"></div>
            <a href="#" className="text-white hover:text-teal-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-400">© 2025 Tara Academy. Copyright all rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

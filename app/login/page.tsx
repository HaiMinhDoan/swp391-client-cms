'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import LoginForm from './_components/LoginForm';
import RegisterForm from './_components/RegisterForm';
import { cn } from '@/utils';

type FormType = 'login' | 'register';

const Login = () => {
  const [formType, setFormType] = useState<FormType>('login');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTab = (type: FormType) => {
    setFormType(type);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: type === 'login' ? 0 : scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div
        className={cn(
          'md:w-3/5 w-full min-h-[200px] sm:min-h-[300px] md:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-120px)] h-64 md:h-auto',
          'md:!pr-0 xl:p-10 lg:p-8 md:p-6 p-4'
        )}
      >
        <div className="relative flex flex-col justify-end h-full">
          <Image
            src="/assets/login-pic.jpg"
            alt="Classroom"
            width={500}
            height={500}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-2xl"
          />
          <div className="relative z-10 p-6 md:p-8 mt-auto">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 drop-shadow">Lorem Ipsum is simply</h2>
            <p className="text-white text-base drop-shadow">Lorem Ipsum is simply</p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'md:w-2/5 w-full flex flex-col justify-center bg-white min-h-[200px] sm:min-h-[300px] md:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-120px)]',
          'px-4 py-8 2xl:px-30 xl:px-20 lg:px-15 md:px-10 md:py-8 sm:px-10'
        )}
      >
        <h3 className="text-lg font-semibold mb-6 text-center">Chào mừng bạn đến với Tara Academy</h3>
        <div className="flex justify-center mb-6">
          <div className="relative flex w-[330px] h-[60px] bg-[#39AD4C99] rounded-full">
            <div
              className="absolute top-0 left-0 m-[10px] h-[40px] w-[calc(100%/2-20px)] bg-[#39AD4C] rounded-full shadow transition-all duration-500"
              style={{ transform: formType === 'login' ? 'translateX(0)' : 'translateX(165px)' }}
            />
            <button
              type="button"
              className={`flex-1 z-10 px-6 py-2 rounded-full font-semibold transition-all duration-500 ${
                formType === 'login' ? 'text-white' : 'text-green-700'
              }`}
              onClick={() => handleTab('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={`flex-1 z-10 px-6 py-2 rounded-full font-semibold transition-all duration-500 ${
                formType === 'register' ? 'text-white' : 'text-green-700'
              }`}
              onClick={() => handleTab('register')}
            >
              Register
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-center mb-6 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div ref={scrollRef} className="relative w-full overflow-hidden" style={{ height: 400 }}>
          <div
            className={cn(
              'flex w-[250%] transition-transform duration-500 justify-between',
              formType === 'register' ? 'translate-x-[-20%]' : 'translate-x-0'
            )}
          >
            <div className="w-[40%] min-w-0 px-1">
              <LoginForm />
            </div>
            <div className="w-[40%] min-w-0 px-1">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

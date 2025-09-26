import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/utils';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: { email: '', username: '', password: '' },
  });

  const onSubmit = (data: { email: string; username: string; password: string }) => {
    // Submit logic here
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <Label htmlFor="email" className="mb-3">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your Email Address"
          {...register('email', { required: 'Email is required' })}
          className={cn(
            'w-full rounded-full px-8 py-6 text-sm md:text-base transition-all duration-200',
            errors.email && 'ring-2 ring-red-400'
          )}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1">
            {errors.email.message as string}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="username" className="mb-3">
          User name
        </Label>
        <Input
          id="username"
          type="text"
          placeholder="Enter your User name"
          {...register('username', { required: 'User name is required' })}
          className={cn(
            'w-full rounded-full px-8 py-6 text-sm md:text-base transition-all duration-200',
            errors.username && 'ring-2 ring-red-400'
          )}
          aria-invalid={!!errors.username}
          aria-describedby="username-error"
        />
        {errors.username && (
          <p id="username-error" className="text-red-500 text-xs mt-1">
            {errors.username.message as string}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="password" className="mb-3">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your Password"
            {...register('password', { required: 'Password is required' })}
            className={cn(
              'w-full rounded-full px-8 py-6 text-sm md:text-base pr-10 transition-all duration-200',
              errors.password && 'ring-2 ring-red-400'
            )}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 rounded-full bg-transparent"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={22} className="text-gray-500" />
            ) : (
              <AiOutlineEye size={22} className="text-gray-500" />
            )}
          </button>
          {errors.password && (
            <p id="password-error" className="text-red-500 text-xs mt-1">
              {errors.password.message as string}
            </p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        className="w-full py-2 rounded-full text-white font-semibold text-lg mt-2 shadow transition-all duration-200 active:scale-95"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;

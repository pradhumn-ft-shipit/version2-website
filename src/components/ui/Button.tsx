import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-brandDeep text-white hover:bg-brandDeepHover shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300',
      secondary: 'bg-bgCanvas text-textPrimary border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300',
      ghost: 'bg-transparent text-textPrimary hover:bg-gray-100 transition-all duration-300'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl font-medium',
      lg: 'px-8 py-4 text-lg rounded-2xl font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brandMint focus:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

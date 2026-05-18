import { TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { cn } from '@/utils/cn';
import { Text } from './Text';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  title?: string;
  children?: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  title, 
  children,
  className,
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'flex-row items-center justify-center rounded-xl';
  
  const variants = {
    primary: 'bg-primary dark:bg-accent',
    secondary: 'bg-slate-100 dark:bg-slate-800',
    outline: 'border-2 border-primary dark:border-accent bg-transparent',
    ghost: 'bg-transparent',
  };

  const textVariants = {
    primary: 'text-white dark:text-primary',
    secondary: 'text-primary dark:text-white',
    outline: 'text-primary dark:text-accent',
    ghost: 'text-primary dark:text-accent',
  };

  const sizes = {
    sm: 'py-2 px-4',
    md: 'py-3 px-6',
    lg: 'py-4 px-8',
  };

  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        isDisabled && 'opacity-50',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'primary' ? '#fff' : '#0F172A'} />
      ) : children ? (
        children
      ) : (
        <Text weight="medium" className={cn('text-center', textVariants[variant])}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

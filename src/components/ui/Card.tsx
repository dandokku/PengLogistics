import { View, ViewProps } from 'react-native';
import { cn } from '@/utils/cn';

interface CardProps extends ViewProps {
  variant?: 'elevated' | 'outlined' | 'flat';
}

export function Card({ variant = 'elevated', className, children, ...props }: CardProps) {
  const baseStyles = 'rounded-2xl p-4';
  
  const variants = {
    elevated: 'bg-white shadow-sm dark:bg-surfaceDark',
    outlined: 'border border-slate-200 bg-white dark:border-slate-800 dark:bg-surfaceDark',
    flat: 'bg-slate-50 dark:bg-slate-900',
  };

  return (
    <View className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </View>
  );
}

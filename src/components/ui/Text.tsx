import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { cn } from '@/utils/cn';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  weight?: 'normal' | 'medium' | 'bold';
  className?: string;
}

export function Text({ variant = 'body', weight = 'normal', className, ...props }: TextProps) {
  const baseStyles = 'text-primary dark:text-surfaceLight';
  
  const variants = {
    h1: 'text-3xl font-display',
    h2: 'text-2xl font-display',
    h3: 'text-xl font-display',
    body: 'text-base font-sans',
    caption: 'text-sm font-sans text-slate-500',
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  return (
    <RNText
      className={cn(baseStyles, variants[variant], weights[weight], className)}
      {...props}
    />
  );
}

import { TextInput, TextInputProps, View } from 'react-native';
import { cn } from '@/utils/cn';
import { Text } from './Text';
import { forwardRef } from 'react';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, className, containerClassName, ...props }, ref) => {
    return (
      <View className={cn('w-full', containerClassName)}>
        {label && (
          <Text variant="caption" weight="medium" className="mb-1 ml-1">
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          placeholderTextColor="#94a3b8"
          className={cn(
            'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-primary dark:border-slate-800 dark:bg-slate-900 dark:text-white',
            error && 'border-error bg-red-50 dark:border-error dark:bg-red-900/10',
            className
          )}
          {...props}
        />
        {error && (
          <Text variant="caption" className="mt-1 ml-1 text-error">
            {error}
          </Text>
        )}
      </View>
    );
  }
);

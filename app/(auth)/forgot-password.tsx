import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Text } from '@/components/ui/Text';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Password reset link sent to your email.');
      router.back();
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-slate-950"
    >
      <View className="flex-1 px-6 justify-center">
        <View className="mb-10">
          <Text variant="h1" className="mb-2">Forgot Password</Text>
          <Text variant="body" className="text-slate-500">Enter your email to receive a password reset link</Text>
        </View>

        <View className="gap-y-4">
          <Input label="Email Address" placeholder="john@example.com" keyboardType="email-address" value={email} onChangeText={setEmail} />
          
          <Button title="Reset Password" onPress={handleReset} isLoading={isLoading} className="mt-4" />
          
          <Button title="Back to Login" variant="ghost" onPress={() => router.back()} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

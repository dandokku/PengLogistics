import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Text } from '@/components/ui/Text';
import { useAuthStore, Role } from '@/store/authStore';

export default function OTPScreen() {
  const { phone, role } = useLocalSearchParams();
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore(state => state.login);

  const handleVerify = async () => {
    setIsLoading(true);
    // Simulate API call for OTP verification
    setTimeout(async () => {
      setIsLoading(false);
      
      const userRole = (role as Role) || 'CUSTOMER';
      const userName = 
        userRole === 'ADMIN' 
          ? 'Sarah Admin' 
          : userRole === 'RIDER' 
            ? 'Michael Rider' 
            : 'John Customer';

      // Mock successful login
      await login('mock-jwt-token', {
        id: `user-${userRole.toLowerCase()}`,
        name: userName,
        email: `${userRole.toLowerCase()}@example.com`,
        phone: phone as string,
        role: userRole,
      });

      // Navigate to the correct role layout
      if (userRole === 'RIDER') {
        router.replace('/(rider)/(tabs)');
      } else if (userRole === 'ADMIN') {
        router.replace('/(admin)/(drawer)');
      } else {
        router.replace('/(customer)/(tabs)');
      }
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-slate-950"
    >
      <View className="flex-1 px-6 justify-center">
        <View className="mb-12">
          <Text variant="h1" className="mb-2">Verify Phone</Text>
          <Text variant="body" className="text-slate-500">
            Code sent to {phone} ({role})
          </Text>
        </View>

        <View className="gap-y-4">
          <Input
            label="One-Time Password"
            placeholder="000000"
            keyboardType="number-pad"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
            className="text-center text-2xl tracking-widest"
          />
          <Button 
            title="Verify & Login" 
            onPress={handleVerify} 
            isLoading={isLoading} 
            className="mt-4" 
          />
          <Button 
            title="Go Back" 
            variant="ghost"
            onPress={() => router.back()} 
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

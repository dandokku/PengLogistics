import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Text } from '@/components/ui/Text';
import { Truck } from 'lucide-react-native';
import { cn } from '@/utils/cn';

export default function LoginScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'CUSTOMER' | 'RIDER' | 'ADMIN'>('CUSTOMER');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (phone.length < 10) {
      Alert.alert('Invalid Phone', 'Please enter a valid phone number.');
      return;
    }
    setIsLoading(true);
    // Simulate API call for OTP request
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to OTP screen with selected role passed as param
      router.push({ pathname: '/(auth)/otp', params: { phone, role } });
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-slate-950"
    >
      <View className="flex-1 px-6 justify-center">
        <View className="items-center mb-8">
          <View className="w-16 h-16 bg-primary/10 dark:bg-accent/20 rounded-2xl items-center justify-center mb-6">
            <Truck size={32} color="#F59E0B" />
          </View>
          <Text variant="h1" className="text-center mb-2">Welcome Back</Text>
          <Text variant="body" className="text-center text-slate-500">
            Enter your details to test the demo
          </Text>
        </View>

        <View className="gap-y-4">
          <Input
            label="Phone Number"
            placeholder="+1 234 567 8900"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <View>
            <Text variant="caption" weight="medium" className="mb-2 ml-1">
              Select Role for Testing
            </Text>
            <View className="flex-row gap-x-2">
              {(['CUSTOMER', 'RIDER', 'ADMIN'] as const).map((r) => (
                <TouchableOpacity
                  key={r}
                  onPress={() => setRole(r)}
                  className={cn(
                    'flex-1 py-3 px-2 rounded-xl border items-center justify-center',
                    role === r 
                      ? 'bg-accent/10 border-accent' 
                      : 'bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
                  )}
                >
                  <Text 
                    variant="caption" 
                    weight="bold" 
                    className={role === r ? 'text-accent font-bold' : 'text-slate-500'}
                  >
                    {r}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Button 
            title="Continue" 
            onPress={handleLogin} 
            isLoading={isLoading} 
            className="mt-4" 
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

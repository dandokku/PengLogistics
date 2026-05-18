import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Text } from '@/components/ui/Text';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push({ pathname: '/(auth)/otp', params: { phone } });
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-slate-950"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6 justify-center py-12">
        <View className="mb-10">
          <Text variant="h1" className="mb-2">Create Account</Text>
          <Text variant="body" className="text-slate-500">Sign up to get started with Peng Logistics</Text>
        </View>

        <View className="gap-y-4">
          <Input label="Full Name" placeholder="John Doe" value={name} onChangeText={setName} />
          <Input label="Email Address" placeholder="john@example.com" keyboardType="email-address" value={email} onChangeText={setEmail} />
          <Input label="Phone Number" placeholder="+1 234 567 8900" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
          
          <Button title="Sign Up" onPress={handleRegister} isLoading={isLoading} className="mt-4" />
          
          <View className="flex-row justify-center mt-4">
            <Text variant="body" className="text-slate-500">Already have an account? </Text>
            <Text variant="body" className="text-accent font-bold" onPress={() => router.push('/(auth)/login')}>Log In</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

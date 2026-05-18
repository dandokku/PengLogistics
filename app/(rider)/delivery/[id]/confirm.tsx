import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Camera, Check } from 'lucide-react-native';

export default function DeliveryConfirmScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    if (!otp || !hasPhoto) {
      alert('Please fill out all fields and take a verification photo.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Delivery Successfully Verified!');
      router.replace('/(rider)/(tabs)');
    }, 1500);
  };

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Confirm Delivery</Text>

      <Card className="mb-6 p-6 items-center">
        <Text variant="h3" className="mb-4">Proof of Delivery Photo</Text>
        <TouchableOpacity 
          onPress={() => setHasPhoto(true)}
          activeOpacity={0.7}
          className="w-full"
        >
          <Card 
            variant="flat" 
            className="w-full h-48 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-dashed border-slate-300"
          >
            {hasPhoto ? (
              <View className="flex-row items-center gap-x-2">
                <Check color="#10B981" size={24} />
                <Text variant="body" weight="medium" className="text-emerald-500">Photo Saved</Text>
              </View>
            ) : (
              <View className="items-center">
                <Camera size={32} color="#94a3b8" />
                <Text variant="caption" className="mt-2 text-slate-500">Click to Snap Drop-Off Photo</Text>
              </View>
            )}
          </Card>
        </TouchableOpacity>
      </Card>

      <Card className="mb-6 p-6">
        <Text variant="h3" className="mb-2">Enter Verification OTP</Text>
        <Text variant="caption" className="text-slate-500 mb-4">Ask customer for the code sent to their phone</Text>
        <Input 
          placeholder="000000" 
          keyboardType="number-pad" 
          maxLength={6} 
          value={otp}
          onChangeText={setOtp}
          className="text-center text-2xl tracking-widest font-bold"
        />
      </Card>

      <Button title="Complete Delivery" onPress={handleComplete} isLoading={isLoading} className="mb-10" />
    </ScrollView>
  );
}

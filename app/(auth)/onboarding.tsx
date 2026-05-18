import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';

const slides = [
  {
    title: 'Smart Tracking',
    description: 'Track your deliveries in real-time with precise GPS location updates.',
  },
  {
    title: 'Fast Dispatch',
    description: 'Connect with hundreds of verified logistics agents instantly.',
  },
  {
    title: 'Secure Delivery',
    description: 'Verified drop-offs with OTP confirmations and secure photo proofs.',
  }
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/(auth)/login');
    }
  };

  return (
    <View className="flex-1 bg-slate-50 dark:bg-slate-950 px-6 justify-between py-16">
      <View className="items-end">
        <Button title="Skip" variant="ghost" onPress={() => router.replace('/(auth)/login')} />
      </View>

      <Card className="p-8 items-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
        <View className="w-24 h-24 bg-accent/10 rounded-full items-center justify-center mb-8">
          <View className="w-12 h-12 bg-accent rounded-full animate-pulse" />
        </View>
        
        <Text variant="h2" className="text-center mb-4">{slides[currentSlide].title}</Text>
        <Text variant="body" className="text-center text-slate-500">{slides[currentSlide].description}</Text>
      </Card>

      <View className="gap-y-6">
        <View className="flex-row justify-center gap-x-2">
          {slides.map((_, index) => (
            <View 
              key={index}
              className={`h-2 rounded-full ${index === currentSlide ? 'w-6 bg-accent' : 'w-2 bg-slate-300 dark:bg-slate-700'}`}
            />
          ))}
        </View>
        <Button title={currentSlide === slides.length - 1 ? "Get Started" : "Next"} onPress={handleNext} />
      </View>
    </View>
  );
}

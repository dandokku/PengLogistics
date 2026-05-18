import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';
import { useAuthStore } from '@/store/authStore';

export default function RootIndex() {
  const { user, isLoading, hydrate } = useAuthStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-slate-950">
        <ActivityIndicator size="large" color="#F59E0B" />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  // Role-based routing
  if (user.role === 'RIDER') {
    return <Redirect href="/(rider)/(tabs)" />;
  } else if (user.role === 'ADMIN') {
    return <Redirect href="/(admin)/(drawer)" />;
  } else {
    // Default to CUSTOMER
    return <Redirect href="/(customer)/(tabs)" />;
  }
}

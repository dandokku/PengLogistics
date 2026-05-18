import { useAuthStore } from '@/store/authStore';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return null;

  if (user) {
    if (user.role === 'RIDER') {
      return <Redirect href="/(rider)/(tabs)" />;
    } else if (user.role === 'ADMIN') {
      return <Redirect href="/(admin)/(drawer)" />;
    } else {
      return <Redirect href="/(customer)/(tabs)" />;
    }
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="otp" />
    </Stack>
  );
}

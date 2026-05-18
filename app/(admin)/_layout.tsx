import { useAuthStore } from '@/store/authStore';
import { Redirect, Stack } from 'expo-router';

export default function AdminLayout() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return null;

  if (!user || user.role !== 'ADMIN') {
    return <Redirect href="/(auth)/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
        <Text variant="h2" className="mb-2 text-center">This screen doesn't exist.</Text>
        <Text variant="body" className="text-slate-500 mb-8 text-center">
          The link might be broken or the screen was moved.
        </Text>
        
        <Link href="/" asChild>
          <Button title="Go to home screen!" className="w-full max-w-xs" />
        </Link>
      </View>
    </>
  );
}

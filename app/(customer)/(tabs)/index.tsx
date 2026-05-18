import { View, ScrollView } from 'react-native';
import { useAuthStore } from '@/store/authStore';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Package, Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function CustomerDashboard() {
  const { user } = useAuthStore();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <View className="flex-row justify-between items-center mb-8">
        <View>
          <Text variant="caption">Good Morning,</Text>
          <Text variant="h2">{user?.name}</Text>
        </View>
        <View className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full items-center justify-center">
          <Text variant="h3">{user?.name?.charAt(0)}</Text>
        </View>
      </View>

      <Card className="mb-8 p-6 bg-primary dark:bg-surfaceDark">
        <Text variant="h3" className="text-white mb-2">Track a Package</Text>
        <Text variant="caption" className="text-slate-300 mb-4">
          Enter your tracking number below
        </Text>
        <View className="flex-row gap-x-2">
          <Input 
            placeholder="PENG-123456" 
            containerClassName="flex-1"
            className="bg-white/10 text-white border-white/20 dark:bg-white/5"
          />
          <Button 
            variant="secondary" 
            className="px-4"
            onPress={() => router.push('/(customer)/(tabs)/track')}
          >
            <Search color="#0F172A" size={20} />
          </Button>
        </View>
      </Card>

      <Text variant="h3" className="mb-4">Active Deliveries</Text>
      
      <Card variant="elevated" className="mb-4 flex-row items-center p-4">
        <View className="w-12 h-12 bg-accent/20 rounded-xl items-center justify-center mr-4">
          <Package color="#F59E0B" size={24} />
        </View>
        <View className="flex-1">
          <Text variant="body" weight="medium">MacBook Pro M3</Text>
          <Text variant="caption">In Transit • ETA: 2:30 PM</Text>
        </View>
        <Button 
          title="Track" 
          size="sm" 
          onPress={() => router.push('/(customer)/(tabs)/track')}
        />
      </Card>
      
      {/* Spacer */}
      <View className="h-10" />
    </ScrollView>
  );
}
